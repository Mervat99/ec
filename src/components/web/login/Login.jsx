import React from 'react'
import Input from '../../shared/Input.jsx'
import { useFormik } from 'formik'
import { Formik } from 'formik';
import { loginSchema } from '../validation/validate.js';
import axios from "axios";
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
export default function Login({saveCurrentUser}) {
const navigate = useNavigate();
    const initialValues={
            email: '',
            password: '',
    };
  
    const handleFieldChange = (event)=> {
           formik.setFieldValue('image',event.target.files[0])
    }

    const onSubmit = async users=>{
        // there is no need to use form data because its only used when we use images
    // const formData = new FormData();
    // formData.append("userName",users.userName);
    // formData.append("email",users.email);
    // formData.append("password",users.password);
    // formData.append("image",users.image);
    // console.log(users.userName +" "+users.email+" "+users.password)


    const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`, users);
    console.log(data);
    if(data.message == 'success') {
       localStorage.setItem("userToken",data.token);
       saveCurrentUser();
       toast.success(' login succesfully  ',{
        position : 'top-right' ,
        autoClose : false ,
        hideProgressBar : false ,
        closeOnClick : true ,
        pauseOnHover : true ,
        draggable : true ,
        progress : undefined ,
        theme : "dark" ,
    })
       navigate('/')

    }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:loginSchema
    });
    const inputs = [
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'user email',
            value: formik.values.email,
        }
        ,
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'user password',
            value: formik.values.password,
        },
    
    ];

    const renderInputs = inputs.map((input, index) =>
        <Input
            type={input.type}
            id={input.id}
            title={input.title}
            name={input.name}
            key={index}
            errors ={formik.errors}
            onChange={input.onChange || formik.handleChange}
            onBlur = {formik.handleBlur}
            touched ={formik.touched}

        />
    )


    return (
        <>
            <div className='container'>
                <h2>login</h2>
                <form onSubmit={formik.handleSubmit} >
                    {renderInputs}

                    <button type="submit" disabled={!formik.isValid}>Login</button>
                </form>
            </div>
        </>
    )
}
