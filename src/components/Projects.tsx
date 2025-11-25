import { projects } from '../data/projects'


export default function Projects() {
return (
<section id="projects" className="border-t">
<div className="max-w-5xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold">Projects</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">Selected work with live demos and repos.</p>


<div className="mt-6 grid gap-6">
{projects.map((p) => (
<article key={p.id} className="p-6 rounded-xl border bg-white dark:bg-slate-800">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-lg">{p.title}</h3>
<p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>


<div className="mt-2 flex flex-wrap gap-2 text-xs">
{Array.isArray(p.tech) && p.tech.length > 0 ? (
p.tech.map((t, i) => (
<span key={`${p.id}-tech-${i}`} className="px-2 py-1 border rounded">{t}</span>
))
) : (
<span className="px-2 py-1 border rounded text-slate-500 dark:text-slate-400">No tech listed</span>
)}
</div>
</div>


<div className="flex flex-col gap-2">
<a href={p.demo} className="px-3 py-1 border rounded" target="_blank" rel="noreferrer">Live</a>
{p.repo && <a href={p.repo} className="text-sm underline" target="_blank" rel="noreferrer">Code</a>}
</div>
</div>
</article>
))}
</div>
</div>
</section>
)
}