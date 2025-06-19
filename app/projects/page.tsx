"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  ExternalLink, 
  Github, 
  Search, 
  Filter, 
  ArrowLeft,
  Clock,
  Eye,
  Sparkles,
  Calendar,
  Code
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const allProjects = [
    {
      title: "Mobcasecobra",
      description: "A modern e-commerce platform for custom phone cases with advanced product customization, real-time preview, and seamless checkout experience. Features include drag-and-drop design tools, payment integration with Stripe, and a comprehensive admin dashboard.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "TailwindCSS", "Prisma", "PostgreSQL"],
      category: "fullstack",
      status: "deployed",
      githubUrl: "https://github.com/Sid82828282889292/mobcasecobra1",
      liveUrl: "https://mobcasecobra1-eight.vercel.app/",
      features: ["Product Customization", "Payment Integration", "Admin Dashboard", "Responsive Design", "Real-time Preview"],
      date: "2024",
      complexity: "Advanced"
    },
    {
      title: "CRICKbot - IPL Analytics",
      description: "Advanced cricket analytics platform featuring IPL win prediction and Fantasy XI recommendation using machine learning algorithms. Includes real-time data processing, player performance analytics, and team optimization strategies.",
      image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Machine Learning", "Flask", "Pandas", "Scikit-learn", "Chart.js", "SQLite"],
      category: "ml",
      status: "deployed",
      githubUrl: "https://github.com/Sid82828282889292/CRICKbot",
      liveUrl: "https://cricbot.onrender.com/",
      features: ["Win Prediction", "Player Analytics", "Team Optimization", "Real-time Stats", "Fantasy XI"],
      date: "2024",
      complexity: "Advanced"
    },
    {
      title: "Xlancr Platform",
      description: "Innovative freelancing platform connecting clients with skilled professionals. Features advanced matching algorithms, real-time messaging, project management tools, and integrated payment systems.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "Redux", "Express"],
      category: "fullstack",
      status: "deployed",
      liveUrl: "https://xlancr.info/lander",
      features: ["User Matching", "Real-time Chat", "Payment System", "Project Tracking", "Rating System"],
      date: "2024",
      complexity: "Advanced"
    },
    {
      title: "AstroPALM",
      description: "Gesture-based astrology app using MediaPipe Hands and TensorFlow.js for palm reading. No clicks or forms required - just show your palm to the camera for instant readings using advanced computer vision.",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MediaPipe", "TensorFlow.js", "FreeAstrology API", "Framer Motion", "WebRTC"],
      category: "ml",
      status: "in-progress",
      features: ["Hand Gesture Detection", "Palm Analysis", "Astrology Integration", "Real-time Processing", "No-touch Interface"],
      date: "2024",
      complexity: "Advanced"
    },
    {
      title: "Anemia Sense",
      description: "ML model for detecting anemia using advanced computer vision and medical data analysis. Analyzes eye images and other biomarkers to provide accurate health assessments.",
      image: "https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "TensorFlow", "Medical APIs", "Flask", "NumPy"],
      category: "ml",
      status: "in-progress",
      features: ["Image Analysis", "Medical Detection", "Health Insights", "Clinical Accuracy", "Report Generation"],
      date: "2024",
      complexity: "Advanced"
    },
    {
      title: "Chat with PDF",
      description: "NLP tool for intelligent PDF querying using natural language processing. Upload any PDF and ask questions about its content using advanced language models and vector databases.",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLP", "LangChain", "Vector Database", "Streamlit", "OpenAI"],
      category: "ai",
      status: "in-progress",
      features: ["Document Parsing", "Question Answering", "Context Understanding", "Smart Search", "Multi-format Support"],
      date: "2024",
      complexity: "Intermediate"
    },
    {
      title: "AI Book Recommender",
      description: "Intelligent book recommendation system using collaborative filtering and content-based algorithms. Analyzes reading patterns, preferences, and book metadata for personalized suggestions.",
      image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Recommendation Systems", "NLP", "React", "FastAPI", "MongoDB"],
      category: "ai",
      status: "in-progress",
      features: ["Personalized Recommendations", "Genre Analysis", "User Preferences", "Social Features", "Reading Analytics"],
      date: "2024",
      complexity: "Intermediate"
    },
    {
      title: "AI Recipe Generator",
      description: "Smart recipe generation based on available ingredients using advanced language models. Includes nutrition analysis, dietary preferences, and cooking instructions.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["OpenAI API", "Next.js", "Recipe APIs", "Nutrition Analysis", "Image Recognition", "React"],
      category: "ai",
      status: "in-progress",
      features: ["Ingredient Recognition", "Recipe Generation", "Nutrition Facts", "Dietary Preferences", "Cooking Timer"],
      date: "2024",
      complexity: "Intermediate"
    },
    {
      title: "Mood-Based Playlist Curator",
      description: "AI-powered music recommendation system that creates playlists based on emotional analysis and user preferences. Integrates with Spotify API for seamless music streaming.",
      image: "https://images.pexels.com/photos/3097456/pexels-photo-3097456.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Emotion AI", "Spotify API", "Machine Learning", "React", "Flask"],
      category: "ai",
      status: "in-progress",
      features: ["Mood Detection", "Music Analysis", "Playlist Generation", "Spotify Integration", "Emotion Tracking"],
      date: "2024",
      complexity: "Intermediate"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'fullstack', label: 'Full Stack', count: allProjects.filter(p => p.category === 'fullstack').length },
    { id: 'ml', label: 'Machine Learning', count: allProjects.filter(p => p.category === 'ml').length },
    { id: 'ai', label: 'AI Projects', count: allProjects.filter(p => p.category === 'ai').length },
  ];

  const statuses = [
    { id: 'all', label: 'All Status' },
    { id: 'deployed', label: 'Live Projects' },
    { id: 'in-progress', label: 'In Progress' },
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <Link href="/" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              All <span className="gradient-text">Projects</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive showcase of my work in data science, web development, and artificial intelligence
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>{allProjects.length} Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>{allProjects.filter(p => p.status === 'deployed').length} Live</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{allProjects.filter(p => p.status === 'in-progress').length} In Progress</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by:</span>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-xs"
                  >
                    {category.label}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <Button
                    key={status.id}
                    variant={selectedStatus === status.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(status.id)}
                    className="text-xs"
                  >
                    {status.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${selectedStatus}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 chroma-grid overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Status & Complexity Badges */}
                      <div className="absolute top-3 left-3 right-3 flex justify-between">
                        <Badge 
                          variant={project.status === 'deployed' ? 'success' : 'warning'}
                          className="flex items-center space-x-1"
                        >
                          {project.status === 'deployed' ? (
                            <Eye className="w-3 h-3" />
                          ) : (
                            <Clock className="w-3 h-3" />
                          )}
                          <span>{project.status === 'deployed' ? 'Live' : 'In Progress'}</span>
                        </Badge>
                        <Badge variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                          {project.complexity}
                        </Badge>
                      </div>

                      {/* Overlay with links */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.githubUrl && (
                          <Button
                            variant="glass"
                            size="sm"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="glass"
                            size="sm"
                            asChild
                          >
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs">{project.date}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features</h4>
                        <div className="grid grid-cols-1 gap-1 text-xs">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-1">
                              <Sparkles className="w-3 h-3 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                          {project.features.length > 3 && (
                            <div className="text-gray-500 text-xs">
                              +{project.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg mb-4">No projects found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;