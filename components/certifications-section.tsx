"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Building, 
  CheckCircle, 
  Star,
  TrendingUp,
  Brain,
  BarChart3,
  DollarSign
} from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google Advanced Data Analytics Certificate",
      issuer: "Google",
      issuerLogo: "https://images.pexels.com/photos/270549/pexels-photo-270549.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      date: "2024",
      status: "Completed",
      type: "Professional Certificate",
      skills: ["Advanced Analytics", "Statistical Analysis", "Data Visualization", "Python", "R", "Machine Learning"],
      description: "Comprehensive program covering advanced data analytics techniques, statistical modeling, and machine learning applications in business contexts.",
      credentialUrl: "#",
      highlights: [
        "Advanced statistical analysis and hypothesis testing",
        "Machine learning model development and validation",
        "Data visualization with Tableau and Python",
        "Business intelligence and strategic decision making",
        "Real-world capstone projects with industry datasets"
      ],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Finlatics Certificate in Financial Analytics",
      issuer: "Finlatics",
      issuerLogo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      date: "2024",
      status: "Completed",
      type: "Specialized Certificate",
      skills: ["Financial Modeling", "Risk Analysis", "Portfolio Management", "Excel", "Financial Markets", "Investment Analysis"],
      description: "Specialized program focusing on financial analytics, investment strategies, and quantitative finance methodologies for data-driven financial decision making.",
      credentialUrl: "#",
      highlights: [
        "Financial modeling and valuation techniques",
        "Risk assessment and portfolio optimization",
        "Market analysis and investment strategies",
        "Quantitative finance and statistical methods",
        "Real-world financial case studies and projects"
      ],
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const upcomingCertifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      expectedDate: "Q2 2025",
      status: "In Progress",
      icon: Brain,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta",
      expectedDate: "Q3 2025",
      status: "Planned",
      icon: TrendingUp,
      color: "from-blue-500 to-purple-500"
    }
  ];

  const achievements = [
    { label: "Certifications Earned", value: "6+", icon: Award },
    { label: "Skills Validated", value: "60+", icon: CheckCircle },
    { label: "Learning Hours", value: "300+", icon: Star },
    { label: "Projects Completed", value: "15+", icon: TrendingUp }
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
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      
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
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Achievements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Certifications & <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 glass rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <achievement.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <div className="text-2xl font-bold gradient-text">{achievement.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 chroma-grid overflow-hidden">
                    <CardHeader className="relative">
                      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
                        {/* Certificate Icon */}
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <cert.icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Certificate Info */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                            <div>
                              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {cert.title}
                              </CardTitle>
                              <div className="flex items-center space-x-4 mt-2">
                                <div className="flex items-center space-x-2">
                                  <Building className="w-4 h-4 text-gray-500" />
                                  <span className="font-medium text-gray-700 dark:text-gray-300">{cert.issuer}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-600 dark:text-gray-400">{cert.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge variant="success" className="flex items-center space-x-1">
                                <CheckCircle className="w-3 h-3" />
                                <span>{cert.status}</span>
                              </Badge>
                              <Badge variant="outline">
                                {cert.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Key Learning Outcomes</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {cert.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Skills Validated</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Button 
                          variant="outline" 
                          className="group hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          onClick={() => window.open(cert.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:text-blue-600" />
                          View Credential
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              In Progress & Planned
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group"
                >
                  <Card className="h-full glass border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                          <cert.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.issuer}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 text-sm">{cert.expectedDate}</span>
                            <Badge 
                              variant={cert.status === 'In Progress' ? 'warning' : 'outline'}
                              className="text-xs"
                            >
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="glass border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Continuous Learning Philosophy
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I believe in staying current with industry trends and continuously expanding my skill set. 
                  Each certification represents not just knowledge gained, but a commitment to excellence 
                  and professional growth in the rapidly evolving tech landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;