import React, { useRef, useState } from "react";
import axios from "axios";

const Home = () => {
  const [report, setReport] = useState(null);
  console.log("Current report state:", report);

  const selfDescriptionRef = useRef();
  const jobDescriptionRef = useRef();
  const resumeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("selfDescription", selfDescriptionRef.current.value);
    formData.append("jobDescription", jobDescriptionRef.current.value);
    if (resumeRef.current.files[0]) {
      formData.append("resume", resumeRef.current.files[0]);
    }

    const response = await axios.post(
      "http://localhost:3000/api/generate-report",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log("API Response:", response.data);
    if (response.status === 201) {
      setReport(response.data.report);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Interview Report Generator
          </h1>
          <p className="text-xl text-gray-600">
            Create personalized interview reports with AI assistance
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Generate Your Report
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Self Description
              </label>
              <textarea
                name="selfDescription"
                placeholder="Describe yourself, your skills, experience, and career goals..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                ref={selfDescriptionRef}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description
              </label>
              <textarea
                name="jobDescription"
                placeholder="Describe the job position, requirements, and company..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                ref={jobDescriptionRef}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume Upload
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                ref={resumeRef}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Generate Interview Report
            </button>
          </form>
        </div>

        {report && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-indigo-100">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Generated Interview Report
                </h2>
                <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                  Your AI-generated report is ready. Review the score, strengths, gaps, and suggested preparation plan below.
                </p>
              </div>
              <div className="inline-flex items-center gap-3 rounded-full bg-indigo-50 px-5 py-3 text-indigo-700 font-semibold shadow-sm ring-1 ring-indigo-100">
                <span>Score</span>
                <span className="text-2xl">{report.score ?? "--"}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
              <div className="space-y-6">
                <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Questions</h3>
                  <div className="space-y-4">
                    {(report.technicalQuestions || []).map((q, index) => (
                      <div key={index} className="rounded-3xl bg-white p-5 shadow-sm">
                        <p className="font-semibold text-slate-900">Q{index + 1}: {q.question}</p>
                        <p className="mt-3 text-sm text-slate-600"><strong>Intention:</strong> {q.intention}</p>
                        <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
                          {q.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Behavioral Questions</h3>
                  <div className="space-y-4">
                    {(report.behavioralQuestions || []).map((q, index) => (
                      <div key={index} className="rounded-3xl bg-white p-5 shadow-sm">
                        <p className="font-semibold text-slate-900">Q{index + 1}: {q.question}</p>
                        <p className="mt-3 text-sm text-slate-600"><strong>Intention:</strong> {q.intention}</p>
                        <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
                          {q.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-6">
                <section className="rounded-3xl border border-slate-200 bg-indigo-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4">Skill Gaps</h3>
                  <div className="space-y-3">
                    {(report.skillGaps || []).map((skill, index) => (
                      <div key={index} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm">
                        <div>
                          <p className="font-medium text-slate-900">{skill.skill}</p>
                          <p className="text-sm text-slate-500">Severity: {skill.severity}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${skill.severity === 'high' ? 'bg-red-100 text-red-700' : skill.severity === 'medium' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                          {skill.severity}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-slate-200 bg-indigo-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4">Preparation Plan</h3>
                  <div className="space-y-4">
                    {(report.preparationPlan || []).map((day, index) => (
                      <div key={index} className="rounded-3xl bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold text-slate-900">Day {day.day}</p>
                          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                            {day.focus}
                          </span>
                        </div>
                        {(day.task || []).length > 0 && (
                          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-1">
                            {day.task.map((task, taskIndex) => (
                              <li key={taskIndex}>{task}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
