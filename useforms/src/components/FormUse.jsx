import React, { useState } from 'react'
import {useForm} from "react-hook-form" ;

export default function FormsUse() {

  const {register,handleSubmit,watch,reset,formState:{errors,isSubmitSuccessful,isSubmitted}} = useForm({})

  const formSubmitHandler = (data)=>{
    console.log(data);  
  }

  console.log(errors);

  return (
    <div className='form-container'>

      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={handleSubmit(formSubmitHandler)}> 

       {isSubmitSuccessful && <div className='success'>
            <p>Registation Successful</p>
          </div>}

          <label>First Name : </label>
          <input 
            type="text"
            name='firstName' {...register("firstName",{
              required:"Fill First Name",minLength:{value:4,message:"Minimum 4 characters are required"}
            })} 
          />
          {errors.firstName && <p className='err'>{errors.firstName.message}</p>}


          <label>Last Name : </label>
          <input type="text" 
            name='lastName'  {...register("lastName",{
              required:"Fill Last Name",minLength:{value:4,message:"Minimum 4 characters are required"}
            })}      
          
          
          />
          {errors.lastName && <p className='err'>{errors.lastName.message}</p>}


          <label>Email : </label>
          <input type="email"
            name='email' {...register("email",{
              required:"Fill the Email"
            })}

          />
          {errors.email && <p className='err'>{errors.email.message}</p>}


          <label>Password : </label>
          <input type='password' 
            name='password' {...register("password",{
              required:"Please enter the password",minLength:{value:8,message:"Minimum 8 characters are required"}
            })}
          />
          {errors.password && <p className='err'>{errors.password.message}</p>}


          <input type="submit"/>
          <button onClick={()=>{
            reset()
          }}>RESET</button>


        </form>
      </fieldset>

    </div>
  )
}
