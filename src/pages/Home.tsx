import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Users, Heart, Building2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import heroMosque from "@/assets/hero-mosque.jpg";
import mosque1 from "@/assets/mosque-1.jpg";
import mosqueConstruction from "@/assets/mosque-construction.jpg";
import globalUnity from "@/assets/global-unity.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroMosque})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-secondary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              1000 Masjid Global
              <br />
              <span className="text-accent">Construction Project</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              A worldwide initiative building places of worship, hope, and community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Donate Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-secondary-foreground/10 border-secondary-foreground/30 hover:bg-secondary-foreground/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCounter end={247} label="Masjids Completed" />
            <StatsCounter end={58} label="Countries Reached" />
            <StatsCounter end={15420} label="Donors & Partners" suffix="+" />
            <StatsCounter end={153} label="Ongoing Projects" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The 1000 Masjid Global Construction Project is dedicated to building places of worship 
              that serve as centers of faith, community, and hope. We believe in creating spaces where 
              people can gather, pray, and support one another, fostering unity across the globe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Quality Construction</h3>
                  <p className="text-muted-foreground">
                    Building durable, beautiful mosques with attention to Islamic architecture 
                    and modern sustainability practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                  <p className="text-muted-foreground">
                    Creating spaces that strengthen communities, provide education, 
                    and support those in need.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                  <p className="text-muted-foreground">
                    Complete accountability in funding and construction progress, 
                    ensuring your contributions make a real impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Projects Showcase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Completions</h2>
            <p className="text-lg text-muted-foreground">
              See the mosques we've built and the communities we've served
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <img src={mosque1} alt="Completed Mosque" className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Al-Rahman Mosque</h3>
                  <p className="text-muted-foreground text-sm">
                    Completed in 2024, serving a community of 2,000+ worshippers
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <img src={mosqueConstruction} alt="Mosque Under Construction" className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Al-Noor Mosque</h3>
                  <p className="text-muted-foreground text-sm">
                    85% complete - Expected completion Q2 2025
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <img src={globalUnity} alt="Community Gathering" className="w-full h-64 object-cover" />
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Sarajevo, Bosnia</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Unity Mosque</h3>
                  <p className="text-muted-foreground text-sm">
                    Completed in 2023, a symbol of peace and reconciliation
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/progress">
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Election Announcement */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-background/95 backdrop-blur rounded-2xl p-8 md:p-12 shadow-2xl border border-accent/20">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-semibold text-accent-foreground mb-4">
                  🗳️ ELECTIONS NOW OPEN
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Shape the Future of Our Global Community
                </h2>
                <p className="text-xl text-muted-foreground">
                  Vote for the 15-member Global Committee that will lead 1000 Masjid Global
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Committee Positions</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">58</div>
                  <div className="text-sm text-muted-foreground">Countries Participating</div>
                </div>
                <div className="text-center p-6 bg-muted rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">Live</div>
                  <div className="text-sm text-muted-foreground">Voting Status</div>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🕌</span>
                  Why Your Vote Matters
                </h3>
                <p className="text-muted-foreground mb-4">
                  The elected committee will oversee the allocation of $500M in funding, guide construction 
                  projects across continents, and ensure transparency in every step of our mission to build 
                  1000 mosques worldwide.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Direct impact on project selection and fund distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Ensure regional representation and cultural sensitivity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Uphold Islamic principles of consultation (Shura) and accountability</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link to="/committee">
                  <Button size="lg" className="bg-hero-gradient hover:opacity-90 transition-opacity text-lg px-8">
                    View Candidates & Cast Your Vote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  Elections are transparent • Live vote counts • Your voice matters
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quran Verse */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl mb-6 opacity-50">❝</div>
            <p className="text-2xl md:text-3xl font-serif italic mb-6 leading-relaxed">
              "The example of those who spend their wealth in the way of Allah is like a seed of grain 
              which grows seven spikes; in each spike is a hundred grains."
            </p>
            <p className="text-lg opacity-90">— Quran 2:261</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of Something Greater
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Your contribution helps build lasting legacies of faith and community. 
              Join thousands of donors making a real difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Make a Donation
                  <Heart className="ml-2 w-5 h-5" fill="currentColor" />
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20">
                  Learn How to Help
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
