import { useState, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { schema, ValidFormInput, FormInput } from '../../validation/validation';
import { ValidationError } from 'yup';
import { addNewForm, updateForm } from '../../features/formResults/formSlice';
import { useNavigate } from 'react-router';
import { FormState } from '../../validation/validation';
function UncontrolledForm() {
  const [confirmEye, setConfirmEye] = useState(true);
  const [passwordEye, setPasswordEye] = useState(true);
  const [countrySelect, setCountrySelect] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const ids = useAppSelector((state) => state.formResults.ids);
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.countries);
  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      firstName: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      gender: genderRef.current?.value,
      password: passwordRef.current?.value,
      confirm: confirmRef.current?.value,
      country: countryRef.current?.value,
      agree: agreeRef.current?.checked,
      file: fileRef.current?.files,
    };

    function reset() {
      nameRef.current!.value = '';
      ageRef.current!.value = '';
      emailRef.current!.value = '';
      genderRef.current!.value = '';
      passwordRef.current!.value = '';
      confirmRef.current!.value = '';
      countryRef.current!.value = '';
      agreeRef.current!.checked = false;
      fileRef.current!.value = '';
    }
    const isValid = await checkValidation(data);

    if (isValid) {
      const form = data as unknown as FormInput;
      const file = fileRef.current?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log(reader);

        reader.onload = () => {
          const formData: FormState = {
            firstName: form.firstName,
            age: form.age,
            email: form.email,
            gender: form.gender,
            password: form.password,
            confirm: form.confirm,
            country: form.country,
            agree: form.agree,
            newForm: true,
            id: ids.length.toString(),
            base64: reader.result as string,
          };
          dispatch(addNewForm(formData));
          navigate('/');
          setTimeout(() => {
            dispatch(updateForm(formData.id));
          }, 5000);
          reset();
        };
      }
    }
  };

  async function checkValidation(data: ValidFormInput) {
    try {
      await schema.validate(data, { abortEarly: false });
      setFormErrors({});
      return true;
    } catch (err: unknown) {
      if (err instanceof ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          const path = error.path as string;
          validationErrors[path] = error.message;
        });
        setFormErrors(validationErrors);
      }
      return false;
    }
  }

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const agreeRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="form__wrapper">
      <form onSubmit={submitForm} className="form">
        <h2 className="form__text">Uncontrolled Form</h2>
        <div>
          <div className="form__block">
            <label htmlFor="firstName" className="form__label">
              First Name
            </label>
            <input
              type="text"
              ref={nameRef}
              className="form__input"
              placeholder="Enter your first name"
              autoComplete="additional-name"
              id="firstName"
            />
            <p className="form__error">{formErrors.firstName}</p>
          </div>

          <div className="form__block">
            <label htmlFor="age" className="form__label">
              Age
            </label>
            <input
              type="number"
              ref={ageRef}
              className="form__input"
              placeholder="Enter your age"
              autoComplete="on"
              id="age"
            />
            <p className="form__error">{formErrors.age}</p>
          </div>
          <div className="form__block">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="text"
              ref={emailRef}
              className="form__input"
              placeholder="Enter your email"
              autoComplete="email"
              id="email"
            />
            <p className="form__error">{formErrors.email}</p>
          </div>

          <div className="form__block">
            <label htmlFor="gender" className="form__label">
              Gender
            </label>
            <select ref={genderRef} id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p className="form__error">{formErrors.gender}</p>
          </div>
        </div>
        <div>
          <div className="form__block">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type={passwordEye ? 'password' : 'text'}
              ref={passwordRef}
              className="form__input"
              placeholder="Enter your password"
              id="password"
              autoComplete="new-password"
            />
            <div className={passwordEye ? 'form__eye' : 'form__eye_hide'} onClick={() => setPasswordEye(!passwordEye)}></div>
            <p className="form__error">{formErrors.password}</p>
          </div>
          <div className="form__block">
            <label htmlFor="confirm" className="form__label">
              Confirm Password
            </label>
            <input
              type={confirmEye ? 'password' : 'text'}
              ref={confirmRef}
              className="form__input"
              placeholder="Confirm your password"
              id="confirm"
              autoComplete="confirm-password"
            />
            <div className={confirmEye ? 'form__eye' : 'form__eye_hide'} onClick={() => setConfirmEye(!confirmEye)}></div>
            <p className="form__error">{formErrors.confirm}</p>
          </div>
          <div className="form__block">
            <label htmlFor="country">Select Country</label>
            <input
              type="text"
              className="form__input"
              ref={countryRef}
              onChange={(e) => {
                setCountrySelect(e.target.value);
              }}
              id="country"
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
                      setCountrySelect(country);
                      countryRef.current!.value = country;
                    }}
                  >
                    {country}
                  </div>
                ))
                .slice(0, 10)}
            </div>
            <p className="form__error">{formErrors.country}</p>
          </div>
          <div className="form__block">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              ref={fileRef}
              accept=".jpeg, .png"
              placeholder="Upload"
              autoComplete="file"
              className="form__input"
              id="file"
            />
            <p className="form__error">{formErrors.file}</p>
          </div>
          <div className="form__block form__checkbox">
            <input type="checkbox" ref={agreeRef} id="checkbox" />
            <label htmlFor="checkbox">
              accept Terms and Conditions agreement
            </label>
            <p className="form__error">
              {formErrors.agree ? formErrors.agree : ''}
            </p>
          </div>
        </div>
        <input type="submit" className="form__btn" value={'Submit'} />
      </form>
    </div>
  );
}

export default UncontrolledForm;
