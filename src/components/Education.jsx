import { useState } from "react";

function Education({ education, updateField, addEntry, removeEntry }) {
    const [isEditing, setIsEditing] = useState(true);

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
                                onChange={(e) => updateField("school", e.target.value, index)}
                            />
                            <input
                                name="degree"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => updateField("degree", e.target.value, index)}
                            />
                            <input
                                type="date"
                                name="startDate"
                                value={edu.startDate}
                                onChange={(e) => updateField("startDate", e.target.value, index)}
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={edu.endDate}
                                onChange={(e) => updateField("endDate", e.target.value, index)}
                            />
                            <button type="button" onClick={() => removeEntry(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addEntry}>➕ Add Education</button>
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
