import React, { useState } from 'react'

export default function Forms() {

 const [formSubmit,setFormSubmit] = useState(false);
 const [formErr,setFormErr] = useState({})
 const [formData,setFormData] = useState({
    email: "",
    firstName:"",
    lastName:"",
    phone:""
 })


 const firstNameHandler = (e)=>{
  setFormData({
    ...formData,
    firstName : e.target.value
  })
 }

 const lastNameHandler = (e)=>{
  setFormData({
    ...formData,
    lastName : e.target.value
  })
 }

 const emailHandler = (e)=>{
  setFormData({
    ...formData,
    email : e.target.value
  })
 }


 const phoneHandler = (e)=>{
  setFormData({
    ...formData,
    phone : e.target.value
  })
 }

 //handle all inputs in the form

//  const handleInputChange = e =>{
//   let {name,value} = e.target
//   setFormData({
//     ...formData,
//     [name] :value
//   })
//  }


 const formSubmitHandler = (e) =>{
    e.preventDefault()

    let errors = validate(formData)
    setFormErr(errors)

    let errKeyArray = Object.keys(errors)

    if(errKeyArray.length == 0){
      setFormSubmit(true)
    }else{
      setFormSubmit(false)
    }
 }

 const validate = (data) =>{

  let error = {}

  if(data.firstName.trim()==""){
    error.firstName = "Please enter your First Name"
  }
  if(data.lastName.trim()==""){
    error.lastName = "Please enter your Last Name"
  }
  if(data.email.trim()==""){
    error.email = "Please enter your Email"
  }
  if(data.phone.trim()==""){
    error.phone = "Please enter your Phone number"
  }
  if(data.phone.trim().length != 10){
    error.phone = "Please enter 10digit Phone number"
  }
  
  return error;
 }

  return (
    <div className='form-container'>

      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={formSubmitHandler}>

          {formSubmit && <div className='success'>
            <p>Registation Successful</p>
          </div>}

          <label>First Name : </label>
          <input 
            type="text"
            name='firstName' 
            onChange={firstNameHandler}
          />
          {formErr.firstName && <p className='err'>{formErr.firstName}</p>}

          <label>Last Name : </label>
          <input type="text" 
            name='lastName'
            onChange={lastNameHandler}
          
          
          
          />
           {formErr.lastName && <p className='err'>{formErr.lastName}</p>}

          <label>Email : </label>
          <input type="email"
            name='email'
            onChange={emailHandler}

          />
           {formErr.email && <p className='err'>{formErr.email}</p>}

          <label>Phone : </label>
          <input type="number" 
            name='phone'
            onChange={phoneHandler}
          />
           {formErr.phone && <p className='err'>{formErr.phone}</p>}

          <input type="submit" value={"Register"}/>


        </form>
      </fieldset>

    </div>
  )
}
