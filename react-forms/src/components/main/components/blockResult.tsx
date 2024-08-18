import { FormState } from '../../../validation/validation';

export default function BlockResult({ data, id}: { data: FormState, id: string }) {
    const { firstName, age, email, gender, country, base64, newForm } = data;
    return (
        <div className={newForm ? 'form__result form__result_new' : 'form__result'} key={id}>
            <div className="form__result_img"><img className="form__img" src={base64} alt="base64"/></div>
            <p>First Name: {firstName}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Gender: {gender}</p>
            <p>Country: {country}</p>
        </div>
    )

}