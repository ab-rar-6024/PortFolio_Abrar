import { motion } from "motion/react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Calendar, Award, Code, Brain, Database, BarChart3, Users, Github } from "lucide-react";
import { FloatingIcons } from "./FloatingIcons";
import { InteractiveSkillCard } from "./InteractiveSkillCard";
import { InteractiveProjectCard } from "./InteractiveProjectCard";


export function Portfolio() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "R", "SQL"],
      icon: Code,
      color: "#00bcd4"
    },
    {
      title: "AI & ML",
      skills: ["Supervised & Unsupervised Learning", "Deep Learning", "CNNs"],
      icon: Brain,
      color: "#0097a7"
    },
    {
      title: "Data Science Tools",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebooks"],
      icon: Database,
      color: "#4dd0e1"
    },
    {
      title: "Data Visualization",
      skills: ["Power BI", "Excel"],
      icon: BarChart3,
      color: "#00acc1"
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Critical Thinking", "Teamwork", "Adaptability", "Time Management"],
      icon: Users,
      color: "#26c6da"
    }
  ];

  const projects = [
    {
      title: "Power BI Analytics Project",
      year: "2024",
      type: "Project",
      technologies: ["Power BI", "Data Analysis"],
      achievements: [
        "Designed interactive dashboards with KPIs, charts, slicers, and filters.",
        "Analyzed operational datasets to generate actionable insights."
      ],
      link: "https://github.com/ab-rar-6024/Power-BI-Analytics-Project"
    },
    {
      title: "Chatbot",
      year: "2024",
      type: "Project",
      technologies: ["AI / NLP", "Python"],
      achievements: [
        "Developed a rule-based and AI-assisted chatbot for automated query handling.",
        "Improved response efficiency using predefined logic and NLP concepts."
      ],
      link: "https://github.com/ab-rar-6024/chatbot"
    },
    {
      title: "College Portal Management System",
      year: "2023",
      type: "Project",
      technologies: ["Web Development", "Databases"],
      achievements: [
        "Built a web-based portal for student registration and academic management.",
        "Implemented CRUD operations and role-based access control."
      ],
      link: "https://github.com/ab-rar-6024/students_portal"
    },
    {
      title: "Data Visualization Tool using R",
      year: "2023",
      type: "Project",
      technologies: ["R", "ggplot2"],
      achievements: [
        "Created analytical visualizations using R and ggplot2.",
        "Transformed raw data into meaningful graphical reports."
      ],
      link: "https://github.com/ab-rar-6024/Data-portal-for-Visualization"
    }
  ];

  const experience = [
    {
      title: "IT Intern",
      company: "DP World",
      duration: "19 June 2025 – 9 July 2025",
      location: "On-site",
      achievements: [
        "Completed a 15-day intensive IT internship focused on hands-on practical learning.",
        "Worked on 10 project-based tasks involving IT systems and applications.",
        "Gained exposure to software development, system support, and database operations.",
        "Assisted in application development, testing, and troubleshooting.",
        "Followed IT workflows, documentation, and industry best practices.",
        "Collaborated with team members in a real-time operational environment."
      ],
      link: "https://drive.google.com/file/d/1lc7u0PAGKOuUaZiLguQRwCbrHzP108F7/view?usp=sharing"
    }
  ];

  const certifications = [
    {
      name: "AWS Project Network – Coursera",
      link: "https://drive.google.com/file/d/1fyLzirEZAGTPNcANUUJyW9DnB73CGAvW/view?usp=sharing"
    },
    {
      name: "Machine Learning A-Z – Udemy",
      link: "https://drive.google.com/file/d/1rewrTS1-e5vjZTrYYoL7oENw4JR0-2wF/view?usp=sharing"
    },
    {
      name: "Deep Learning – Udemy",
      link: "https://drive.google.com/file/d/1d7ZzFLE4ysBbTq8rqJdBiXHiqyZaK40Q/view?usp=sharing"
    },
    {
      name: "Data Mining in R – Infosys",
      link: "https://drive.google.com/file/d/1GA03DsuCuC4GVngXrrO5nGiU4MX5aBHS/view?usp=sharing"
    },
    {
      name: "Business Intelligence – Infosys",
      link: "https://drive.google.com/file/d/1ZlaFEyN0polEk6ChSuoqaDBgGhw2mcug/view?usp=sharing"
    },
    {
      name: "BCGX Job Simulation (Generative AI)",
      link: "https://drive.google.com/file/d/1rQKIyTGEhoVn8gJZYqL7jzHvYYPHu7os/view?usp=sharing"
    },
    {
      name: "Quantium Job Simulation",
      link: "https://drive.google.com/file/d/19jc3SUw8TBSFhLQl3A4y3Lx7ZcRploxc/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingIcons />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 px-6">
        <div className="absolute inset-0">
          <div className="gradient-animation opacity-20"></div>
        </div>

        <motion.div
          className="container mx-auto max-w-6xl relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-12">
            <motion.div
              className="space-y-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-primary font-medium tracking-wide text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hey, I am Mohamed Abrar S A
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-primary">AI</span> Engineer
              </motion.h1>

              <motion.p
                className="text-xl leading-relaxed text-foreground/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Passionate about solving real-world problems through innovative AI/ML solutions. Transforming data into actionable insights.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >


                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 group"
                >
                  <a
                    href="/resume.pdf"
                    download="Mohamed_Abrar_CV.pdf"
                  >
                    Download CV
                  </a>
                </Button>




              </motion.div>

              <motion.div
                className="flex items-center gap-6 pt-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div
                  className="flex items-center gap-2 text-sm text-foreground/70"
                  whileHover={{ scale: 1.05, color: "#00bcd4" }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-4 h-4" />
                  +91 90422 72801
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-sm text-foreground/70"
                  whileHover={{ scale: 1.05, color: "#00bcd4" }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="w-4 h-4" />
                  Chennai, India
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Professional Summary */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-500">
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardTitle className="text-2xl text-center text-primary">Professional Summary</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.p
                  className="text-foreground leading-relaxed text-center text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Aspiring Data Science Engineer pursuing B.Tech in Artificial Intelligence and Data Science, seeking internship and entry-level opportunities to apply knowledge of machine learning, data analysis, and software development. Eager to contribute to real-world projects and gain hands-on industry experience.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-6 bg-muted/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <InteractiveSkillCard
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                color={category.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <InteractiveProjectCard
                key={index}
                title={project.title}
                year={project.year}
                type={project.type}
                technologies={project.technologies}
                achievements={project.achievements}
                index={index}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="py-20 px-6 bg-muted/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-accent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Internship Experience
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-500">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-primary text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span className="text-secondary">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span className="text-accent">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start gap-3 text-foreground"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + achIndex * 0.1 }}
                        >
                          <motion.span
                            className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex justify-end">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
                          onClick={() => exp.link && window.open(exp.link, '_blank')}
                        >
                          View Certificate
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education & <span className="text-primary">Certifications</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </motion.div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-medium text-lg text-foreground">B.S. Abdur Rahman Crescent Institute of Science and Technology</h3>
                    <p className="text-primary">B.Tech in Artificial Intelligence and Data Science</p>
                    <p className="text-sm text-muted-foreground">Aug 2023 – June 2027 | Chennai, India</p>
                    <p className="text-sm font-medium text-secondary mt-1">CGPA: 9.22</p>
                    <p className="text-xs text-foreground/70 mt-2 leading-relaxed">
                      Majors: Machine Learning, Deep Learning, Data Structures and Algorithms, Artificial Intelligence, Data Mining, Natural Language Processing, Python Programming
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-effect border-border/50 hover:border-secondary/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="w-6 h-6 text-secondary" />
                    </motion.div>
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start justify-between gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5, color: "#0097a7" }}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <motion.span
                            className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span className="text-sm transition-colors duration-300 text-foreground">{cert.name}</span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 px-2 text-primary hover:bg-primary/10"
                            onClick={() => window.open(cert.link, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-primary">Connect</span>
          </motion.h2>

          <motion.p
            className="text-foreground mb-8 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Aspiring Data Science Engineer pursuing B.Tech in Artificial Intelligence and Data Science, seeking internship and entry-level opportunities to apply knowledge of machine learning, data analysis, and software development. Eager to contribute to real-world projects and gain hands-on industry experience.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=samohamedabrar2005@gmail.com&su=Portfolio%20Contact', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                samohamedabrar2005@gmail.com
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 px-8"
                onClick={() => window.open('https://www.linkedin.com/in/mohamed-abrar-24sa/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 px-8"
                onClick={() => window.open('https://github.com/ab-rar-6024', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
