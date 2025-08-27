import { useState } from "react";
import Input from "./Input";

function GeneralInformation() {
    const [info, setInfo] = useState({ firstName: '', lastName: '', email: '', phone: '' })
    let [isEditing, setIsEditing] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false)
    }

    return (
        <>
            {isEditing ? <form name="info" onSubmit={handleSubmit}>
                <Input label="First Name: " type="text" value={info.firstName} onChange={e => setInfo({ ...info, firstName: e.target.value })} />
                <Input label="Last Name: " type="text" value={info.lastName} onChange={e => setInfo({ ...info, lastName: e.target.value })} />
                <Input label="Email: " type="email" value={info.email} onChange={e => setInfo({ ...info, email: e.target.value })} />
                <Input label="Phone Number: " type="tel" value={info.phone} onChange={e => setInfo({ ...info, phone: e.target.value })} placeholder="+421 901 123 456 or 0901 123 456" pattern="^(\+421 ?9\d{2} ?\d{3} ?\d{3}|09\d{2} ?\d{3} ?\d{3})$" />
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
