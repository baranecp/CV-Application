import { useState } from "react";

function WorkExperience({ workExperience, updateField, addEntry, removeEntry }) {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <div>
            <h2>Work Experience</h2>
            {isEditing ? (
                <>
                    {workExperience.map((exp, index) => (
                        <div key={index}>
                            <input
                                name="company"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) => updateField("company", e.target.value, index)}
                            />
                            <input
                                name="role"
                                placeholder="Role"
                                value={exp.role}
                                onChange={(e) => updateField("role", e.target.value, index)}
                            />
                            <input
                                type="date"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => updateField("startDate", e.target.value, index)}
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => updateField("endDate", e.target.value, index)}
                            />
                            <button type="button" onClick={() => removeEntry(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addEntry}>➕ Add Work</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Save</button>
                </>
            ) : (
                <div>
                    {workExperience.map((exp, index) => (
                        <p key={index}>
                            <strong>{exp.role}</strong> at {exp.company} ({exp.startDate} - {exp.endDate})
                        </p>
                    ))}
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
}

export default WorkExperience;
