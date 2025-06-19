"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  ArrowUp,
  Code,
  Coffee,
  Zap
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/Sid82828282889292", 
      label: "GitHub",
      color: "hover:text-gray-600 dark:hover:text-gray-400"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: Mail, 
      href: "mailto:hello@siddhant.dev", 
      label: "Email",
      color: "hover:text-red-600"
    },
  ];

  const techStack = [
    "React", "Next.js", "TypeScript", "Python", "TailwindCSS", "Framer Motion"
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Fluid Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-purple-900/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl" />
      
      {/* Glass overlay with subtle pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
      }} />
      
      <div className="relative z-10 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Siddhant</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Data Scientist & Frontend Developer passionate about creating innovative solutions 
                that bridge the gap between complex analytics and beautiful user experiences.
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>Fueled by coffee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Powered by passion</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 glass rounded-lg transition-all duration-300 ${social.color} backdrop-blur-sm bg-white/10 border border-white/20`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">Built With</h3>
              <div className="space-y-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <Code className="w-3 h-3 text-blue-400" />
                    <span className="text-gray-300 text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-4">
                <p className="text-gray-400 text-xs">
                  This portfolio is open source and available on GitHub
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2 text-gray-300 text-sm"
              >
                <span>© 2025 Siddhant. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in India</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-400 text-sm">
                  Last updated: January 2025
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <ArrowUp className="w-4 h-4 mr-1" />
                  Back to top
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;