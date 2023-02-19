import React from "react";
import { useState } from "react";

import MyButton from "./Interface/button/MyButton";
import CatsI from "./Interface/input/MyInput";

export default function Registration({onSubmit}){
    const[username,setUserName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword, setConfirmPassword]=useState('')
    const[error,setError]=useState(null)

    const handleSubmit = event =>{
        event.preventDefault()
        if(!username || !email || !password || !confirmPassword){
            setError('Вы заполнили не все поля')
            return
        }
        if(password!== confirmPassword){
            setError('Пароль не совпал')
            return
        }
        setError(null)
        onSubmit({ username, email, password})
    }
    return(
        <form>
            <h1>Регистрация</h1>
            {error &&<p>{error}</p>}
            <CatsI placeholder="Введите ваше имя" value={username} onChange={event => setUserName(event.target.value)}/>
            <CatsI type='email' placeholder="Ваш Email" value={email} onChange={event => setEmail(event.target.value)}/>
            <CatsI type='password' placeholder="Придумайте пароль" value={password} onChange={event => setPassword(event.target.value)}/>
            <CatsI type='password' placeholder="Подтвердите пароль" value={confirmPassword} onChange={event=>setConfirmPassword(event.target.value)}/>
            <br/><MyButton type="submit">Зарегистрироваться</MyButton>
        </form>
    )
}