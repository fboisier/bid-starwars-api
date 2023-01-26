import React, { useState } from 'react';

const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];

const Formulario = ({ nombre }) => {
    const [username, setUsername] = useState(nombre);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [isTasty, setIsTasty] = useState(false);
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password, isTasty , selectedFruit};
        console.log("Welcome", newUser);
    };

    const handleChangeUserName = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setErrorPassword("El campo tiene menos de 8 caracteres.")
        } else {
            setErrorPassword("");
        }
    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={handleChangeUserName} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={handlePassword} />
                {
                    errorPassword ? <p className="error">{errorPassword}</p> : ''
                }
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)} /> Is it tasty?
                </label>
            </div>
            <div>
                <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                    {fruits.map((fruit, idx) => 
                        <option key={idx} value={fruit}>{fruit}</option>
                    )}
                </select>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default Formulario;