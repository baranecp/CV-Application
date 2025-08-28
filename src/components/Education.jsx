import { useState } from "react";

function Education({ education, setEducation }) {
    const [isEditing, setIsEditing] = useState(true);

    function handleChange(index, e) {
        const { name, value } = e.target;
        setEducation((prev) =>
            prev.map((edu, i) =>
                i === index ? { ...edu, [name]: value } : edu
            )
        );
    }

    function handleAdd() {
        setEducation((prev) => [
            ...prev,
            { school: "", degree: "", startDate: "", endDate: "" }
        ]);
    }

    function handleRemove(index) {
        setEducation((prev) => prev.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Education</h2>
            {isEditing ? (
                <>
                    {education.map((edu, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }}>
                            <input
                                name="school"
                                placeholder="School"
                                value={edu.school}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <input
                                name="degree"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <input
                                type="date"
                                name="startDate"
                                value={edu.startDate}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={edu.endDate}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <button type="button" onClick={() => handleRemove(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAdd}>➕ Add Education</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Save</button>
                </>
            ) : (
                <div>
                    {education.map((edu, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }}>
                            <p><strong>{edu.degree}</strong> at {edu.school}</p>
                            <p>{edu.startDate} - {edu.endDate}</p>
                        </div>
                    ))}
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default Education;
