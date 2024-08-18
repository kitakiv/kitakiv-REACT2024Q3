import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../app/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormInput, FormState, schema } from '../../validation/validation';
import { useAppDispatch } from '../../app/hooks';
import { addNewForm, updateForm } from '../../features/formResults/formSlice';

function ReactForm() {
  const dispatch = useAppDispatch();
  const [countrySelect, setCountrySelect] = useState('');
  const { value } = useAppSelector((state) => state.countries);
  const { ids } = useAppSelector((state) => state.formResults);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    trigger,
    reset
  } = useForm<FormInput>({ resolver: yupResolver(schema), mode: 'onChange' });
  const onSubmit = async (data: FormInput) => {
    const file = data.file[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const id = ids.length.toString();
        const formData: FormState = {
          firstName: data.firstName,
          age: data.age,
          email: data.email,
          gender: data.gender,
          password: data.password,
          confirm: data.confirm,
          country: data.country,
          agree: data.agree,
          newForm: true,
          id: ids.length.toString(),
          base64: reader.result as string,
        };
        dispatch(addNewForm(formData));
        console.log(data);
        navigate('/');
        setTimeout(() => {
          dispatch(updateForm(id));
        }, 5000);
        reset();
      }
    }
  };
  return (
    <div className="form__wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2 className="form__text">React Hook Form</h2>
        <div>
          <div className="form__block">
            <label htmlFor="firstName" className="form__label">
              First Name
            </label>
            <input
              type="text"
              {...register('firstName')}
              className="form__input"
              placeholder="Enter your first name"
              autoComplete="additional-name"
              id='firstName'
            />
            <p className="form__error">{errors.firstName?.message}</p>
          </div>

          <div className="form__block">
            <label htmlFor="age" className="form__label">
              Age
            </label>
            <input
              type="number"
              {...register('age')}
              className="form__input"
              placeholder="Enter your age"
              autoComplete="on"
              id='age'
            />
            <p className="form__error">{errors.age?.message}</p>
          </div>
          <div className="form__block">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              id='email'
              type="text"
              {...register('email')}
              className="form__input"
              placeholder="Enter your email"
              autoComplete="email"
            />
            <p className="form__error">{errors.email?.message}</p>
          </div>

          <div className="form__block">
            <label htmlFor="gender" className="form__label">
              Gender
            </label>
            <select {...register('gender')} id='gender'>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="form__error">{errors.gender?.message}</p>
          </div>
        </div>
        <div>
          <div className="form__block">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              id='password'
              type="password"
              {...register('password')}
              className="form__input"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <p className="form__error">{errors.password?.message}</p>
          </div>
          <div className="form__block">
            <label htmlFor="confirm" className="form__label">
              Confirm Password
            </label>
            <input
              type="password"
              {...register('confirm')}
              className="form__input"
              placeholder="Confirm your password"
              autoComplete="confirm-password"
              id='confirm'
            />
            <p className="form__error">{errors.confirm?.message}</p>
          </div>
          <div className="form__block">
            <label htmlFor="country">Select Country</label>
            <input
              id='country'
              type="text"
              className="form__input"
              {...register('country')}
              onChange={(e) => {
                setCountrySelect(e.target.value);
                setValue('country', e.target.value);
                trigger('country');
              }}
              placeholder="Enter your country"
              autoComplete="country-name"
            />
            <div className="form__down">
              {value
                .filter(
                  (country) =>
                    country
                      .toLowerCase()
                      .startsWith(countrySelect.toLowerCase()) &&
                    country.toLowerCase() !== countrySelect.toLowerCase() &&
                    countrySelect !== ''
                )
                .map((country) => (
                  <div
                    key={country}
                    className="form__down-country"
                    onClick={() => {
                      setValue('country', country);
                      setCountrySelect(country);
                      trigger('country');
                    }}
                  >
                    {country}
                  </div>
                ))
                .slice(0, 10)}
            </div>
            <p className="form__error">{errors.country?.message}</p>
          </div>
          <div className="form__block">
            <label htmlFor="file">Upload File</label>
            <input
              id='file'
              type="file"
              {...register('file')}
              accept=".jpeg, .png"
              placeholder="Upload"
              autoComplete="file"
              className="form__input"
            />
            <p className="form__error">{errors.file?.message}</p>
          </div>
          <div className="form__block form__checkbox">
            <input type="checkbox" {...register('agree')}  id='checkbox'/>
            <label htmlFor="checkbox">
              accept Terms and Conditions agreement
            </label>
            <p className="form__error">{errors.agree?.message}</p>
          </div>
        </div>
        <input
          type="submit"
          className="form__btn"
          value={'Submit'}
          disabled={!isValid}
        />
      </form>
    </div>
  );
}

export default ReactForm;
