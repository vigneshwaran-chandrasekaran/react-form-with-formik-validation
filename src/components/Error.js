import React from 'react';

export default function Error({ touched, message }) {
    if (!touched) {
        return <div>&nbsp;</div>;
    }
    if (message) {
        return <div className='text-danger'>{message} <span role="img" aria-label='Emoji'>😟</span></div>;
    }
    return <div className='text-success'>all good <span role="img" aria-label='Emoji'>😃</span></div>;
}
