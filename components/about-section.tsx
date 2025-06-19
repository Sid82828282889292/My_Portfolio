"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, GraduationCap, MapPin, Calendar } from 'lucide-react';
import Cubes from './Cubes';


const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Years of Experience", value: "2+" },
    { label: "Certifications", value: "5+" },
  ];

  const highlights = [
    "Advanced Data Analytics Specialist",
    "Full-Stack Web Developer",
    "Machine Learning Enthusiast",
    "UI/UX Design Advocate",
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Passionate About <span className="gradient-text">Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm a data-driven developer who loves turning complex problems into elegant solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Journey</h3>
                        <p className="text-gray-600 dark:text-gray-400">From data analysis to web development</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      As a dedicated Data Scientist and Frontend Developer, I specialize in transforming raw data 
                      into actionable insights and creating intuitive web experiences. My journey began with a passion 
                      for mathematics and evolved into a love for both analytics and user interface design.
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      I excel at bridging the gap between complex data analysis and user-friendly applications, 
                      ensuring that powerful insights are accessible through beautiful, interactive interfaces.
                    </p>

                    {/* Personal Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>India</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Available for Projects</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Highlights */}
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">What I Bring</h4>
                <div className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 glass rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <div
                className="w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[380px] relative overflow-hidden rounded-xl">
                {/* Play with Cubes Card */}
              <Card className="glass border-0 shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Play with Cubes:
                  </h4>
                  <div className="w-full h-[350px] sm:h-[400px] md:h-[420px] lg:h-[380px] relative overflow-hidden rounded-xl">
                    <Cubes 
                      gridSize={12}
                      maxAngle={180}
                      radius={5}
                      borderStyle="2px dashed #5227FF"
                      faceColor="#1a1a2e"
                      rippleColor="#ff6b6b"
                      rippleSpeed={1.5}
                      autoAnimate={true}
                      rippleOnClick={true}
                    />
                  </div>
                </CardContent>
              </Card>
                </div>
              


              {/* Key Skills Badges */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python", "React", "Next.js", "JavaScript", "TypeScript", "TailwindCSS",
                    "Machine Learning", "Data Visualization", "SQL", "MongoDB", "Git", "Figma"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;