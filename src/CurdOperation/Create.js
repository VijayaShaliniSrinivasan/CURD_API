import axios from 'axios';
import React, { useState } from 'react'
import {Button, Form} from 'semantic-ui-react'
import { API_URL } from '../Constant/API_URL';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const[firstName,setFirstName]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate();

    const postData = async () =>{
        await axios.post(API_URL,{
            firstName,
            email
        })
        navigate('/read')

    }
  return (
    <>
     <h1 className='mb-5 mt-5 '>CRUD-OPERATIONS USING API</h1>
    <div className='form'>
        <Form>
            <Form.Field className='head'>
                <label>Name</label>
                <input type='text'  value={firstName} placeholder='Enter Your Name' onChange={e=>setFirstName(e.target.value)} />
            </Form.Field>

            <Form.Field>
                <label>E-mail</label>
                <input type='email' value={email} placeholder='Enter Your Email' onChange={e=>setEmail(e.target.value)} />
            </Form.Field>

            <div className='btn'>
                <Button onClick={postData}>Click To Submit</Button>
            </div>

        </Form>
    </div>
    </>
  )
}

export default Create