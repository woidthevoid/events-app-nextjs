import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';

export const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState(' ');

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.id;

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage('Please add a valid email address')
        }

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: emailValue, eventId })
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
            setMessage(data.message);
            inputEmail.current.value = '';

        } catch (e) {
            console.log(e, 'Error');
        }
    };

    return (
        <div className='event_single_page'>
            <h1>{data.title}</h1>
            <Image src={data.image} height={500} width={600} alt={data.title} />
            <p>{data.description}</p>
            <form onSubmit={onSubmit} className='email_registration'>
                <label>Register here!</label>
                <input ref={inputEmail} id='email' placeholder='Enter your email here' />
                <button type='submit'>Submit</button>
            </form>
            <p className='message'>{message}</p>
        </div>
    )
}
