// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ExternalLink, Github, Code, Sparkles, Clock, Eye } from 'lucide-react';
// import Link from 'next/link';

// const ProjectsSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const featuredProjects = [
//     {
//       title: "Mobcasecobra",
//       description: "A modern e-commerce platform for custom phone cases with advanced product customization, real-time preview, and seamless checkout experience.",
//       image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Next.js", "React", "TypeScript", "Stripe", "TailwindCSS", "Prisma"],
//       category: "fullstack",
//       status: "deployed",
//       githubUrl: "https://github.com/Sid82828282889292/mobcasecobra1",
//       liveUrl: "https://mobcasecobra1-eight.vercel.app/",
//       features: ["Product Customization", "Payment Integration", "Admin Dashboard", "Responsive Design"]
//     },
//     {
//       title: "CRICKbot - IPL Analytics",
//       description: "Advanced cricket analytics platform featuring IPL win prediction and Fantasy XI recommendation using machine learning algorithms and real-time data.",
//       image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Python", "Machine Learning", "Flask", "Pandas", "Scikit-learn", "Chart.js"],
//       category: "ml",
//       status: "deployed",
//       githubUrl: "https://github.com/Sid82828282889292/CRICKbot",
//       liveUrl: "https://cricbot.onrender.com/",
//       features: ["Win Prediction", "Player Analytics", "Team Optimization", "Real-time Stats"]
//     },
//     {
//       title: "Xlancr Platform",
//       description: "Innovative freelancing platform connecting clients with skilled professionals, featuring advanced matching algorithms and project management tools.",
//       image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "Redux"],
//       category: "fullstack",
//       status: "deployed",
//       liveUrl: "https://xlancr.info/lander",
//       features: ["User Matching", "Real-time Chat", "Payment System", "Project Tracking"]
//     }
//   ];

//   const inProgressProjects = [
//     {
//       title: "AstroPALM",
//       description: "Gesture-based astrology app using MediaPipe Hands and TensorFlow.js for palm reading with no clicks or forms required.",
//       image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Next.js", "MediaPipe", "TensorFlow.js", "FreeAstrology API", "Framer Motion"],
//       category: "ml",
//       status: "in-progress",
//       features: ["Hand Gesture Detection", "Palm Analysis", "Astrology Integration", "Real-time Processing"]
//     },
//     {
//       title: "Anemia Sense",
//       description: "ML model for detecting anemia using advanced computer vision and medical data analysis techniques.",
//       image: "https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Python", "OpenCV", "TensorFlow", "Medical APIs", "Flask"],
//       category: "ml",
//       status: "in-progress",
//       features: ["Image Analysis", "Medical Detection", "Health Insights", "Clinical Accuracy"]
//     },
//     {
//       title: "Chat with PDF",
//       description: "NLP tool for intelligent PDF querying using natural language processing and document understanding.",
//       image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Python", "NLP", "LangChain", "Vector Database", "Streamlit"],
//       category: "ai",
//       status: "in-progress",
//       features: ["Document Parsing", "Question Answering", "Context Understanding", "Smart Search"]
//     },
//     {
//       title: "AI Book Recommender",
//       description: "Intelligent book recommendation system using collaborative filtering and content-based algorithms.",
//       image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Python", "Recommendation Systems", "NLP", "React", "FastAPI"],
//       category: "ai",
//       status: "in-progress",
//       features: ["Personalized Recommendations", "Genre Analysis", "User Preferences", "Social Features"]
//     },
//     {
//       title: "AI Recipe Generator",
//       description: "Smart recipe generation based on available ingredients using advanced language models and nutrition APIs.",
//       image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["OpenAI API", "Next.js", "Recipe APIs", "Nutrition Analysis", "Image Recognition"],
//       category: "ai",
//       status: "in-progress",
//       features: ["Ingredient Recognition", "Recipe Generation", "Nutrition Facts", "Dietary Preferences"]
//     },
//     {
//       title: "Mood-Based Playlist Curator",
//       description: "AI-powered music recommendation system that creates playlists based on emotional analysis and user preferences.",
//       image: "https://images.pexels.com/photos/3097456/pexels-photo-3097456.jpeg?auto=compress&cs=tinysrgb&w=800",
//       technologies: ["Python", "Emotion AI", "Spotify API", "Machine Learning", "React"],
//       category: "ai",
//       status: "in-progress",
//       features: ["Mood Detection", "Music Analysis", "Playlist Generation", "Spotify Integration"]
//     }
//   ];

//   const allProjects = [...featuredProjects, ...inProgressProjects];

