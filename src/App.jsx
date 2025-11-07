import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, Twitter, Instagram, Code, Download, ArrowDown, ExternalLink } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const tools = [
    { name: 'Python', desc: 'Programming Language', icon: '🐍' },
    { name: 'Java', desc: 'Programming Language', icon: '☕' },
    { name: 'JavaScript', desc: 'Interaction', icon: '⚡' },
    { name: 'Django', desc: 'Web Framework', icon: '🎸' },
    { name: 'MongoDB', desc: 'Database', icon: '🍃' },
    { name: 'React', desc: 'Framework', icon: '⚛️' },
    { name: 'TailwindCSS', desc: 'User Interface', icon: '🎨' },
    { name: 'R', desc: 'Data Analysis', icon: '📊' }
  ];

  const projects = [
    {
      title: 'Library Management System',
      tags: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'sqlite3'],
      link: '#'
    },
    {
      title: 'Hotel Management System Application',
      tags: ['Java', 'NetBeans', 'MySQL'],
      link: '#'
    },
    {
      title: 'Audio-To-Image',
      tags: ['Development', 'API', 'Python', 'Jupyter Notebook'],
      link: '#'
    },
    {
      title: 'CLAUSEWISE',
      tags: ['Development', 'API', 'Python', 'Gradio'],
      link: '#'
    },
    {
      title: 'IDEAHUB',
      tags: ['WORK IN PROGRESS'],
      link: '#'
    }
  ];

  const reviews = [
    {
      name: 'Sophia Ramirez',
      company: 'PixelForge',
      text: 'Enthusiastic and dedicated to his work. He is a quick learner and always ready to take on new challenges.',
      stars: 5
    },
    {
      name: 'Ethan Caldwell',
      company: 'NexaWave',
      text: 'Actively participated in group discussions and always ready to share his ideas.',
      stars: 5
    },
    {
      name: 'Liam Bennett',
      company: 'CodeCraft',
      text: 'He is a great team player and always ready to help his friends.',
      stars: 5
    },
    {
      name: 'Noah Williams',
      company: 'BrightWeb',
      text: 'Ready to learn about new concepts and technologies.',
      stars: 5
    },
    {
      name: 'Ava Thompson',
      company: 'TechMosaic',
      text: 'Contributed to the project with his full dedication and commitment.',
      stars: 5
    },
    {
      name: 'Jonathan',
      company: 'Skyline Digital',
      text: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      stars: 5
    }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Profile */}
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  BR
                </div>
                <span className="font-semibold text-gray-800 dark:text-white">B.Rajashekar</span>
              </div>
              
              {/* Center Navigation */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'work', 'reviews'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              
              {/* Right Side Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full mb-6 font-medium">
              Available for Work
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">B.Rajashekar</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              A fresher with lots of enthusiasm for learning new technologies and building new projects. Combining creativity and technical expertise. Eager to learn lots of new things.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">1+</div>
                <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
                <Download className="w-5 h-5" />
                Download CV
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg transition-colors font-medium"
              >
                Scroll Down
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* About Section - Essential Tools */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Essential Tools I Use
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-600"
                >
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section - Projects */}
        <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              My Portfolio Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              What My Friends Say About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{review.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{review.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Contact Me for Collaboration
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Reach out today to discuss your project needs and start collaborating on something amazing!
            </p>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Sitemap</h3>
                <div className="space-y-2">
                  {['Home', 'About', 'Work', 'Reviews', 'Contact'].map((link) => (
                    <div key={link}>
                      <button
                        onClick={() => scrollToSection(link.toLowerCase())}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Socials</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" /> Twitter X
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Code className="w-4 h-4" /> CodePen
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Let's Work Together!</h3>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  Contact Me →
                </button>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              © 2025 B.Rajashekar
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
