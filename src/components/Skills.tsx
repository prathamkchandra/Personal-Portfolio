export default function Skills() {
const skills = ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB']
return (
<section id="skills" className="border-t">
<div className="max-w-5xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold">Skills</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">A quick snapshot of my technical stack.</p>


<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
{skills.map((s) => (
<div key={s} className="p-3 rounded-lg border text-center text-sm">{s}</div>
))}
</div>
</div>
</section>
)
}