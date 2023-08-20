import React from 'react'
import { useFormik } from 'formik'
import { Button } from 'react-bootstrap'
import * as yup from 'yup'

function Form() {
    const formik = useFormik({
        initialValues : {
            name: '',
            email: '',
            description: ''
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email().required(),
            description: yup.string().required(), 
        }),
        onSubmit:(values, {resetForm}) => {
            console.log(values);
            resetForm({values : ''});
        },
    });
    // console.error(formik.errors);
  
  return (
    <>
        <section className='message'>
            <div className='row'>
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="message-left-section">
                    <p className='message-left-header'>Send us a message</p>
                    <form action="" className='message-form' onSubmit={formik.handleSubmit}>
                        <div className='input-padding'>
                            <input
                                name='name'
                                type='text'
                                placeholder='Name'
                                className='name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                
                            />
                            <span className='error-handler'>{formik.touched && formik.errors.name && ( formik.errors.name )}</span>
                        </div>
                        <div className='input-padding'>
                            <input 
                                name='email' 
                                type='email' 
                                placeholder='Email' 
                                className='email'
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                
                            />
                            <span className='error-handler'>{formik.touched && formik.errors.email && ( formik.errors.email )}</span>
                        </div>
                        <div className='input-padding'>
                            <textarea
                                name='description' 
                                placeholder='Message' 
                                className='des' 
                                rows="4" 
                                cols="50"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                
                            ></textarea>
                            <span className='error-handler'>{formik.touched && formik.errors.description && ( formik.errors.description )}</span>
                        </div>

                        <div className='message-button'>
                            <Button type='submit' className='button-style'>SEND MESSAGE</Button>
                        </div>
                    </form>
                </div>
                <div className="message-right-section">
                
                <div className="message-right-section-text">
                    <p><span className="message-right-section-header-text" >How we can help you</span></p>
                    <p><span className="message-right-section-header-des" >Simply fill in a few details in our contact form or get in touch with us by email, and one of our experts will contact you shortly.</span></p>
                    <p><span className="message-right-section-email">info@binarygroveoy.com</span></p>
                    <p><span className="message-right-section-email-des">This could be the beginning of a wonderful collaboration and the easiest way to acquire a highly-experienced team</span></p>
                </div>
                </div>
            </div>
            <div className="col-md-1"></div>
            </div>
            <div className="clr"></div>
        </section>
    </>
  )
}

export default Form