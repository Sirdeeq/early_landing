/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { FormGroup, Input, Label } from 'reactstrap';
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
                    <p className='sign-in-para'>Sign Up</p>
                </div>
                <div className='sign-in-div4'>
                    <div>
                        <input className='sign-in-input' type='text' placeholder='First Name' style={{marginRigth: -30}}/>
                        <input className='sign-in-input' type='text' placeholder='Last Name' />
                    </div>
                    <div>
                        <input className='sign-in-input' type='text' placeholder='User Name' style={{marginRigth: -30}}/>
                        <input className='sign-in-input' type='email' placeholder='Email' />
                    </div>
                    <div>
                        <input className='sign-in-input' type='password' placeholder='Password' style={{marginRigth: -30}}/>
                        <input className='sign-in-input' type='password' placeholder='Confirm Password' />
                    </div>
                    <input className='sign-in-input' type='password' placeholder='Official ID' />
                    {/* <Label className='sign-in-label'>
                        <Input type="switch" role="switch" />Remember Me</Label>
                    </FormGroup> */}
                    <button className='sign-in-bottom'>Sign Up</button>
                    <div>
                        <p className='sign-in-para1'>Don't have an account?<a href='#' className='sign-in-href'
                            // onClick={()=>navigate('/sign-up')}
                        > LogIn </a></p>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}