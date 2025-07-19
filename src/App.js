import React from 'react';

// Main App component
const App = () => {
  // Define your projects with titles and links
  const projects = [
    {
      title: "Blockchain-based File Storage System",
      description: "Developed a decentralized file storage using blockchain and Python, enabling secure, tamper-proof file uploads and retrieval through smart contracts and peer-to-peer networking.",
      link: "https://github.com/Sarvesh8521/Blockchain-based-File-Storage.git",
      tech: ["Blockchain", "Python", "Smart Contracts"]
    },
    {
      title: "LocalGPT",
      description: "Built a privacy-focused, local document chatbot using LocalGPT, enabling offline interaction with your own files via open-source LLMs and LangChain—ensuring no data ever leaves your device.",
      link: "https://github.com/Sarvesh8521/LOCAL_GPT.git",
      tech: ["Python", "LLMs", "LangChain", "Offline Processing"]
    },
    {
      title: "Task Management System",
      description: "Built a full-stack task management application enabling users to create, update, prioritize and track tasks with intuitive interfaces (e.g., Kanban-style board, due dates, status updates) and persistent storage (local or backend-driven).",
      link: "https://github.com/Sarvesh8521/Task-management.git",
      tech: ["Python", "Flask", "Full-stack", "Kanban"]
    },
  ];

  // Define your LinkedIn profile link
  const linkedInProfile = "https://www.linkedin.com/in/sarvesh-singh-964510173/";
  const yourEmail = "sarvesh8521@gmail.com"; // Your email address

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6 fixed w-full z-10 top-0 rounded-b-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold text-indigo-600 rounded-md p-2 hover:bg-indigo-50 transition-colors duration-300">Sarvesh Singh</a>
          <div className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 rounded-md px-3 py-2 hover:bg-gray-100">About</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Education</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 rounded-md px-3 py-2 hover:bg-gray-100">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg backdrop-blur-sm">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">Hi, I'm <span className="text-yellow-300">Sarvesh Singh</span></h1>
            <p className="text-2xl md:text-3xl font-light mb-8">A Passionate <span className="font-semibold">Backend Developer</span></p>
            <a href="#about" className="bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out">
              Learn More About Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white shadow-inner rounded-xl my-8 mx-auto max-w-6xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src="https://placehold.co/400x400/E0E7FF/4F46E5?text=Your+Photo"
                alt="Your Photo"
                className="w-full h-auto rounded-full shadow-lg border-4 border-indigo-200 object-cover"
              />
            </div>
            <div className="md:w-2/3 text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                Hello! I'm <span className="font-semibold text-indigo-600">Sarvesh Singh</span>, a highly motivated and detail-oriented professional with a strong foundation in computer science. Proficient in multiple programming languages and database management systems.
              </p>
              <p className="mb-4">
                Skilled in developing innovative solutions and conducting comprehensive research on emerging security challenges. Adept at working collaboratively in team environments and committed to continuous learning and professional development.
              </p>
              <p>
                My objective is to leverage my technical skills, critical thinking, active listening, communication, creativity, and problem-solving abilities in a dynamic and growth-oriented organization. I aim to contribute as a valuable team member, driving innovative solutions and supporting organizational objectives. My goal is to enhance my professional expertise while contributing to the success and growth of the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-indigo-50 shadow-inner rounded-xl my-8 mx-auto max-w-6xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Experience Item 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">Backend Developer (Internship)</h3>
              <p className="text-xl text-gray-700 mb-2">Kuhoo Finance Pvt. Ltd | Mumbai, India | Feb 2025 - On Going</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed a Task Management system (Jira Clone) using Django REST Framework (DRF) with full CRUD and role-based access control.</li>
                <li>Deployed the application using Docker and implemented scalable infrastructure using Kubernetes and Railway.</li>
                <li>Designed RESTful APIs for managing tasks, workflows and user authentication.</li>
                <li>Collaborated in Agile teams using Git and JIRA for code reviews and task management.</li>
                <li>Set up CI/CD pipelines and optimized API performance.</li>
              </ul>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white shadow-inner rounded-xl my-8 mx-auto max-w-6xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education Item 1 */}
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">MCA</h3>
              <p className="text-xl text-gray-700 mb-2">MIT-SOB, Pune | MIT-WPU | 2025 | CGPA: 7.81</p>
            </div>
            {/* Education Item 2 */}
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">B. Com</h3>
              <p className="text-xl text-gray-700 mb-2">Badruka College of Commerce & Arts, Hyderabad | Osmania University | 2023 | CGPA: 8.62</p>
            </div>
            {/* Education Item 3 */}
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">HSC</h3>
              <p className="text-xl text-gray-700 mb-2">Sri Chaitanya Jr College, Hyderabad | State Board | 2020 | 89.99%</p>
            </div>
            {/* Education Item 4 */}
            <div className="bg-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">ICSE</h3>
              <p className="text-xl text-gray-700 mb-2">Sri Sai Public School, Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-indigo-50 shadow-inner rounded-xl my-8 mx-auto max-w-6xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Python', 'Java', 'PHP', 'Django', 'DRF', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'MongoDB', 'PostGreDB', 'Git', 'Docker', 'Kubernetes', 'Railway', 'Postman', 'DBeaver', 'JIRA', 'RESTful API Development', 'CI/CD', 'Microservices Architecture'].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300 border border-indigo-100">
                <p className="text-xl font-medium text-indigo-600">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white shadow-inner rounded-xl my-8 mx-auto max-w-6xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
                <img
                  src={`https://placehold.co/600x400/E0E7FF/4F46E5?text=Project+${index + 1}`}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">React</span> {/* Placeholder, update with actual tech */}
                  <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Node.js</span> {/* Placeholder, update with actual tech */}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium flex items-center">
                  View Project &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-7 7m7-7v6" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-indigo-50 shadow-inner rounded-xl my-8 mx-auto max-w-6xl">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-indigo-700">Get in Touch</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me!
          </p>
          <div className="flex flex-col items-center space-y-6">
            <a
              href={`mailto:${yourEmail}`}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out flex items-center space-x-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{yourEmail}</span>
            </a>
            <div className="flex space-x-6 text-indigo-600">
              <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-8.4c0-6.76-7.52-6.47-7.981-9.4z"/>
                </svg>
              </a>
              {/* You can add your GitHub profile here if you have one */}
              {/* <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-800 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.829.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.093.39-1.988 1.029-2.681-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.025 2.747-1.025.546 1.379.202 2.398.099 2.651.64.693 1.029 1.598 1.029 2.681 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center rounded-t-lg">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sarvesh Singh. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
