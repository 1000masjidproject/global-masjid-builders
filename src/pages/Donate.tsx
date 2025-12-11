import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Shield, Users, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Donate = () => {
  const [donorName, setDonorName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonate = async () => {
    if (!isAnonymous && !donorName.trim()) {
      toast.error("Please enter your name or choose to donate anonymously");
      return;
    }

    setIsProcessing(true);
    
    // Redirect to payment gateway
    setTimeout(() => {
      const name = isAnonymous ? "Anonymous" : donorName.trim();
      const paymentUrl = `https://paywith.nobuk.africa/3gmjqkjx7v?donor=${encodeURIComponent(name)}`;
      window.open(paymentUrl, '_blank');
      setIsProcessing(false);
      toast.success("Redirecting to secure payment gateway...");
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl leading-relaxed opacity-90">
              Your contribution helps build lasting places of worship and community centers 
              that serve generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
            <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Make Your Donation</h2>
                  
                  {/* Name Input */}
                  <div className="mb-6">
                    <Label className="text-base font-semibold mb-3 block">Your Name</Label>
                    <Input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder="Enter your name"
                      disabled={isAnonymous}
                      className={isAnonymous ? "opacity-50" : ""}
                    />
                  </div>

                  {/* Anonymous Option */}
                  <div className="mb-8">
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => {
                          setIsAnonymous(e.target.checked);
                          if (e.target.checked) setDonorName("");
                        }}
                        className="w-5 h-5 rounded border-primary text-primary focus:ring-primary"
                      />
                      <span className="font-medium">Donate Anonymously</span>
                    </label>
                  </div>

                  <Button 
                    onClick={handleDonate} 
                    disabled={isProcessing || (!isAnonymous && !donorName.trim())}
                    className="w-full bg-hero-gradient hover:opacity-90 transition-opacity" 
                    size="lg"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Redirecting to payment...
                      </>
                    ) : (
                      <>
                        <Heart className="mr-2 w-5 h-5" fill="currentColor" />
                        Proceed to Donate
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    🔒 Secure payment via Nobuk Africa • SSL encrypted • Your data is protected
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Information Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Donate?</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Your donation directly supports the construction of mosques that serve as centers 
                  of worship, education, and community support. Every contribution, no matter the size, 
                  makes a lasting impact.
                </p>
              </div>

              <Card className="border-primary/20">
                <CardContent className="p-6 space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: "100% Transparency",
                      description: "Every donation is tracked and accounted for with detailed reports"
                    },
                    {
                      icon: Users,
                      title: "Community Impact",
                      description: "Your contribution serves thousands of worshippers for generations"
                    },
                    {
                      icon: CheckCircle,
                      title: "Tax Deductible",
                      description: "Eligible for tax deduction in accordance with local regulations"
                    }
                  ].map((item) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">What Your Donation Provides</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>$50 - Helps purchase building materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>$100 - Contributes to skilled labor costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>$500 - Sponsors a section of the mosque</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>$1,000+ - Provides significant project funding</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <p className="text-lg font-serif italic">
                    "The example of those who spend their wealth in the way of Allah is like 
                    a seed of grain which grows seven spikes; in each spike is a hundred grains."
                  </p>
                  <p className="text-sm mt-3 opacity-90">— Quran 2:261</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
