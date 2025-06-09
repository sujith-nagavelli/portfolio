import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Programming', items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript'] },
    { icon: Globe, name: 'Web Technologies', items: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind'] },
    { icon: Database, name: 'Databases', items: ['MongoDB', 'SQL', 'JDBC', 'DBMS'] },
    { icon: Smartphone, name: 'Tools & Frameworks', items: ['Git', 'Tomcat', 'TensorFlow', 'Arduino'] },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Enthusiastic Software Developer
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I am an enthusiastic and results-driven software developer with expertise in Java, C, Python, SQL, and web technologies. Currently pursuing B.Tech in Computer Science at SR University with a stellar CGPA of 9.35.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about full-stack development, UI/UX design, and scalable software solutions. I have hands-on experience with modern frameworks and have built multiple projects ranging from web applications to IoT systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My goal is to leverage technology to solve real-world problems and create impactful solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="text-red-500 mr-3" size={24} />
                  <h4 className="text-white font-semibold">{skill.name}</h4>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;