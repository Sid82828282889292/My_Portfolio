"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Code, 
  Database, 
  Palette, 
  BarChart3, 
  Cog, 
  Zap,
  TrendingUp,
  Globe,
  Laptop,
  Server,
  Eye,
  Layers
} from 'lucide-react';

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Building responsive UIs with modern component-based frameworks',
      technologies: [
        'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 
        'TailwindCSS', 'Framer Motion', 'HTML5', 'CSS3'
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Database',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      description: 'Creating REST APIs and managing data persistence with scalable databases',
      technologies: [
        'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 
        'REST APIs', 'GraphQL', 'SQLite', 'Firebase'
      ]
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      description: 'Performing EDA, modeling, and visualization for insights and predictions',
      technologies: [
        'Python', 'Pandas', 'NumPy', 'Matplotlib', 
        'Seaborn', 'Jupyter Notebooks', 'SQL', 'Excel'
      ]
    },
    {
      id: 'machine-learning',
      title: 'Deep Learning & AI',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      description: 'Building deep learning models and gesture-based interfaces',
      technologies: [
        'PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn',
        'NLP', 'TensorFlow.js', 'MediaPipe', 'Computer Vision'
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Deployment',
      icon: Cog,
      color: 'from-indigo-500 to-purple-500',
      description: 'Version control, deployment, and development workflow optimization',
      technologies: [
        'Git & GitHub', 'Vercel', 'Netlify', 'Render',
        'Docker', 'AWS', 'VS Code', 'Figma'
      ]
    },
    {
      id: 'design',
      title: 'Design & UX',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      description: 'Creating intuitive user experiences with modern design principles',
      technologies: [
        'UI/UX Design', 'Responsive Design', 'Design Systems', 
        'Prototyping', 'Accessibility', 'User Research'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      
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
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Technical <span className="gradient-text">Proficiency</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills across multiple domains
            </p>
          </motion.div>

          {/* Skills Overview Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, label: "Data Science", value: "8+ Tools", color: "text-blue-500" },
              { icon: Globe, label: "Web Development", value: "10+ Technologies", color: "text-green-500" },
              { icon: Brain, label: "AI & ML", value: "6+ Frameworks", color: "text-purple-500" },
              { icon: Laptop, label: "Development Tools", value: "12+ Platforms", color: "text-orange-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 glass rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredCategory(category.id)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="group"
              >
                <Card className="h-full glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 chroma-grid overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {category.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies Grid */}
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, idx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: categoryIndex * 0.1 + idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className={`px-3 py-1 text-sm transition-all duration-300 hover:shadow-md ${
                              hoveredCategory === category.id 
                                ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-300 dark:border-blue-600' 
                                : 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
                            }`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants} className="text-center space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Full-Stack Development",
                  description: "End-to-end application development from concept to deployment",
                  icon: Layers,
                  technologies: ["React", "Node.js", "MongoDB", "TypeScript"]
                },
                {
                  title: "Data-Driven Solutions",
                  description: "Leveraging analytics and ML to drive informed business decisions",
                  icon: BarChart3,
                  technologies: ["Python", "Pandas", "Scikit-learn", "Visualization"]
                },
                {
                  title: "Modern UI/UX",
                  description: "Creating intuitive interfaces with cutting-edge design principles",
                  icon: Eye,
                  technologies: ["TailwindCSS", "Framer Motion", "Responsive Design", "Accessibility"]
                }
              ].map((competency, index) => (
                <motion.div
                  key={competency.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 glass rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <competency.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {competency.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {competency.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {competency.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;