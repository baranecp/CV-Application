import { useState } from "react";
import Input from "./Input";

function GeneralInformation({ info, setInfo }) {
    let [isEditing, setIsEditing] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInfo((prev) => ({
            ...prev, [name]: value
        }))
    }

    return (
        <>
            {isEditing ? <form onSubmit={handleSubmit}>
                <Input label="First Name: " name="firstName" type="text" value={info.firstName} onChange={handleChange} />
                <Input label="Last Name: " name="lastName" type="text" value={info.lastName} onChange={handleChange} />
                <Input label="Email: " name="email" type="email" value={info.email} onChange={handleChange} />
                <Input label="Phone Number: " name="phone" type="tel" value={info.phone} onChange={handleChange} placeholder="+421 901 123 456 or 0901 123 456" pattern="^(\+421 ?9\d{2} ?\d{3} ?\d{3}|09\d{2} ?\d{3} ?\d{3})$" />
                <button type='submit'>Submit</button>
            </form> : <div>
                <h2>About Me</h2>
                <p>Full Name: {info.firstName + ' ' + info.lastName}</p>
                <p>Email: {info.email}</p>
                <p>Phone Number: {info.phone}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>}

        </>
    )
}

export default GeneralInformation
