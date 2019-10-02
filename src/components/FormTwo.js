import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import Error from './Error';

const validationSchema = Yup.object().shape({
    userName: Yup.string()
        .min(1)
        .max(15)
        .required(),
    email: Yup.string()
        .email()
        .min(1)
        .max(15)
        .required(),
    country: Yup.string()
        .required()
});

// initial state (starting field values)
const initialValues = {
    email: 'one@g.coms',
    userName: 'two',
    country: ''
};

export default function FormTwo() {
    const [country, setCountry] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    function onSuggestionsClearRequested() {
        console.log('hi');
        setSuggestions([]);
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log({ values });
                    setSubmitting(true);
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email address:</label>
                                <input
                                    type="email"
                                    className={"form-control " + (touched.email && errors.email ? 'border-danger' : '')}
                                    id="email"
                                    name="email"
                                    placeholder='Enter your email'
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <Error touched={touched.email} message={errors.email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor='userName'>Name</label>
                                <input
                                    type='text'
                                    className={"form-control " + (touched.userName && errors.userName ? 'border-danger' : '')}
                                    id='userName'
                                    name='userName'
                                    placeholder='Enter your name'
                                    value={values.userName}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <Error touched={touched.userName} message={errors.userName} />
                            </div>

                            <div className="form-group">
                                <label htmlFor='autosuggest'>Autosuggest</label>
                                <Autosuggest
                                    inputProps={{
                                        value: country,          // usually comes from the application state
                                        // onBlur,         // called when the input loses focus, e.g. when user presses Tab
                                        type: 'search',
                                        placeholder: 'Enter city or postcode',
                                        className: "form-control " + (touched.country && errors.country ? 'border-danger' : ''),
                                        autoComplete: 'hello',
                                        name: 'autosuggest',
                                        id: 'autosuggest',
                                        onChange: (_event, { newValue }) => {
                                            // called every time the input value changes
                                            console.log({ newValue });
                                            setCountry(newValue);
                                            console.log(country);
                                        }
                                    }}
                                    suggestions={suggestions}
                                    onSuggestionsFetchRequested={async ({ value }) => {
                                        console.log({ value });
                                        if (!value) {
                                            setSuggestions([]);
                                            return;
                                        }

                                        try {
                                            const result = await axios.get(`https://restcountries.eu/rest/v2/name/${value}`);
                                            console.log(result.data);
                                            setSuggestions(result.data.map(row => ({
                                                name: row.name,
                                                flag: row.flag
                                            })));
                                        } catch (error) {
                                            setSuggestions([]);
                                        }
                                    }}
                                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                                    getSuggestionValue={(suggestion) => {
                                        return suggestion.name;
                                    }}
                                    renderSuggestion={(suggestion) => {
                                        return <div>
                                            <img
                                                style={{ width: '25px', paddingRight: '10px' }}
                                                src={suggestion.flag}
                                                alt={suggestion.name} />
                                            {suggestion.name}
                                        </div>;
                                    }}
                                    onSuggestionSelected={(event,
                                        { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
                                        if (method === 'enter') {
                                            event.preventDefault();
                                        }
                                        setCountry(suggestion.name);
                                        setFieldValue('country', suggestion.name);
                                    }}
                                />
                                <Error touched={touched.country} message={errors.country} />

                            </div>
                            <div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="btn btn-primary">
                                    Submit
                                        </button>
                            </div>
                            {JSON.stringify(values)}
                        </form>
                    )}
            </Formik>
        </>
    )
}
