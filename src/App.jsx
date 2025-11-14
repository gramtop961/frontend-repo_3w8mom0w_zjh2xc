import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Download, Map, Globe, FileText } from 'lucide-react'

function App() {
  const [backendUrl, setBackendUrl] = useState('')

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    setBackendUrl(baseUrl)
  }, [])

  const handleDownloadNotebook = () => {
    window.location.href = `${backendUrl}/api/download/notebook`
  }

  const handleDownloadReport = () => {
    window.location.href = `${backendUrl}/api/download/report`
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="relative h-[46vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">ESDA Assignment 1</h1>
          <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-2xl">
            Spatial Relationship between Urban Populations and Earthquake Hazards — download the ready-to-run Jupyter Notebook and a report template.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={handleDownloadNotebook} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-md transition">
              <Download size={18} /> Download Notebook
            </button>
            <button onClick={handleDownloadReport} className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md transition">
              <FileText size={18} /> Download Report Template
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-2">What you get</h2>
          <p className="text-gray-300 mb-6">A complete workflow to explore population centers, earthquakes, and their spatial relationships, with maps and analytics ready to run.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2"><Globe className="text-emerald-400" size={20} /><h3 className="font-semibold">Data Download & Cleaning</h3></div>
              <p className="text-sm text-gray-400">Automatically fetch Natural Earth populated places and countries, plus USGS earthquakes; align CRS and remove duplicates.</p>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2"><Map className="text-sky-400" size={20} /><h3 className="font-semibold">Exploratory Maps</h3></div>
              <p className="text-sm text-gray-400">Sanity maps, top 50 cities, isolated cities, earthquake heatmaps, and proximity surfaces saved to an outputs folder.</p>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2"><Globe className="text-violet-400" size={20} /><h3 className="font-semibold">Metrics & Summaries</h3></div>
              <p className="text-sm text-gray-400">Distributions, z-scores, nearest-neighbor distances, mean centers, standard distances, and exposure by country.</p>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold mb-2">How to use</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Click “Download Notebook”. Open it in Jupyter and run all cells.</li>
              <li>Find generated maps and tables in the outputs folder.</li>
              <li>Use “Download Report Template” to structure your PDF summary.</li>
            </ol>
            <p className="mt-4 text-sm text-gray-400">Backend URL detected: <span className="font-mono">{backendUrl || 'detecting...'}</span></p>
          </div>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 py-6">Built for your ESDA coursework – good luck!</footer>
    </div>
  )
}

export default App
