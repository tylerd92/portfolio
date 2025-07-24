import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Tyler Deans</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-20">
        <section id="hero" className="text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Tyler</h2>
          <p className="text-xl">Software Developer focused on building modern web apps with React, Python, and Java.</p>
        </section>

        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p>
            I'm a developer with experience in JavaScript, Python, Java, and SQL databases. I enjoy building
            scalable applications and solving real-world problems through clean and efficient code.
          </p>
        </section>

        <section id="projects">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-xl font-semibold">Project One</h3>
              <p className="text-sm text-gray-600 mt-2">
                A web app that does XYZ using React, Flask, and PostgreSQL. Includes full CRUD and authentication.
              </p>
              <a href="#" className="inline-block mt-3 text-blue-600 hover:underline">GitHub</a>
            </div>
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="text-xl font-semibold">Project Two</h3>
              <p className="text-sm text-gray-600 mt-2">
                Another cool project description with key highlights.
              </p>
              <a href="#" className="inline-block mt-3 text-blue-600 hover:underline">Live Demo</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p>You can reach me at <a href="mailto:tyler@example.com" className="text-blue-600">tyler@example.com</a> or connect on <a href="https://linkedin.com" className="text-blue-600">LinkedIn</a>.</p>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        &copy; 2025 Tyler Deans. All rights reserved.
      </footer>
    </div>
  );
}