//   const categories = [
//     { id: 'all', label: 'All Projects', count: allProjects.length },
//     { id: 'fullstack', label: 'Full Stack', count: allProjects.filter(p => p.category === 'fullstack').length },
//     { id: 'ml', label: 'Machine Learning', count: allProjects.filter(p => p.category === 'ml').length },
//     { id: 'ai', label: 'AI Projects', count: allProjects.filter(p => p.category === 'ai').length },
//   ];

//   const filteredProjects = selectedCategory === 'all' 
//     ? allProjects 
//     : allProjects.filter(project => project.category === selectedCategory);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           className="space-y-12"
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center space-y-4">
//             <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
//               <Code className="w-5 h-5" />
//               <span className="text-sm font-medium uppercase tracking-wider">Portfolio</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//               Featured <span className="gradient-text">Projects</span>
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               A showcase of my latest work in data science, web development, and machine learning
//             </p>
//           </motion.div>

//           {/* Category Filter */}
//           <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
//             {categories.map((category) => (
//               <Button
//                 key={category.id}
//                 variant={selectedCategory === category.id ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
//                     : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
//                 }`}
//               >
//                 {category.label}
//                 <Badge variant="secondary" className="ml-2">
//                   {category.count}
//                 </Badge>
//               </Button>
//             ))}
//           </motion.div>

//           {/* Projects Grid */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedCategory}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredProjects.map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   variants={itemVariants}
//                   whileHover={{ y: -5 }}
//                   className="group"
//                 >
//                   <Card className="h-full glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 chroma-grid overflow-hidden">
//                     {/* Project Image */}
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
//                       {/* Status Badge */}
//                       <div className="absolute top-3 right-3">
//                         <Badge 
//                           variant={project.status === 'deployed' ? 'success' : 'warning'}
//                           className="flex items-center space-x-1"
//                         >
//                           {project.status === 'deployed' ? (
//                             <Eye className="w-3 h-3" />
//                           ) : (
//                             <Clock className="w-3 h-3" />
//                           )}
//                           <span>{project.status === 'deployed' ? 'Live' : 'In Progress'}</span>
//                         </Badge>
//                       </div>

//                       {/* Overlay with links */}
//                       <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
//                         {project.githubUrl && (
//                           <Button
//                             variant="glass"
//                             size="sm"
//                             asChild
//                           >
//                             <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                               <Github className="w-4 h-4 mr-2" />
//                               Code
//                             </a>
//                           </Button>
//                         )}
//                         {project.liveUrl && (
//                           <Button
//                             variant="glass"
//                             size="sm"
//                             asChild
//                           >
//                             <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                               <ExternalLink className="w-4 h-4 mr-2" />
//                               Live Demo
//                             </a>
//                           </Button>
//                         )}
//                       </div>
//                     </div>

//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                         {project.title}
//                       </CardTitle>
//                     </CardHeader>

//                     <CardContent className="space-y-4">
//                       <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
//                         {project.description}
//                       </p>

//                       {/* Key Features */}
//                       <div className="space-y-2">
//                         <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features</h4>
//                         <div className="grid grid-cols-2 gap-1 text-xs">
//                           {project.features.map((feature, idx) => (
//                             <div key={idx} className="flex items-center space-x-1">
//                               <Sparkles className="w-3 h-3 text-blue-500" />
//                               <span className="text-gray-600 dark:text-gray-400">{feature}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Technologies */}
//                       <div className="space-y-2">
//                         <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Technologies</h4>
//                         <div className="flex flex-wrap gap-1">
//                           {project.technologies.map((tech, idx) => (
//                             <Badge key={idx} variant="outline" className="text-xs">
//                               {tech}
//                             </Badge>
//                           ))}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {/* View All Projects Link */}
//           <motion.div
//             variants={itemVariants}
//             className="text-center"
//           >
//             <Button 
//               variant="gradient" 
//               size="lg"
//               asChild
//               className="shadow-xl hover:shadow-2xl transition-shadow"
//             >
//               <Link href="/projects">
//                 <Code className="w-5 h-5 mr-2" />
//                 View All Projects
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Code, Sparkles, Clock, Eye } from 'lucide-react';
import Link from 'next/link';

