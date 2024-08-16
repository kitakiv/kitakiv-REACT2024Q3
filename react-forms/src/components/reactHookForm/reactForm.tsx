import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppSelector } from '../../app/hooks';

interface IFormInput {
  firstName: string;
  gender: string;
  age: number;
  email: string;
  password: string;
  confirm: string;
  country: string;
  agree: boolean;
}

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required().min(1).max(150),
    email: yup.string().email().required(),
    gender: yup.string().required(),
    password: yup.string().required().min(8),
    confirm: yup.string().required().oneOf([yup.ref('password')]),
    country: yup.string().required(),
    agree: yup.boolean().required().oneOf([true]),
  }).required();

function ReactForm() {
    const {value} = useAppSelector((state) => state.countries)
  const { register, handleSubmit, formState:{ errors }} = useForm<IFormInput>(
    {resolver: yupResolver(schema)}
  );
  const onSubmit = (data: IFormInput) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
    <div>
    <label htmlFor="firstName" className='form__label'>First Name</label>
      <input type="text" {...register("firstName")} className='form__input'/>
      <p>{errors.firstName?.message}</p>

      <label htmlFor="age" className='form__label'>Age</label>
      <input type="number" {...register("age")} className='form__input'/>
      <p>{errors.age?.message}</p>

      <label htmlFor="email" className='form__label'>Email</label>
      <input type="text" {...register("email")} className='form__input'/>
      <p>{errors.email?.message}</p>

      <label htmlFor="gender" className='form__label'>Gender</label>
      <select {...register("gender")}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <p>{errors.gender?.message}</p>
    </div>
    <div>
      <label htmlFor="password" className='form__label'>Password</label>
        <input type="password" {...register("password")} className="form__input"/>
        <p>{errors.password?.message}</p>
        <label htmlFor="confirm" className="form__label">Confirm Password</label>
        <input type="password" {...register("confirm")} className="form__input"/>
        <p>{errors.confirm?.message}</p>
        <label htmlFor="country">Select Country</label>
        <select {...register("country")}>
            {value.map((country) => (
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
        <p>{errors.country?.message}</p>
        <input type="checkbox" {...register("agree")}/>
        <label htmlFor="checkbox">accept Terms and Conditions agreement</label>
        <p>{errors.agree?.message}</p>
        <input type="submit" className='form__btn' value={"Submit"}/>
    </div>
    </form>
  );
}

export default ReactForm;
