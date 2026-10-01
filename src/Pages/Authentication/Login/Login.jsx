import React from 'react'
import { useForm } from 'react-hook-form'

const onSubmit = (data) =>{
  console.log(data);
  
}
const Login = () => {
  const {register, handleSubmit,formState:{errors}} = useForm();
  return (
    <div>
           <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email")} className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register("password",{required:true, minLength:6})} className="input w-full" placeholder="Password" />
          {
            errors.password?.type === "required" && <p className='text-xl text-red-500'>password is required</p>
          },
          {
            errors.password?.type === "minLength" && <p className='text-xl text-red-500'>Password must be 6 charecture</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
    </div>
  )
}

export default Login
