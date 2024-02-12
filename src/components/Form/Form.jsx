import React, { useState } from 'react'
import './Form.scss'

function Form() {

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState('')
  const [textarea, setTextaera] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors)
  }
  const validate = () => {

    const error = {};
    if (!email) {
      error.email = "Email-адрес введен неправильно"
    } else {
      error.email = ''
    }
    if (!textarea) {
      error.textarea = "Менее 10 слов"
    } else {
      error.textarea = ''
    }

    return error;
  }
  return (

    <form onSubmit={handleSubmit} >
      <h1 className='form-title'> Looking for help with design</h1>
      <p className='form-text'>Send me details</p>
      <label htmlFor="name"> Name</label>
      <label htmlFor="name"> Name</label>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder='Enter your email' />
      {errors.email && <div className='error'>{errors.email}</div>}
      <label htmlFor="text">Detail</label>
      <textarea name="messange" id="text" cols="30" rows="5" placeholder='Enter your messenga...'></textarea>
      {errors.textarea && <div className='error'> {errors.textarea}</div>}
      <div className='button'>
        <button type='submit' className='button'> Submit </button>
      </div>
    </form>
  )
}

export default Form