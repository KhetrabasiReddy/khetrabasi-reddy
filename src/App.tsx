import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, BookOpen, Chrome, MessageSquare, Code, Database, PenTool as Tools } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20 ">
        <div className="container mx-auto px-4 animate-fadeIn flex flex-col justify-center items-center ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideDown">Khetrabasi Reddy</h1>
          <h2 className="text-xl md:text-2xl mb-6 text-blue-200 animate-slideUp">Software Developer | Java | React | Spring Boot</h2>
          <p className="text-lg max-w-2xl mb-8 text-gray-300 animate-fadeIn text-center">
            🚀 Passionate about building scalable web applications and software solutions. 
            I specialize in Java, Spring Boot, React.js, and MySQL, with a strong foundation 
            in frontend and backend development.
          </p>
          <div className="flex flex-wrap gap-4 animate-slideUp">
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Bengaluru, Karnataka</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:reddykhetrabasi@gmail.com" className="hover:text-blue-300">reddykhetrabasi@gmail.com</a>
            </div>
            {/* <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>[Your Contact Number]</span>
            </div> */}
          </div>
          <div className="flex gap-4 mt-6 animate-slideUp">
            <a href="https://github.com/KhetrabasiReddy" 
               className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/khetrabasi-reddy-b0ba77224" 
               className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-400">Frontend</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900">
                        React.js
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-400">
                        90%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-900">
                    <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900">
                        JavaScript
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-400">
                        85%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-900">
                    <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900">
                        CSS/Tailwind
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-400">
                        88%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-900">
                    <div style={{ width: "88%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-400 bg-blue-900">
                        HTML & CSS
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-400">
                        88%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-900">
                    <div style={{ width: "88%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-600 rounded-lg group-hover:bg-purple-500 transition-colors">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-purple-400">Backend</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-400 bg-purple-900">
                        Java
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-purple-400">
                        92%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-900">
                    <div style={{ width: "92%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-400 bg-purple-900">
                        Spring Boot
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-purple-400">
                        85%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-900">
                    <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-400 bg-purple-900">
                        Hibernate
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-purple-400">
                        80%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-900">
                    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-400 bg-purple-900">
                       MySQL
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-purple-400">
                        80%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-900">
                    <div style={{ width: "80%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gray-900 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-600 rounded-lg group-hover:bg-green-500 transition-colors">
                  <Tools className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-green-400">Tools</h3>
              </div>
              <div className="space-y-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-400 bg-green-900">
                        Git/GitHub
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-400">
                        90%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-900">
                    <div style={{ width: "90%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-400 bg-green-900">
                        Postman
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-400">
                        85%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-900">
                    <div style={{ width: "85%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-400 bg-green-900">
                        IntilliJ
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-400">
                        82%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-900">
                    <div style={{ width: "82%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">Chat Application</h3>
              </div>
              <p className="text-gray-400 mb-4">
                A real-time chat application with authentication and cloud storage.
                Built with React.js and Firebase.
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li>🔹 Firebase Authentication & Firestore</li>
                <li>🔹 Real-time updates</li>
                <li>🔹 Responsive UI</li>
              </ul>
              <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold">Bookstore Management</h3>
              </div>
              <p className="text-gray-400 mb-4">
                A CRUD-based bookstore management system using Spring Boot,
                Hibernate, and MySQL.
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li>🔹 REST APIs</li>
                <li>🔹 User authentication</li>
                <li>🔹 Transaction tracking</li>
              </ul>
              <a href="#" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors">
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-4">
                <Chrome className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold">YouTube Bookmarker</h3>
              </div>
              <p className="text-gray-400 mb-4">
                A Chrome extension to bookmark YouTube videos with timestamps.
                Built with React.js and Chrome Extensions API.
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li>🔹 User-friendly UI</li>
                <li>🔹 Local storage</li>
                <li>🔹 Chrome API integration</li>
              </ul>
              <a href="#" className="text-green-400 hover:text-green-300 flex items-center gap-2 transition-colors">
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Experience</h2>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">Web Developer Intern</h3>
                <p className="text-gray-400 mb-4">InternPE (Oct 2024 – Nov 2024)</p>
                <ul className="space-y-2 text-gray-300">
                  <li>🔹 Developed dynamic web applications</li>
                  <li>🔹 Frontend UI enhancements</li>
                  <li>🔹 Team collaboration</li>
                </ul>
              </div>
            </div>
            <div className="group">
              <h2 className="text-3xl font-bold mb-8 text-blue-400">Education</h2>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">Bachelor of Technology (B.Tech)</h3>
                <p className="text-gray-400">Computer Science & Engineering</p>
                <p className="font-semibold mt-2 text-blue-400">CGPA: 7.7 (72%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Why Hire Me?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Full-Stack Expertise</h3>
              <p className="text-gray-300">Skilled in both frontend (React.js) and backend (Spring Boot).</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Problem-Solving</h3>
              <p className="text-gray-300">Always eager to optimize code and improve efficiency.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Continuous Learner</h3>
              <p className="text-gray-300">Committed to upskilling and staying updated with new technologies.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Collaborative & Adaptable</h3>
              <p className="text-gray-300">Effective in team environments and quick to adapt to new challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-gray-400">Currently learning: Spring Boot Security & Next.js</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:reddykhetrabasi@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/KhetrabasiReddy" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/khetrabasi-reddy-b0ba77224" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;