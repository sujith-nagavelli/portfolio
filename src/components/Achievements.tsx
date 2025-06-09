import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Perfect 10 GPA',
      description: 'Achieved perfect 10 GPA in the first year of B.Tech, demonstrating exceptional academic excellence and dedication to studies.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className={`bg-gradient-to-r ${achievement.color} p-6 rounded-full flex-shrink-0`}>
                  <achievement.icon size={48} className="text-white" />
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{achievement.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mt-12"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <Star className="text-red-500 mx-auto mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Academic Excellence</h4>
              <p className="text-gray-300">Consistent high performance throughout academic journey</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
              <Target className="text-red-500 mx-auto mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Goal-Oriented</h4>
              <p className="text-gray-300">Focused approach towards achieving set objectives</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;