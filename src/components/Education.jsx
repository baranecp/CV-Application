import { useState } from "react";

function Education({ education, updateField, addEntry, removeEntry }) {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            {isEditing ? (
                <>
                    {education.map((edu, index) => (
                        <div key={index} className="mb-4 space-y-2 border-b pb-4">
                            <input
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="School"
                                value={edu.school}
                                onChange={(e) => updateField("school", e.target.value, index)}
                            />
                            <input
                                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => updateField("degree", e.target.value, index)}
                            />
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                    type="date"
                                    value={edu.startDate}
                                    onChange={(e) => updateField("startDate", e.target.value, index)}
                                />
                                <input
                                    className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                                    type="date"
                                    value={edu.endDate}
                                    onChange={(e) => updateField("endDate", e.target.value, index)}
                                />
                            </div>
                            <button
                                onClick={() => removeEntry(index)}
                                className="text-red-600 hover:underline"
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
                            ➕ Add Education
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
                    {education.map((edu, index) => (
                        <p key={index} className="mb-2">
                            <strong>{edu.degree}</strong> at {edu.school} ({edu.startDate} – {edu.endDate})
                        </p>
                    ))}
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
                    >
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
}

export default Education;
