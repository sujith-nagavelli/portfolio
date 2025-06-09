import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Car, CreditCard, Train, Building, Zap, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Car,
      title: 'Book Your Driver App',
      status: 'Ongoing',
      description: 'A comprehensive driver booking platform with user authentication, scheduling, and dynamic UI. Improved user experience by 60% through intuitive design and seamless functionality.',
      tech: ['React', 'Node.js', 'MongoDB', 'Authentication'],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      icon: CreditCard,
      title: 'Royal Enfield Billing System',
      status: 'Completed',
      description: 'First-year project focused on console-based customer billing system. Implemented comprehensive billing logic with customer management features.',
      tech: ['C Language', 'Console Application', 'File Handling'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Train,
      title: 'Railway Reservation System',
      status: 'Completed',
      description: 'Designed and analyzed full Software Development Life Cycle (SDLC) including use case models and requirements analysis for a railway booking system.',
      tech: ['Software Engineering', 'SDLC', 'Use Case Modeling'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Building,
      title: 'Bank Management System',
      status: 'Completed',
      description: 'Built using JDBC and Tomcat server with basic web technologies. Implemented core banking functionalities with secure database operations.',
      tech: ['JDBC', 'Tomcat', 'Web Technologies', 'Database'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'IoT Smart Doorbell',
      status: 'Completed',
      description: 'Arduino-based smart doorbell system using ultrasonic sensors with real-time alerts. Integrated IoT capabilities for remote monitoring.',
      tech: ['Arduino', 'IoT', 'Ultrasonic Sensors', 'Real-time Alerts'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Electricity Bill Prediction',
      status: 'Completed',
      description: 'Machine learning model achieving 90% accuracy in electricity bill prediction with optimized data preprocessing techniques.',
      tech: ['Python', 'Machine Learning', 'Data Preprocessing', 'Prediction Models'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, IoT, machine learning, and software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-r ${project.color} p-3 rounded-full`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'Ongoing' 
                    ? 'bg-yellow-500/20 text-yellow-400' 
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;