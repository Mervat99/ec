import React from 'react'
import Input from '../../shared/Input.jsx'
import { useFormik } from 'formik'
import { Formik } from 'formik';
import { registerSchema } from '../validation/validate.js';
import axios from "axios";
import { toast } from 'react-toastify';
export default function Register() {

    // const formik = useFormik({
    //     initialValues: {
    //         userName: '',
    //         email: '',
    //         password: '',
    //     } ,
    //     onSubmit: values=> {
    //         console.log(values);
    //     } ,
    //     validate: values =>{
    //      let errors = {};
// 
    //      if(!values.userName){
    //         errors.userName =" userName is required"
    //      }
// 
    //      if(!values.email){
    //         errors.email =" email is required"
    //      }
        //  
    //      if(!values.password){
    //         errors.password =" password is required"
    //      }
// 
    //      return errors;
    //     }
    // });

    const initialValues={
            userName: '',
            email: '',
            password: '',
    };
  
    

    const handleFieldChange = (event)=> {
           formik.setFieldValue('image',event.target.files[0])
    }

    const onSubmit = async users=>{
    const formData = new FormData();
    formData.append("userName",users.userName);
    formData.append("email",users.email);
    formData.append("password",users.password);
    formData.append("image",users.image);
    console.log(users.userName +" "+users.email+" "+users.password)

    // (let data of formData.entries()){
    //     console.log(data);
    // }
    const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData);
    if(data.message == 'success')
    {
        formik.resetForm();
        toast.success(' account created succesfully , plz verify your email to login ',{
            position : 'bottom-center' ,
            autoClose : false ,
            hideProgressBar : false ,
            closeOnClick : true ,
            pauseOnHover : true ,
            draggable : true ,
            progress : undefined ,
            theme : "dark" ,
        })
    }
    }


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema:registerSchema
    });
    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'userName',
            title: 'user name',
            value: formik.values.name,
        },
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
    
        {
            id: 'image' ,
            type: 'file',
            name: 'image',
            title: 'user image',         
            onChange: handleFieldChange

        } ,

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
                <h2>create account</h2>
                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                    {renderInputs}

                    <button type="submit" disabled={!formik.isValid}>Register</button>
                </form>
            </div>
        </>
    )
}
