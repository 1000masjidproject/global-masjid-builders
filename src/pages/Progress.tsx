import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MapPin, Clock, CheckCircle, Building } from "lucide-react";
import mosque1 from "@/assets/mosque-1.jpg";
import mosqueConstruction from "@/assets/mosque-construction.jpg";

const ProgressPage = () => {
  const completedProjects = [
    { name: "Al-Rahman Mosque", location: "Jakarta, Indonesia", year: 2024, capacity: "2,000+", image: mosque1 },
    { name: "Unity Mosque", location: "Sarajevo, Bosnia", year: 2023, capacity: "1,500+", image: mosque1 },
    { name: "Peace Center Mosque", location: "Nairobi, Kenya", year: 2024, capacity: "1,200+", image: mosque1 },
    { name: "Al-Huda Mosque", location: "Dhaka, Bangladesh", year: 2023, capacity: "3,000+", image: mosque1 },
  ];

  const ongoingProjects = [
    { name: "Al-Noor Mosque", location: "Nairobi, Kenya", progress: 85, completion: "Q2 2025", image: mosqueConstruction },
    { name: "Mercy Mosque", location: "Cairo, Egypt", progress: 65, completion: "Q3 2025", image: mosqueConstruction },
    { name: "Hope Center Mosque", location: "Karachi, Pakistan", progress: 45, completion: "Q4 2025", image: mosqueConstruction },
  ];

  const futureProjects = [
    { name: "Al-Falah Mosque", location: "Lagos, Nigeria", phase: "Planning" },
    { name: "Guidance Mosque", location: "Istanbul, Turkey", phase: "Design" },
    { name: "Harmony Mosque", location: "Kuala Lumpur, Malaysia", phase: "Funding" },
    { name: "Blessed Mosque", location: "Casablanca, Morocco", phase: "Planning" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-muted to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Progress</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Track our journey toward building 1,000 mosques worldwide. See completed projects, 
              ongoing construction, and future locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold mb-2">247</div>
              <div className="text-sm opacity-90">Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">153</div>
              <div className="text-sm opacity-90">Ongoing</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">600</div>
              <div className="text-sm opacity-90">Planned</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24.7%</div>
              <div className="text-sm opacity-90">Total Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Completed Mosques</h2>
            <p className="text-lg text-muted-foreground">
              These mosques are now serving their communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-card-hover transition-shadow">
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>Completed {project.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        <span>Capacity: {project.capacity}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
              <Building className="w-7 h-7 text-accent" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Ongoing Construction</h2>
            <p className="text-lg text-muted-foreground">
              Currently under construction with expected completion dates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-card-hover transition-shadow">
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                    <div className="space-y-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Expected: {project.completion}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Progress</span>
                        <span className="text-primary font-semibold">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
              <MapPin className="w-7 h-7 text-secondary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Future Locations</h2>
            <p className="text-lg text-muted-foreground">
              Planned projects in various stages of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {futureProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">{project.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-medium">
                        {project.phase} Phase
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgressPage;
