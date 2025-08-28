import { useState } from "react";
function GeneralInformation({ info, updateField }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        updateField(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    return (
        <>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={info.firstName}
                        onChange={handleChange}
                    />
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={info.lastName}
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={info.email}
                        onChange={handleChange}
                    />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={info.phone}
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <p><strong>{info.firstName} {info.lastName}</strong></p>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </>
    );
}

export default GeneralInformation;
