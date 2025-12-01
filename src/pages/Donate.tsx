import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Shield, Users, CheckCircle } from "lucide-react";

const Donate = () => {
  const [amount, setAmount] = useState("100");
  const [frequency, setFrequency] = useState("one-time");

  const presetAmounts = ["50", "100", "250", "500", "1000"];

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
                  <h2 className="text-3xl font-bold mb-6">Choose Your Contribution</h2>
                  
                  {/* Frequency Selection */}
                  <div className="mb-6">
                    <Label className="text-base font-semibold mb-3 block">Donation Type</Label>
                    <RadioGroup value={frequency} onValueChange={setFrequency}>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${frequency === 'one-time' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                          <RadioGroupItem value="one-time" id="one-time" />
                          <span className="font-medium">One-Time</span>
                        </label>
                        <label className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors ${frequency === 'monthly' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                          <RadioGroupItem value="monthly" id="monthly" />
                          <span className="font-medium">Monthly</span>
                        </label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <Label className="text-base font-semibold mb-3 block">Select Amount</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset}
                          type="button"
                          variant={amount === preset ? "default" : "outline"}
                          onClick={() => setAmount(preset)}
                          className={amount === preset ? "bg-primary" : ""}
                        >
                          ${preset}
                        </Button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="custom-amount" className="text-sm mb-2 block">Custom Amount</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="pl-7"
                          min="1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donation Options */}
                  <div className="mb-8">
                    <Label className="text-base font-semibold mb-3 block">Donation Purpose (Optional)</Label>
                    <RadioGroup defaultValue="general">
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="general" id="general" />
                        <span>General Fund - Where Most Needed</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="waqf" id="waqf" />
                        <span>Waqf (Endowment)</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="sadaqah" id="sadaqah" />
                        <span>Sadaqah Jariyah</span>
                      </label>
                    </RadioGroup>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-8">
                    <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                    <RadioGroup defaultValue="card">
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="card" id="card" />
                        <span>💳 Card Payment (Visa, Mastercard, Amex)</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <span>📱 Mobile Money (M-Pesa, Ecocash, MTN)</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="bank" id="bank" />
                        <span>🏦 Bank Transfer (Wire/ACH)</span>
                      </label>
                      <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="crypto" id="crypto" />
                        <span>₿ Cryptocurrency (Bitcoin BTC)</span>
                      </label>
                    </RadioGroup>
                  </div>

                  <Button className="w-full bg-hero-gradient hover:opacity-90 transition-opacity" size="lg">
                    <Heart className="mr-2 w-5 h-5" fill="currentColor" />
                    Donate ${amount} {frequency === 'monthly' ? '/month' : ''}
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Secure payment processing • 100% of your donation goes to the project
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
