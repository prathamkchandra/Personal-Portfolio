// FILE: src/pages/index.tsx
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() {
return (
<div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 antialiased">
<Head>
<title>Pratham K — Software Engineer</title>
<meta name="description" content="Pratham K — Computer Science grad. Portfolio showcasing skills, projects and resume." />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>


<Header />
<main className="pt-24">
<Hero />
<Skills />
<Projects />
<Contact />


<footer className="border-t mt-8 py-6">
<div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Pratham K — Built with Next.js + TypeScript + Tailwind</div>
</footer>
</main>


<style jsx global>{`html { scroll-behavior: smooth }`} </style>
</div>
)
}