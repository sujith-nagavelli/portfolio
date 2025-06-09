import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SR University</h3>
                  <p className="text-red-400 font-semibold">B.Tech in Computer Science</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar size={20} className="mr-2" />
                <span>Nov 2022 – Jun 2026</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Award size={20} className="text-red-500 mr-2" />
                  <span className="text-white font-semibold">CGPA: 9.23</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Pursuing Bachelor of Technology in Computer Science with exceptional academic performance. 
                  Consistently maintaining high grades while actively participating in various technical projects and activities.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Relevant Courses</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Data Structures',
                    'OOP',
                    'Operating Systems',
                    'Network Security',
                    'DBMS',
                    'Data Mining',
                    'Software Engineering',
                    'Computer Networks'
                  ].map((course) => (
                    <motion.span
                      key={course}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm text-center hover:bg-red-600 transition-colors duration-200"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
