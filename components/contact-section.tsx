"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  MessageCircle,
  Clock,
  CheckCircle,
  User,
  Building
} from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@siddhant.dev',
      href: 'mailto:hello@siddhant.dev',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      color: 'text-purple-500'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM IST',
      color: 'text-orange-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Sid82828282889292',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: '#',
      color: 'hover:text-green-600'
    }
  ];

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

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
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
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always open to discussing new opportunities and exciting projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              {/* Contact Details */}
              <Card className="glass border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-4 group"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 ${info.color} group-hover:scale-110 transition-transform`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="glass border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Connect With Me
                  </h3>
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
                        className={`p-4 glass rounded-xl transition-all duration-300 ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="glass border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Why Work With Me?
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Data-driven approach to problem solving",
                      "Clean, maintainable code practices",
                      "Responsive communication",
                      "Deadline-focused delivery"
                    ].map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="glass border-0 shadow-xl chroma-grid">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="pl-10 glass border-white/20 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="pl-10 glass border-white/20 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project inquiry, collaboration, etc."
                          className="pl-10 glass border-white/20 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, requirements, timeline, and any other relevant details..."
                        rows={6}
                        className="glass border-white/20 focus:border-blue-500 transition-colors resize-none"
                        required
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 py-3"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Quick Response:</strong> I typically respond to messages within 24 hours. 
                      For urgent inquiries, feel free to reach out via phone or WhatsApp.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;