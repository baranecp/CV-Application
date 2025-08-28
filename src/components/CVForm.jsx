import { useState } from "react"
import GeneralInformation from "./GeneralInformation"
import WorkExperience from "./WorkExperience"
import Education from "./Education"
import CVPreview from "./CVPreview"

export function CVForm() {
    const [cvData, setCvData] = useState({
        generalInfo: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        },
        workExperience: [
            { company: "", role: "", startDate: "", endDate: "" }
        ],
        education: [
            { school: "", degree: "", startDate: "", endDate: "" }
        ]
    })

    function updateField(section, field, value, index = null) {
        setCvData((prev) => {
            if (index !== null) {
                //For nested fields section
                return {
                    ...prev,
                    [section]: prev[section].map((item, i) => i === index ? { ...item, [field]: value } : item)
                }
            } else {
                //For simple object section
                return {
                    ...prev,
                    [section]: {
                        ...prev[section],
                        [field]: value
                    }
                }
            }
        })
    }

    function addEntry(section, emptyItem) {
        setCvData((prev) => ({
            ...prev,
            [section]: [...prev[section], emptyItem]
        }))
    }


    function removeEntry(section, index) {
        setCvData((prev) => ({
            ...prev,
            [section]: prev[section].filter((_, i) => i !== index)
        }));
    }

    function handleSubmit() {
        console.log("Final CV Data:", cvData);
        alert("Check console for full data!");
    }

    return (
        <div className="flex gap-6 p-6 bg-gray-100 min-h-screen">
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-6">CV Builder</h1>
                <GeneralInformation
                    info={cvData.generalInfo}
                    updateField={(field, value) =>
                        updateField("generalInfo", field, value)
                    }
                />
                <WorkExperience
                    workExperience={cvData.workExperience}
                    updateField={(field, value, index) =>
                        updateField("workExperience", field, value, index)
                    }
                    addEntry={() =>
                        addEntry("workExperience", {
                            company: "",
                            role: "",
                            startDate: "",
                            endDate: ""
                        })
                    }
                    removeEntry={(index) => removeEntry("workExperience", index)}
                />
                <Education
                    education={cvData.education}
                    updateField={(field, value, index) =>
                        updateField("education", field, value, index)
                    }
                    addEntry={() =>
                        addEntry("education", {
                            school: "",
                            degree: "",
                            startDate: "",
                            endDate: ""
                        })
                    }
                    removeEntry={(index) => removeEntry("education", index)}
                />
                <button onClick={handleSubmit} className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer">Save All</button>
            </div>

            <div className="flex-1">
                <CVPreview
                    generalInfo={cvData.generalInfo}
                    workExperience={cvData.workExperience}
                    education={cvData.education}
                />
            </div>
        </div>
    );
}

export default CVForm
