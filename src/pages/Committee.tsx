import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Award, Globe, CheckCircle, Vote } from "lucide-react";

const Committee = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Committee</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A dedicated group of 15 leaders from around the world, guiding our mission 
              with wisdom, integrity, and commitment to our global community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">About the Committee</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The 15-member Global Committee serves as the governing body of the 1000 Masjid Project, 
              ensuring that our mission remains true to our values of transparency, compassion, and 
              excellence. Committee members are elected representatives from diverse regions and backgrounds, 
              bringing unique perspectives and expertise to guide our global initiative.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Elections for the Global Committee are held every three years, allowing our community 
              to participate in selecting leaders who best represent their values and vision for the project.
            </p>
          </motion.div>

          {/* Committee Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Users,
                title: "Community Representation",
                description: "Committee members represent diverse global communities, ensuring all voices are heard in decision-making."
              },
              {
                icon: Shield,
                title: "Oversight & Governance",
                description: "Providing rigorous oversight of all projects, finances, and operational decisions to maintain accountability."
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description: "Ensuring every mosque meets our high standards for construction quality, sustainability, and community impact."
              },
              {
                icon: Globe,
                title: "Strategic Planning",
                description: "Guiding the selection of new project locations and expansion into underserved regions worldwide."
              },
              {
                icon: CheckCircle,
                title: "Transparency",
                description: "Maintaining open communication with donors and communities through regular reports and updates."
              },
              {
                icon: Vote,
                title: "Democratic Process",
                description: "Elected through a fair, democratic process that reflects the will of our global community of supporters."
              }
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <role.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                    <p className="text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Committee Structure */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Committee Structure</h2>
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Leadership Positions</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Chairperson:</strong> Leads committee meetings and represents the project at major events</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Vice Chairperson:</strong> Supports the Chairperson and oversees special initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Secretary:</strong> Maintains records and coordinates communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Treasurer:</strong> Oversees financial operations and transparency</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Sub-Committees</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Construction & Engineering:</strong> Reviews architectural plans and construction quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Finance & Audit:</strong> Ensures financial transparency and proper fund allocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Community Outreach:</strong> Engages with local communities and coordinates support programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">•</span>
                      <span><strong className="text-foreground">Strategic Planning:</strong> Identifies new project locations and expansion opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Election Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Election Process</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Nomination Phase</h3>
                    <p className="text-muted-foreground">
                      Community members and organizations can nominate candidates who demonstrate strong 
                      leadership, commitment to Islamic values, and dedication to humanitarian work. 
                      Nominees must meet specific criteria including experience in community service, 
                      organizational management, or relevant professional expertise.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Voting Phase</h3>
                    <p className="text-muted-foreground">
                      All registered donors and community partners are eligible to vote. The election 
                      process is conducted transparently, with independent oversight to ensure fairness. 
                      Candidates with the highest votes across different regions are elected to represent 
                      their communities on the Global Committee.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Term Length</h3>
                    <p className="text-muted-foreground">
                      Committee members serve three-year terms and may be re-elected for additional terms. 
                      This ensures both continuity in leadership and fresh perspectives from new members.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Get Involved in Governance</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Interested in nominating a candidate or learning more about the election process? 
              Stay informed about upcoming elections and opportunities to participate in shaping 
              the future of the 1000 Masjid Project.
            </p>
            <p className="text-lg opacity-80">
              For more information about committee elections and governance, please contact us.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Committee;
