import MDEditor from '@uiw/react-md-editor'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Content = () => {
    const[show, setShow]= useState('')
    useEffect(()=>{
        const getContent= async() => {
            const result = await axios('http://localhost:3000/content')
            setShow(result.data);
            console.log(show);
        }
        getContent();
    },[])

    return (

    <div><MDEditor.Markdown source={show} style={{ whiteSpace: 'pre-wrap' }} /></div>
    )
}