// ✅ Define the Project type
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  status: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ✅ Apply type to projects array
  const featuredProjects: Project[] = [
    {
      title: "Mobcasecobra",
      description: "A modern e-commerce platform for custom phone cases with advanced product customization, real-time preview, and seamless checkout experience.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "TailwindCSS", "Prisma"],
      category: "fullstack",
      status: "deployed",
      githubUrl: "https://github.com/Sid82828282889292/mobcasecobra1",
      liveUrl: "https://mobcasecobra1-eight.vercel.app/",
      features: ["Product Customization", "Payment Integration", "Admin Dashboard", "Responsive Design"]
    },
    {
      title: "CRICKbot - IPL Analytics",
      description: "Advanced cricket analytics platform featuring IPL win prediction and Fantasy XI recommendation using machine learning algorithms and real-time data.",
      image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Machine Learning", "Flask", "Pandas", "Scikit-learn", "Chart.js"],
      category: "ml",
      status: "deployed",
      githubUrl: "https://github.com/Sid82828282889292/CRICKbot",
      liveUrl: "https://cricbot.onrender.com/",
      features: ["Win Prediction", "Player Analytics", "Team Optimization", "Real-time Stats"]
    },
    {
      title: "Xlancr Platform",
      description: "Innovative freelancing platform connecting clients with skilled professionals, featuring advanced matching algorithms and project management tools.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "Redux"],
      category: "fullstack",
      status: "deployed",
      liveUrl: "https://xlancr.info/lander",
      features: ["User Matching", "Real-time Chat", "Payment System", "Project Tracking"]
    }
  ];

  const inProgressProjects: Project[] = [
    {
      title: "AstroPALM",
      description: "Gesture-based astrology app using MediaPipe Hands and TensorFlow.js for palm reading with no clicks or forms required.",
      image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MediaPipe", "TensorFlow.js", "FreeAstrology API", "Framer Motion"],
      category: "ml",
      status: "in-progress",
      features: ["Hand Gesture Detection", "Palm Analysis", "Astrology Integration", "Real-time Processing"]
    },
    {
      title: "Anemia Sense",
      description: "ML model for detecting anemia using advanced computer vision and medical data analysis techniques.",
      image: "https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "TensorFlow", "Medical APIs", "Flask"],
      category: "ml",
      status: "in-progress",
      features: ["Image Analysis", "Medical Detection", "Health Insights", "Clinical Accuracy"]
    },
    {
      title: "Chat with PDF",
      description: "NLP tool for intelligent PDF querying using natural language processing and document understanding.",
      image: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLP", "LangChain", "Vector Database", "Streamlit"],
      category: "ai",
      status: "in-progress",
      features: ["Document Parsing", "Question Answering", "Context Understanding", "Smart Search"]
    },
    {
      title: "AI Book Recommender",
      description: "Intelligent book recommendation system using collaborative filtering and content-based algorithms.",
      image: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Recommendation Systems", "NLP", "React", "FastAPI"],
      category: "ai",
      status: "in-progress",
      features: ["Personalized Recommendations", "Genre Analysis", "User Preferences", "Social Features"]
    },
    {
      title: "AI Recipe Generator",
      description: "Smart recipe generation based on available ingredients using advanced language models and nutrition APIs.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["OpenAI API", "Next.js", "Recipe APIs", "Nutrition Analysis", "Image Recognition"],
      category: "ai",
      status: "in-progress",
      features: ["Ingredient Recognition", "Recipe Generation", "Nutrition Facts", "Dietary Preferences"]
    },
    {
      title: "Mood-Based Playlist Curator",
      description: "AI-powered music recommendation system that creates playlists based on emotional analysis and user preferences.",
      image: "https://images.pexels.com/photos/3097456/pexels-photo-3097456.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Emotion AI", "Spotify API", "Machine Learning", "React"],
      category: "ai",
      status: "in-progress",
      features: ["Mood Detection", "Music Analysis", "Playlist Generation", "Spotify Integration"]
    }
  ];

  const allProjects = [...featuredProjects, ...inProgressProjects];

  const categories = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'fullstack', label: 'Full Stack', count: allProjects.filter(p => p.category === 'fullstack').length },
    { id: 'ml', label: 'Machine Learning', count: allProjects.filter(p => p.category === 'ml').length },
    { id: 'ai', label: 'AI Projects', count: allProjects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of my latest work in data science, web development, and machine learning
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">{category.count}</Badge>
              </Button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full glass border-0 shadow-xl hover:shadow-2xl transition-all duration-300 chroma-grid overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute top-3 right-3">
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
                      </div>

                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {project.githubUrl && (
                          <Button variant="glass" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="glass" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features</h4>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-1">
                              <Sparkles className="w-3 h-3 text-blue-500" />
                              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div variants={itemVariants} className="text-center">
            <Button variant="gradient" size="lg" asChild className="shadow-xl hover:shadow-2xl transition-shadow">
              <Link href="/projects">
                <Code className="w-5 h-5 mr-2" />
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
