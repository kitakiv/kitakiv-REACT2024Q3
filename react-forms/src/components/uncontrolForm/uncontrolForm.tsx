import { useState } from "react";
function UncontrolledForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(firstName, lastName);
        e.preventDefault();
    }

    return (
        <form onSubmit={submitForm}>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm