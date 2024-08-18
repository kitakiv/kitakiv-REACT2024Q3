import * as yup from 'yup';
import { countries } from '../validation/allcountries';

export const schema = yup
  .object({
    firstName: yup
      .string()
      .test(
        'firstName',
        'First name must start with a capital letter',
        (value) => {
          const firstName = value || '';
          return firstName.charAt(0) === firstName.charAt(0).toUpperCase();
        }
      )
      .min(3, 'First name must be at least 3 characters')
      .matches(/^[A-Za-z]+$/, 'First name must include only English letters')
      .required('First name is required'),
    age: yup
      .number()
      .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .min(1, 'Age must be at least 1')
      .max(150, 'Age must be less than 150')
      .required('Age is required'),
    email: yup
      .string()
      .email('Invalid email')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email')
      .required('Email is required'),
    gender: yup.string().required('Gender is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must include at least one uppercase letter')
      .matches(/[a-z]/, 'Password must include at least one lowercase letter')
      .matches(/[0-9]/, 'Password must include at least one digit')
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
        'Password must include at least one special character (e.g. !@#$%^&*)/)'
      )
      .required('Password is required'),
    confirm: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    country: yup
      .string()
      .oneOf(countries, 'Country is invalid')
      .required('Country is required'),
    file: yup
      .mixed()
      .test('fileType', 'Only PNG and JPEG files are allowed', (value) => {
        const file = (value as FileList)[0] as File;
        return (
          file && (file.type === 'image/jpeg' || file.type === 'image/png')
        );
      })
      .test('fileSize', 'File size is too large. Max size is 2MB', (value) => {
        const file = (value as FileList)[0];
        if (!file) return true;
        return file && file.size <= 2 * 1024 * 1024;
      })
      .required('Image is required'),
    agree: yup
      .boolean()
      .required('please accept terms and conditions')
      .oneOf([true], 'please accept terms and conditions'),
  })
  .required('All fields are required');

export interface FormInput {
  firstName: string;
  gender: string;
  age: number;
  email: string;
  password: string;
  confirm: string;
  country: string;
  agree: boolean;
  file: FileList;
}

export interface ValidFormInput {
  firstName: string | undefined;
  gender: string | undefined;
  age: number | undefined | string;
  email: string | undefined;
  password: string | undefined;
  confirm: string | undefined;
  country: string | undefined;
  agree: boolean | undefined;
  file: FileList | undefined | null;
}

export interface Base64 {
    firstName: string;
    gender: string;
    age: number;
    email: string;
    password: string;
    confirm: string;
    country: string;
    agree: boolean;
    base64: string;
  }



export interface FormState extends Base64 {
    newForm: boolean;
    id: string;
  }
