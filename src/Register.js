// import { Box, Button, Card, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  fName: yup.string().min(3).max(10).required(),
  lastName: yup.string().min(3).max(10).required(),
  email: yup.string().email().required(),
  age:yup.number("Age must be used number!").positive("Age must be Positive number!").integer("Age must be integer!").required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
})

const defaultValues = {
  fName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",

}


function Register() {
  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver:yupResolver(schema),
    defaultValues
  });

  // const {fName} = watch()

  // console.log(fName);

  const submitForm = (data)=>{
    console.log(data)
  };


  return (
    <>
     <div className="Form">
        <div className="title">Sign Up</div>
        <div className="inputs">
            <form className='Form' onSubmit={handleSubmit(submitForm)}>
                <input type="text" placeholder='First Name...' {...register("fName")}/>
                <p>{errors?.fName?.message}</p>
                <input type="text" placeholder='Last Name...' {...register("lastName")}/>
                <p>{errors?.lastName?.message}</p>
                <input type="text" placeholder='Email...' {...register("email")}/>
                <p>{errors?.email?.message}</p>
                <input type="number" placeholder='Age...'{...register("age")}/>
                <p>{errors?.age?.message}</p>
                <input type="text" placeholder='Password...' {...register("password")}/>
                <p>{errors?.password?.message}</p>
                <input type="text" placeholder='Confirm Password...' {...register("confirmPassword")}/>
                <p>{errors?.confirmPassword && "Password should Match!"}</p>
                <input type='submit' id='submit'/>
            </form>
        </div>

     </div>
    </>
  )
}

export default Register