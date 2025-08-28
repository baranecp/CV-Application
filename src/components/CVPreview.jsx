function CVPreview({ generalInfo, workExperience, education }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "2rem" }}>
            <h2>📄 CV Preview</h2>

            {/* General Information */}
            <section>
                <h3>General Information</h3>
                <p><strong>Name:</strong> {generalInfo.firstName} {generalInfo.lastName}</p>
                <p><strong>Email:</strong> {generalInfo.email}</p>
                <p><strong>Phone:</strong> {generalInfo.phone}</p>
            </section>

            {/* Work Experience */}
            <section>
                <h3>Work Experience</h3>
                {workExperience.length > 0 ? (
                    <ul>
                        {workExperience.map((exp, index) => (
                            <li key={index}>
                                <p><strong>{exp.role}</strong> at {exp.company}</p>
                                <p>{exp.startDate} - {exp.endDate}</p>
                            </li>
                        ))}
                    </ul>
                ) : <p>No work experience added.</p>}
            </section>

            {/* Education */}
            <section>
                <h3>Education</h3>
                {education.length > 0 ? (
                    <ul>
                        {education.map((edu, index) => (
                            <li key={index}>
                                <p><strong>{edu.degree}</strong> at {edu.school}</p>
                                <p>{edu.startDate} - {edu.endDate}</p>
                            </li>
                        ))}
                    </ul>
                ) : <p>No education added.</p>}
            </section>
        </div>
    );
}

export default CVPreview;
