import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);

    return (
        <div>
            <h2>User Form</h2>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleNameChange} />
            <label>Email: </label>
            <input type="email" value={email} onChange={handleEmailChange} />

            <p>Entered Name: {name}</p>
            <p>Entered Email:{email}</p>

        </div>
    );
};

export default Form;
