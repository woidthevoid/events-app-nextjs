import React, { useRef } from 'react'
import Image from 'next/image'

export const SingleEvent = ({ data }) => {
    const inputEmail = useRef;
    const onSubmit = (e) => {
        e.preventDefault();
        
    };
    return (
        <div className='event_single_page'>
            <h1>{data.title}</h1>
            <Image src={data.image} height={500} width={600} alt={data.title} />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className='email_registration'>
                <label>Register here!</label>
                <input ref={inputEmail} type="email" id='email' placeholder='Enter your email here' />
                <button type='button'>Submit</button>
            </form>
        </div>
    )
}
