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
        <div style={{ display: "flex", gap: "2rem" }}>
            <div style={{ flex: 1 }}>
                <h1>CV Builder</h1>
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
                <button onClick={handleSubmit}>Save All</button>
            </div>

            <div style={{ flex: 1 }}>
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
