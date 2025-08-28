import { useState } from "react";

function WorkExperience({ workExperience, setWorkExperience }) {
    let [isEditing, setIsEditing] = useState(true);

    function handleChange(index, e) {
        const { name, value } = e.target;
        setWorkExperience((prev) => {
            prev.map((exp, i) => i === index ? { ...exp, [name]: value } : exp)
        })
    }

    function handleAdd() {
        setWorkExperience((prev) => [
            ...prev, { company: '', role: '', startDate: '', endDate: '' }
        ])
    }


    function handleRemove(index) {
        setWorkExperience((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div>
            <h2>Work Experience</h2>
            {isEditing ? (
                <>
                    {workExperience.map((exp, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }}>
                            <input
                                name="company"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <input
                                name="role"
                                placeholder="Role"
                                value={exp.role}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <input
                                type="date"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <input
                                type="date"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(e) => handleChange(index, e)}
                            />
                            <button type="button" onClick={() => handleRemove(index)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={handleAdd}>➕ Add Work</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Save</button>
                </>
            ) : (
                <div>
                    {workExperience.map((exp, index) => (
                        <div key={index} style={{ marginBottom: "1rem" }}>
                            <p><strong>{exp.role}</strong> at {exp.company}</p>
                            <p>{exp.startDate} - {exp.endDate}</p>
                        </div>
                    ))}
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )



}
export default WorkExperience
