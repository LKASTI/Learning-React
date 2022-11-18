import '../App.css';
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
function Form() {
   
  // specify the data we are retrieving is an object with 'yup.object'
  const schema = yup.object().shape({ 
    userName: yup.string().required("must enter a username").min(5).max(15),
    email: yup.string().required("must enter a email").email(),
    age: yup.number().positive("must be a positive number").min(18, "must be at least 18 years of age").required("must enter an age"),
    password: yup.string().required("must enter a password").min(8, "password must be at least 8 characters").max(15, "password must be at most 15 characters")
                        .matches(/[\d, \d, \d]/, "password must contain at least 3 numbers")
                        .matches(/\W+/, "password must contain at least one special character"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "passwords must match").required("must confirm password"),
  })
  //register is a function that retrieves input from a form
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema) //dont know??
  })
  const onSubmit = (data) =>{
    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}> {/*form is an object*/} 
      <input type="text" placeholder='username...' {...register("userName")}/>
      <p>{errors.userName?.message}</p>
      <input type="text" placeholder='email...'{...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder='age...'{...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="text" placeholder='password...'{...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="text" placeholder='confirm password...'{...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit"/>
    </form>
  )
}

export default Form;
