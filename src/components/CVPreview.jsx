function CVPreview({ generalInfo, workExperience, education }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-10 min-h-screen border border-gray-200">
            {/* Header */}
            <header className="text-center border-b-2 border-gray-300 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    {generalInfo.firstName} {generalInfo.lastName}
                </h1>
                <p className="text-gray-600">{generalInfo.email} | {generalInfo.phone}</p>
            </header>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
                    Work Experience
                </h2>
                {workExperience.length > 0 ? (
                    workExperience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold text-gray-800">{exp.role}</h3>
                            <p className="text-gray-700">{exp.company}</p>
                            <p className="text-gray-500 text-sm">
                                {exp.startDate} – {exp.endDate}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No work experience added.</p>
                )}
            </section>

            {/* Education */}
            <section>
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">
                    Education
                </h2>
                {education.length > 0 ? (
                    education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                            <p className="text-gray-700">{edu.school}</p>
                            <p className="text-gray-500 text-sm">
                                {edu.startDate} – {edu.endDate}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No education added.</p>
                )}
            </section>
        </div>
    );
}

export default CVPreview;
