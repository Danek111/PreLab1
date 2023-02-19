import React from "react";
import { useState } from "react";
import CatsV from "./Interface/button/MyButton";
import CatsI from "./Interface/input/MyInput";

export default function Login({onSubmit}){
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')
    const[error, setError]=useState(null)

    const handleSubmit = event =>{
        event.preventDefault()
        if(!username || !password){
            setError('Введите пароль и имя')
            return
        }
        setError(null)
        onSubmit({username, password})
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Вход</h1>
            {error && <p>{error}</p>}
            <CatsI placeholder='Ваше имя' value={username} onChange={event=>setUserName(event.target.value)}/>
            <CatsI type='password' placeholder="Ваш пароль" value={password} onChange={event=>setPassword(event.target.value)}/>
            <br/><CatsV type="submit">Войти</CatsV>
        </form>
    )
}