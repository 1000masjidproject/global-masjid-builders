import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Vote, TrendingUp, ArrowLeft, Share2, DollarSign } from "lucide-react";
import { toast } from "sonner";

const calculateVotes = (baseVotes: number, dailyIncrease: number, candidateId: string) => {
  const storageKey = 'election_start_date';
  let startDate = localStorage.getItem(storageKey);
  
  if (!startDate) {
    startDate = new Date().toISOString();
    localStorage.setItem(storageKey, startDate);
  }
  
  const daysPassed = Math.floor((new Date().getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
  const additionalVotes = daysPassed * dailyIncrease;
  
  return baseVotes + additionalVotes;
};

const Treasurer = () => {
  const navigate = useNavigate();
  const [selectedVote, setSelectedVote] = useState("");
  const [voteCounts, setVoteCounts] = useState<Record<string, number>>({});

  const nominees = [
    { name: "Zainab Hussain", id: "treasurer-zainab", expertise: "Finance & Audit Management", bio: "Certified financial expert with extensive experience in nonprofit financial management and audit compliance.", baseVotes: 698, dailyIncrease: 16 },
    { name: "Aisha Rahman", id: "treasurer-aisha", expertise: "Strategic Financial Planning", bio: "Strategic planner focused on sustainable financial growth and transparent resource allocation for humanitarian projects.", baseVotes: 567, dailyIncrease: 13 },
    { name: "Maryam Khalil", id: "treasurer-maryam", expertise: "Budget Analysis & Controls", bio: "Budget specialist committed to rigorous financial controls and maximizing donor contributions' impact.", baseVotes: 501, dailyIncrease: 9 }
  ];

  useEffect(() => {
    const initialVoteCounts: Record<string, number> = {};
    nominees.forEach(nominee => {
      initialVoteCounts[nominee.id] = calculateVotes(nominee.baseVotes, nominee.dailyIncrease, nominee.id);
    });
    setVoteCounts(initialVoteCounts);

    const interval = setInterval(() => {
      setVoteCounts(prevCounts => {
        const updated = { ...prevCounts };
        nominees.forEach(nominee => {
          const newVotes = calculateVotes(nominee.baseVotes, nominee.dailyIncrease, nominee.id);
          updated[nominee.id] = Math.max(prevCounts[nominee.id] || 0, newVotes);
        });
        return updated;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmitVote = () => {
    if (!selectedVote) {
      toast.error("Please select a candidate to vote for");
      return;
    }
    
    setVoteCounts(prev => ({
      ...prev,
      [selectedVote]: (prev[selectedVote] || 0) + 1
    }));
    
    toast.success("Your vote has been recorded!");
    setSelectedVote("");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard! Share with others to vote.");
  };

  const maxVotes = Math.max(...Object.values(voteCounts));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate("/committee")}
              className="mb-6 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Committee
            </Button>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Treasurer Election</h1>
              <p className="text-xl leading-relaxed opacity-90">
                Vote for the Treasurer who will oversee financial operations and transparency
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Cast Your Vote</h2>
              <Button onClick={handleShare} variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <RadioGroup value={selectedVote} onValueChange={setSelectedVote}>
                  {nominees.map((nominee) => {
                    const voteCount = voteCounts[nominee.id] || 0;
                    const isLeading = voteCount === maxVotes && voteCount > 0;
                    
                    return (
                      <motion.div
                        key={nominee.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`mb-6 last:mb-0 p-6 rounded-lg border-2 transition-colors ${
                          isLeading ? 'border-primary/30 bg-primary/5' : 'border-border'
                        } ${selectedVote === nominee.id ? 'ring-2 ring-primary' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4 flex-1">
                            <RadioGroupItem value={nominee.id} id={nominee.id} className="mt-1" />
                            <div className="flex-1">
                              <Label htmlFor={nominee.id} className="cursor-pointer">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xl font-semibold">{nominee.name}</span>
                                  {isLeading && (
                                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                                      Leading
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-primary mb-2">{nominee.expertise}</p>
                                <p className="text-muted-foreground">{nominee.bio}</p>
                              </Label>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm ml-4">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-primary text-lg">{voteCount.toLocaleString()}</span>
                            <span className="text-muted-foreground">votes</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </RadioGroup>

                <Button 
                  onClick={handleSubmitVote}
                  className="w-full mt-8 bg-primary hover:bg-primary/90" 
                  size="lg"
                >
                  <Vote className="w-5 h-5 mr-2" />
                  Submit Vote
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">About the Treasurer Role</h3>
                <p className="text-muted-foreground mb-3">
                  The Treasurer oversees all financial operations of the organization, ensuring proper 
                  fund management, budget allocation, and financial transparency. This role is critical 
                  to maintaining donor trust and organizational sustainability.
                </p>
                <p className="text-muted-foreground">
                  The Treasurer works closely with auditors, prepares financial reports, and ensures 
                  compliance with all financial regulations and best practices in charitable giving.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treasurer;
