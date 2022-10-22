/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { FormGroup, Input, Label } from 'reactstrap';
import TopNavbar from '../Nav/TopNavbar';
import Footer from "../Sections/Footer"

export default function SignIn() {
//   const navigate= useNavigate()
  return (
    <>
      <TopNavbar />
        <div className='sign-in-div1'>
            <div className='sign-in-div2'>
                <div className='sign-in-div3'>
                    <p className='sign-in-para'>LogIn</p>
                </div>
                <div className='sign-in-div4'>
                    <input className='sign-in-input' type='email' placeholder='Email / Registration Number' />
                    <input className='sign-in-input' type='password' placeholder='Password' />
                    <FormGroup switch className='sign-in-switch'>
                    <Label className='sign-in-label'>
                        <Input type="switch" role="switch" />
                        Remember Me</Label>
                    </FormGroup>
                    <button className='sign-in-bottom'>LogIn</button>
                    <div>
                    <p className='sign-in-para1'>Don't have an account?<a href='#' className='sign-in-href'
                        // onClick={()=>navigate('/sign-up')}
                    > Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}