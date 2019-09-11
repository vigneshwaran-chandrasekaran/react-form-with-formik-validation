import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function FormTwo() {
    return (
        <div className="container">
            <div className='d-flex flex-row justify-content-center'>
                <div className='col-2'></div>
                <div className='col-6'>
                    <Formik>
                        <form>
                            <div className="form-group">
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    className="form-control"
                                    id='name'
                                    placeholder='Enter your name'
                                />
                            </div>
                        </form>
                    </Formik>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
}
