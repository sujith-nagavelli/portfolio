import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code, Brain } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Code,
      title: 'AICTE Java Virtual Internship',
      company: 'AICTE',
      period: 'Virtual Internship',
      description: 'Learned Java, JDBC, UI, and Object-Oriented Programming concepts. Built 5+ small applications demonstrating proficiency in Java development and database connectivity.',
      skills: ['Java', 'JDBC', 'UI Development', 'OOP'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Brain,
      title: 'Google AI/ML Virtual Internship',
      company: 'Google',
      period: 'Virtual Internship',
      description: 'Built machine learning models using TensorFlow. Optimized data processing workflows, achieving 40% improvement in processing efficiency.',
      skills: ['TensorFlow', 'Machine Learning', 'Python', 'Data Processing'],
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className={`bg-gradient-to-r ${exp.color} p-3 rounded-full mr-4`}>
                      <exp.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-red-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar size={20} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-red-600 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;