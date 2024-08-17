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
      .required('Age is required')
      .positive('Age must be a positive number')
      .integer('Age must be an integer')
      .min(1, 'Age must be at least 1')
      .max(150, 'Age must be less than 150'),
    email: yup
      .string()
      .email('Invalid email')
      .required('Email is required')
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email'),
    gender: yup.string().required('Gender is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must include at least one uppercase letter')
      .matches(/[a-z]/, 'Password must include at least one lowercase letter')
      .matches(/[0-9]/, 'Password must include at least one digit')
      .matches(
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
        'Password must include at least one special character (e.g. !@#$%^&*)/)'
      ),
    confirm: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    country: yup.string().oneOf(countries, 'Country is invalid').required('Country is required'),
    file: yup
      .mixed()
      .required('Image is required')
      .test('fileType', 'Only PNG and JPEG files are allowed', (value) => {
        const file = (value as FileList)[0] as File;
        console.log(file);
        return (
          file && (file.type === 'image/jpeg' || file.type === 'image/png')
        );
      })
      .test('fileSize', 'File size is too large. Max size is 2MB', (value) => {
        const file = (value as FileList)[0];
        return file && file.size <= 2 * 1024 * 1024;
      }),
    agree: yup.boolean().required('please accept terms and conditions').oneOf([true], 'please accept terms and conditions'),
  })
  .required('All fields are required');

export interface IFormInput {
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

