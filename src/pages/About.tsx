import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, CheckCircle } from "lucide-react";

const About = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Project</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The 1000 Masjid Global Construction Project is a worldwide charitable initiative 
              dedicated to building places of worship that serve as beacons of faith, unity, and hope.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To create 1,000 mosques across the world that serve not only as places of worship 
                    but as community centers that foster education, compassion, and social support for 
                    all who need it, regardless of their background.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To build sustainable, architecturally beautiful mosques in underserved communities 
                    worldwide, ensuring complete transparency in funding and construction, while creating 
                    lasting positive impact for generations to come.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Why We Started This Initiative</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In many parts of the world, communities lack access to places of worship where they can 
                gather, pray, and support one another. The 1000 Masjid Project was born from a vision 
                to address this need while creating lasting social impact.
              </p>
              <p>
                Founded by a group of dedicated philanthropists and Islamic scholars, our project 
                recognizes that a mosque is more than just a building—it's a center for community 
                development, education, and humanitarian support.
              </p>
              <p>
                We believe that by building these sacred spaces, we're not only serving the spiritual 
                needs of communities but also creating hubs for positive social change, educational 
                programs, and charitable activities that benefit everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "Serving communities with genuine care and dedication"
              },
              {
                icon: CheckCircle,
                title: "Transparency",
                description: "Complete openness in funding and project execution"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "Highest standards in construction and community service"
              },
              {
                icon: Eye,
                title: "Accountability",
                description: "Responsible stewardship of every donation we receive"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Transparency</h2>
            <p className="text-xl leading-relaxed opacity-90">
              Every donation is tracked, every project is documented, and every milestone is reported. 
              We maintain detailed financial records and construction progress updates, ensuring that 
              your contributions are used exactly as intended. Our upcoming 15-member Global Committee 
              will provide additional oversight and governance to maintain the highest standards of 
              accountability.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
