import Image from 'next/image'


export default function Hero() {
return (
<section id="home" className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-bold">Hey — I&apos;m Pratham</h1>
<p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl">Computer Science graduate building production-ready web apps and ML tools. I like clean UI, reliable code, and good coffee.</p>


<div className="mt-6 flex gap-3">
<a href="#projects" className="px-4 py-2 border rounded">See Projects</a>
<a href="/resume.pdf" download className="px-4 py-2 bg-slate-900 text-white rounded dark:bg-slate-100 dark:text-slate-900">Download Resume</a>
</div>
</div>


<div className="w-48 h-48 rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
<Image src="/me.jpg" alt="Pratham" width={400} height={400} className="object-cover" />
</div>
</section>
)
}