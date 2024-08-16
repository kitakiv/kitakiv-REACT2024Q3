import { useForm } from 'react-hook-form';

interface IFormInput {
    firstName: string;
    lastName: string;
}

function ReactForm() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
            <input {...register('lastName')} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ReactForm;