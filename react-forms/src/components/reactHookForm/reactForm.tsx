import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppSelector } from '../../app/hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormInput, schema } from '../../validation/validation';
import { useAppDispatch } from '../../app/hooks';
import { addNewForm, updateForm} from '../../features/formResults/formSlice';


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
    trigger
  } = useForm<FormInput>({ resolver: yupResolver(schema), mode: 'onChange' });
  const onSubmit = async (data: FormInput) => {
    const id = ids.length.toString();
    const formData = {
      ...data,
      newForm: true,
      id,
    };
    dispatch(addNewForm(formData));
    console.log(data);
    navigate('/');

    setTimeout(() => {
      dispatch(updateForm(id));
    }, 5000);
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
            />
            <p className="form__error">{errors.age?.message}</p>
          </div>
          <div className="form__block">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
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
            <select {...register('gender')}>
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
              type="password"
              {...register('password')}
              className="form__input"
              placeholder="Enter your password"
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
            />
            <p className="form__error">{errors.confirm?.message}</p>
          </div>
          <div className="form__block">
            <label htmlFor="country">Select Country</label>
            <input
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
            <input type="checkbox" {...register('agree')} />
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
