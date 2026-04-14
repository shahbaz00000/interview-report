import React from 'react'
import useAuth from '../hooks/authhook';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Interview intelligence
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Your AI-powered hiring dashboard
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Monitor interview summaries, performance insights, and actionable next steps from one elegant workspace.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button onClick={()=>{isLoggedIn ? navigate('/generate-report') : navigate('/login')}} className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-700">
                Get Started
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                View Reports
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Reports generated', value: '24', description: 'Interview summaries produced this month.' },
              { title: 'Average score', value: '83%', description: 'Candidate performance score across reports.' },
              { title: 'Skill gaps found', value: '12', description: 'Critical improvement areas identified.' },
              { title: 'Actions ready', value: '8', description: 'Preparation tasks and follow-ups available.' },
            ].map((stat) => (
              <div key={stat.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                <p className="mt-4 text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-100/90">Live insights</p>
              <h2 className="mt-4 text-2xl font-semibold">Interview readiness score</h2>
              <p className="mt-3 text-sm leading-6 text-indigo-100/80">
                Keep track of your strongest areas and the skills that need attention before your next interview.
              </p>
              <div className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
                Updated just now
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Recent interviews</h2>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Frontend Engineer</p>
                  <p className="mt-1">Completed 2 hours ago · Score: 88%</p>
                </li>
                <li className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Node.js Developer</p>
                  <p className="mt-1">Completed yesterday · Score: 79%</p>
                </li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Next steps</h2>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Review skill gaps</p>
                  <p className="mt-1">See recommendations to strengthen weak areas.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">Prepare interview notes</p>
                  <p className="mt-1">Create a focused study plan from your report.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
