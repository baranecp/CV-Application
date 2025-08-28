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
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        name="firstName"
                        placeholder="First Name"
                        value={info.firstName}
                        onChange={handleChange}
                    />
                    <input
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        name="lastName"
                        placeholder="Last Name"
                        value={info.lastName}
                        onChange={handleChange}
                    />
                    <input
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={info.email}
                        onChange={handleChange}
                    />
                    <input
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={info.phone}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Save
                    </button>
                </form>
            ) : (
                <div className="space-y-2">
                    <p><strong>{info.firstName} {info.lastName}</strong></p>
                    <p>{info.email}</p>
                    <p>{info.phone}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
}


export default GeneralInformation;
