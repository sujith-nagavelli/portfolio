import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Network, Brain, Database, Server, Code, Cloud } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: Network,
      title: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      issuer: 'Coursera',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Computer Networks',
      issuer: 'Coursera',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Database Management Systems',
      issuer: 'Coursera',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Server,
      title: 'Operating Systems',
      issuer: 'Coursera',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'Software Engineering',
      issuer: 'Coursera',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cloud,
      title: 'AWS Certified: Web Application Builder',
      issuer: 'Amazon Web Services',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Professional certifications demonstrating expertise across various technology domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`bg-gradient-to-r ${cert.color} p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={32} className="text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-red-400 font-medium">{cert.issuer}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-700 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                >
                  <ExternalLink size={14} />
                  <span>View</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-red-500 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Committed to staying updated with the latest technologies and industry best practices through continuous learning and professional development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;