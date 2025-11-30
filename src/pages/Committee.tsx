import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Users, Shield, Award, Globe, CheckCircle, Vote } from "lucide-react";
import { toast } from "sonner";

const Committee = () => {
  const [votes, setVotes] = useState<Record<string, string>>({});

  const handleVoteChange = (position: string, nominee: string) => {
    setVotes(prev => ({ ...prev, [position]: nominee }));
  };

  const handleSubmitVotes = () => {
    const voteCount = Object.keys(votes).length;
    if (voteCount === 0) {
      toast.error("Please select at least one candidate to vote for");
      return;
    }
    toast.success(`Your votes have been recorded! You voted for ${voteCount} position(s).`);
    console.log("Votes submitted:", votes);
  };

  const leadershipPositions = [
    {
      position: "Chairperson",
      nominees: ["Dr. Ahmed Hassan", "Dr. Layla Mohamed", "Dr. Tariq Rahman"]
    },
    {
      position: "Vice Chairperson",
      nominees: ["Fatima Al-Zahra", "Omar Abdullah", "Safiya Abbas"]
    },
    {
      position: "Secretary",
      nominees: ["Ibrahim Yusuf", "Hassan Ibrahim", "Yousef Malik"]
    },
    {
      position: "Treasurer",
      nominees: ["Zainab Hussain", "Aisha Rahman", "Maryam Khalil"]
    }
  ];

  const generalMembers = [
    { name: "Dr. Karim Saeed", region: "Central Asia", expertise: "Organizational Management" },
    { name: "Abdullah Khan", region: "South America", expertise: "Community Outreach" },
    { name: "Khadija Ahmed", region: "East Africa", expertise: "Healthcare Initiatives" }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Global Committee</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A dedicated group of 15 leaders from around the world, guiding our mission 
              with wisdom, integrity, and commitment to our global community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="about" className="text-lg">About Committee</TabsTrigger>
              <TabsTrigger value="elections" className="text-lg">Elections</TabsTrigger>
            </TabsList>

            {/* About Committee Tab */}
            <TabsContent value="about" className="space-y-20">
              {/* Committee Overview */}
              <div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              {/* Committee Structure */}
              <div className="bg-muted -mx-4 px-4 py-20 md:-mx-8 md:px-8">
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

              {/* Election Process */}
              <div>
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

              {/* Nominated Members */}
              <div className="bg-muted -mx-4 px-4 py-20 md:-mx-8 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-6xl mx-auto"
                >
                  <h2 className="text-4xl font-bold mb-8 text-center">Nominated Committee Members</h2>
                  <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                    These distinguished individuals have been nominated for the Global Committee based on their 
                    exceptional leadership, dedication to humanitarian work, and commitment to Islamic values.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Dr. Ahmed Hassan", region: "Middle East & North Africa", expertise: "Islamic Finance & Development" },
                      { name: "Fatima Al-Zahra", region: "Southeast Asia", expertise: "Community Development" },
                      { name: "Ibrahim Yusuf", region: "East Africa", expertise: "Construction & Engineering" },
                      { name: "Aisha Rahman", region: "South Asia", expertise: "Strategic Planning" },
                      { name: "Omar Abdullah", region: "Europe", expertise: "International Relations" },
                      { name: "Maryam Khalil", region: "West Africa", expertise: "Social Impact Assessment" },
                      { name: "Dr. Karim Saeed", region: "Central Asia", expertise: "Organizational Management" },
                      { name: "Zainab Hussain", region: "North America", expertise: "Finance & Audit" },
                      { name: "Abdullah Khan", region: "South America", expertise: "Community Outreach" },
                      { name: "Dr. Layla Mohamed", region: "Middle East & North Africa", expertise: "Educational Programs" },
                      { name: "Hassan Ibrahim", region: "Southeast Asia", expertise: "Technology & Innovation" },
                      { name: "Khadija Ahmed", region: "East Africa", expertise: "Healthcare Initiatives" },
                      { name: "Yousef Malik", region: "South Asia", expertise: "Youth Engagement" },
                      { name: "Safiya Abbas", region: "Europe", expertise: "Public Relations" },
                      { name: "Dr. Tariq Rahman", region: "West Africa", expertise: "Sustainability & Environment" },
                    ].map((member, index) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                      >
                        <Card className="h-full hover:shadow-card-hover transition-shadow">
                          <CardContent className="p-6">
                            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <p><strong className="text-foreground">Region:</strong> {member.region}</p>
                              <p><strong className="text-foreground">Expertise:</strong> {member.expertise}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Election Panel */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-5xl mx-auto"
                >
                  <h2 className="text-4xl font-bold mb-8 text-center">Independent Election Panel</h2>
                  <p className="text-lg text-muted-foreground text-center mb-12">
                    Our independent election panel ensures a fair, transparent, and democratic election process. 
                    Each panel member brings expertise in governance, electoral oversight, and Islamic jurisprudence.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { 
                        name: "Dr. Mahmoud Al-Azhari", 
                        role: "Panel Chair", 
                        credentials: "Former Electoral Commissioner, 25+ years in governance",
                        description: "Oversees the entire election process and ensures compliance with established protocols."
                      },
                      { 
                        name: "Justice Amina Farooq", 
                        role: "Legal Advisor", 
                        credentials: "Retired Supreme Court Judge, Islamic Law Scholar",
                        description: "Provides legal guidance and ensures elections meet both civil and Islamic legal standards."
                      },
                      { 
                        name: "Prof. Rashid Al-Hashimi", 
                        role: "Transparency Officer", 
                        credentials: "International Democracy Expert, UN Election Observer",
                        description: "Monitors voting procedures and validates the integrity of the electoral process."
                      },
                      { 
                        name: "Dr. Safiya Qureshi", 
                        role: "Community Representative", 
                        credentials: "Civil Society Leader, Community Development Expert",
                        description: "Ensures community voices are heard and represented throughout the election."
                      },
                      { 
                        name: "Sheikh Abdullah Al-Mansoori", 
                        role: "Islamic Advisory", 
                        credentials: "Senior Scholar, Islamic Jurisprudence Specialist",
                        description: "Advises on Islamic principles and ensures elections align with Sharia guidelines."
                      },
                    ].map((panelist, index) => (
                      <motion.div
                        key={panelist.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-card-hover transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-semibold mb-1">{panelist.name}</h3>
                                <p className="text-primary font-medium">{panelist.role}</p>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Vote className="w-5 h-5 text-primary" />
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 italic">{panelist.credentials}</p>
                            <p className="text-sm text-muted-foreground">{panelist.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            {/* Elections Tab */}
            <TabsContent value="elections">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-4xl font-bold mb-6 text-center">Cast Your Votes</h2>
                  <p className="text-lg text-muted-foreground text-center mb-12">
                    Vote for the leaders who will guide the 1000 Masjid Project. Select one candidate for each leadership position.
                  </p>

                  {/* Leadership Positions */}
                  <div className="space-y-8 mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Leadership Positions</h3>
                    {leadershipPositions.map((item, index) => (
                      <motion.div
                        key={item.position}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                              <Vote className="w-5 h-5 text-primary" />
                              {item.position}
                            </h4>
                            <RadioGroup
                              value={votes[item.position] || ""}
                              onValueChange={(value) => handleVoteChange(item.position, value)}
                            >
                              {item.nominees.map((nominee) => (
                                <div key={nominee} className="flex items-center space-x-3 py-3 px-4 rounded-lg hover:bg-muted/50 transition-colors">
                                  <RadioGroupItem value={nominee} id={`${item.position}-${nominee}`} />
                                  <Label 
                                    htmlFor={`${item.position}-${nominee}`}
                                    className="flex-1 cursor-pointer text-base"
                                  >
                                    {nominee}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* General Committee Members */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                  >
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          General Committee Members
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          The following nominees will serve as general committee members based on their expertise and regional representation.
                        </p>
                        <div className="grid grid-cols-1 gap-4">
                          {generalMembers.map((member) => (
                            <Card key={member.name} className="bg-muted/50">
                              <CardContent className="p-4">
                                <h5 className="font-semibold mb-2">{member.name}</h5>
                                <div className="space-y-1 text-sm text-muted-foreground">
                                  <p><strong className="text-foreground">Region:</strong> {member.region}</p>
                                  <p><strong className="text-foreground">Expertise:</strong> {member.expertise}</p>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Submit Button */}
                  <div className="flex justify-center mb-12">
                    <Button 
                      size="lg" 
                      className="px-12"
                      onClick={handleSubmitVotes}
                    >
                      Submit Your Votes
                    </Button>
                  </div>

                  {/* Election Info */}
                  <Card className="bg-muted/50">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">Election Information</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>All registered donors and community partners are eligible to vote</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>You can vote for one candidate per leadership position</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Your votes are securely recorded and counted by the independent election panel</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Results will be announced after the voting period ends</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
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
