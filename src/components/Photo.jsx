import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatsV from './Interface/button/MyButton'

export default function Photo({id, albumId}){
    const param = useParams()
    const[photos,setPhotos]=useState([])
    console.log(id)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=5`)
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.error(error));
    }, [])
    const [form,setForm] = useState(0)
    function button(){
        if(form === 1){
            setForm('Не в избранном')
        }else{
            {setForm('В Избранном')}
        }
    }
    return(
        <div>
        {photos.map(photo=>(
            <div>
            <h1>Название фото: {photo.title}</h1>
            <p>Картинка № {photo.id}</p>
            <p>{form ? 'В избранном' : 'Не избрано' }</p>
            <img src={photo.url} alt=""/><br/>
            <CatsV onClick={button}>Добавить в избраное</CatsV>
            </div>
        ))}
    </div>
    )
}