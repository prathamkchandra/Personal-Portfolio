export default function Contact() {
return (
<section id="contact" className="border-t">
<div className="max-w-5xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold">Contact</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">I&apos;m open to remote internships and collaboration.</p>


<form action="https://formspree.io/f/your-id" method="POST" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<input name="name" placeholder="Your name" className="p-3 border rounded" required />
<input name="email" type="email" placeholder="Email" className="p-3 border rounded" required />
<textarea name="message" placeholder="Message" className="p-3 border rounded md:col-span-2" rows={5} required />
<button type="submit" className="md:col-span-2 px-4 py-2 bg-slate-900 text-white rounded dark:bg-slate-100 dark:text-slate-900">Send</button>
</form>


<p className="mt-6 text-sm text-slate-600 dark:text-slate-400">Or email me at <a href="mailto:pratham@example.com" className="underline">pratham@example.com</a></p>
</div>
</section>
)
}