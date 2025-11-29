import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Handshake, Mail, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Become a Donor",
      description: "Support our mission through one-time or monthly donations that fund mosque construction worldwide.",
      action: "Donate Now",
      link: "/donate"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our global network of volunteers helping with community outreach, events, and project support.",
      action: "Sign Up to Volunteer",
      link: "/contact"
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Partner with us as an organization, business, or community group to amplify our impact.",
      action: "Explore Partnerships",
      link: "/contact"
    },
    {
      icon: Building2,
      title: "Sponsor a Mosque",
      description: "Sponsor the construction of an entire mosque or specific components like prayer halls or minarets.",
      action: "Learn More",
      link: "/contact"
    },
    {
      icon: GraduationCap,
      title: "Educational Programs",
      description: "Support or participate in educational initiatives at our mosque centers including classes and workshops.",
      action: "Get Details",
      link: "/contact"
    },
    {
      icon: Mail,
      title: "Stay Updated",
      description: "Subscribe to our newsletter for updates on new projects, success stories, and opportunities to help.",
      action: "Subscribe",
      link: "/contact"
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our global community of supporters, volunteers, and partners working together 
              to build places of worship and strengthen communities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <opportunity.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{opportunity.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{opportunity.description}</p>
                    <Link to={opportunity.link}>
                      <Button className="w-full" variant="outline">
                        {opportunity.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Sponsorships */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Community Sponsorships</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Community sponsorships offer a unique opportunity for groups, families, or organizations 
                  to collectively support a mosque project. By pooling resources, communities can sponsor 
                  entire projects or significant components while building bonds of unity and shared purpose.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold mb-2">Full Mosque Sponsorship</h3>
                    <p className="text-sm text-muted-foreground">
                      Sponsor the construction of an entire mosque, with your community's name honored 
                      at the location and in our records.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold mb-2">Component Sponsorship</h3>
                    <p className="text-sm text-muted-foreground">
                      Sponsor specific parts like prayer halls, ablution areas, minarets, or community centers.
                    </p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold mb-2">Matching Programs</h3>
                    <p className="text-sm text-muted-foreground">
                      Organizations can match employee or member donations, doubling the impact of contributions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Why Volunteer With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Make a Lasting Impact</h3>
                  <p className="text-muted-foreground">
                    Your time and skills contribute to projects that serve communities for generations, 
                    creating lasting positive change.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Global Network</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals from around the world who share your 
                    commitment to humanitarian work.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                  <p className="text-muted-foreground">
                    Gain valuable experience in project management, community outreach, 
                    fundraising, and more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Flexible Opportunities</h3>
                  <p className="text-muted-foreground">
                    Choose from remote or in-person volunteer roles that fit your schedule 
                    and expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Whether you contribute time, resources, or expertise, your involvement helps us 
              build a better future for communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20">
                  Make a Donation
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

export default GetInvolved;
