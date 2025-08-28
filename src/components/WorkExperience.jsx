import { useState } from "react";

function WorkExperience({ workExperience, updateField, addEntry, removeEntry }) {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            {isEditing ? (
                <>
                    {workExperience.map((exp, index) => (
                        <div key={index} className="mb-4 space-y-2 border-b pb-4">
                            <input
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) => updateField("company", e.target.value, index)}
                            />
                            <input
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Role"
                                value={exp.role}
                                onChange={(e) => updateField("role", e.target.value, index)}
                            />
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                    type="date"
                                    value={exp.startDate}
                                    onChange={(e) => updateField("startDate", e.target.value, index)}
                                />
                                <input
                                    className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                    type="date"
                                    value={exp.endDate}
                                    onChange={(e) => updateField("endDate", e.target.value, index)}
                                />
                            </div>
                            <button
                                onClick={() => removeEntry(index)}
                                className="text-red-600 hover:underline cursor-pointer"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <button
                            onClick={addEntry}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
                        >
                            ➕ Add Work
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </>
            ) : (
                <div>
                    {workExperience.map((exp, index) => (
                        <p key={index} className="mb-2">
                            <strong>{exp.role}</strong> at {exp.company} ({exp.startDate} – {exp.endDate})
                        </p>
                    ))}
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
export default WorkExperience;
