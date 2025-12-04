import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, LogOut, DollarSign, Users, Vote, Loader2, Save, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useDonationSettings } from "@/hooks/useDonationSettings";
import { useElections } from "@/hooks/useElections";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

const Admin = () => {
  const { user, isAdmin, signOut, loading } = useAuth();
  const { data: donationSettings, isLoading: loadingDonations } = useDonationSettings();
  const { data: elections, isLoading: loadingElections } = useElections();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Donation settings state
  const [totalRaised, setTotalRaised] = useState("");
  const [targetGoal, setTargetGoal] = useState("");
  const [totalDonors, setTotalDonors] = useState("");
  const [avgPerMosque, setAvgPerMosque] = useState("");
  const [savingDonations, setSavingDonations] = useState(false);

  // Elections state
  const [editingElection, setEditingElection] = useState<string | null>(null);
  const [electionEdits, setElectionEdits] = useState<Record<string, { candidate_name: string; votes: number; daily_increment: number }>>({});
  const [savingElection, setSavingElection] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/admin/auth");
    } else if (!loading && user && !isAdmin) {
      toast.error("You don't have admin access");
      navigate("/admin/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (donationSettings) {
      setTotalRaised(donationSettings.total_raised.toString());
      setTargetGoal(donationSettings.target_goal.toString());
      setTotalDonors(donationSettings.total_donors.toString());
      setAvgPerMosque(donationSettings.avg_per_mosque.toString());
    }
  }, [donationSettings]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/auth");
  };

  const saveDonationSettings = async () => {
    if (!donationSettings) return;

    setSavingDonations(true);
    const { error } = await supabase
      .from("donation_settings")
      .update({
        total_raised: parseInt(totalRaised),
        target_goal: parseInt(targetGoal),
        total_donors: parseInt(totalDonors),
        avg_per_mosque: parseInt(avgPerMosque),
        updated_at: new Date().toISOString(),
      })
      .eq("id", donationSettings.id);

    setSavingDonations(false);

    if (error) {
      toast.error("Failed to save donation settings");
    } else {
      toast.success("Donation settings saved");
      queryClient.invalidateQueries({ queryKey: ["donation-settings"] });
    }
  };

  const startEditingElection = (election: { id: string; candidate_name: string; votes: number; daily_increment: number }) => {
    setEditingElection(election.id);
    setElectionEdits({
      ...electionEdits,
      [election.id]: {
        candidate_name: election.candidate_name,
        votes: election.votes,
        daily_increment: election.daily_increment,
      },
    });
  };

  const saveElection = async (electionId: string) => {
    const edits = electionEdits[electionId];
    if (!edits) return;

    setSavingElection(true);
    const { error } = await supabase
      .from("elections")
      .update({
        candidate_name: edits.candidate_name,
        votes: edits.votes,
        base_votes: edits.votes,
        daily_increment: edits.daily_increment,
        updated_at: new Date().toISOString(),
      })
      .eq("id", electionId);

    setSavingElection(false);
    setEditingElection(null);

    if (error) {
      toast.error("Failed to save election");
    } else {
      toast.success("Election updated");
      queryClient.invalidateQueries({ queryKey: ["elections"] });
    }
  };

  const deleteElection = async (electionId: string) => {
    if (!confirm("Are you sure you want to delete this election?")) return;

    const { error } = await supabase
      .from("elections")
      .delete()
      .eq("id", electionId);

    if (error) {
      toast.error("Failed to delete election");
    } else {
      toast.success("Election deleted");
      queryClient.invalidateQueries({ queryKey: ["elections"] });
    }
  };

  if (loading || loadingDonations || loadingElections) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  const formatCurrency = (value: string) => {
    const num = parseInt(value) || 0;
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
              View Website
            </a>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="donations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="donations" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Donation Progress
            </TabsTrigger>
            <TabsTrigger value="elections" className="flex items-center gap-2">
              <Vote className="w-4 h-4" />
              Elections
            </TabsTrigger>
            <TabsTrigger value="donors" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Donations Log
            </TabsTrigger>
          </TabsList>

          {/* Donation Progress Tab */}
          <TabsContent value="donations">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Edit Donation Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="total-raised">Total Raised ($)</Label>
                      <Input
                        id="total-raised"
                        type="number"
                        value={totalRaised}
                        onChange={(e) => setTotalRaised(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground">
                        Display: {formatCurrency(totalRaised)}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="target-goal">Target Goal ($)</Label>
                      <Input
                        id="target-goal"
                        type="number"
                        value={targetGoal}
                        onChange={(e) => setTargetGoal(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground">
                        Display: {formatCurrency(targetGoal)}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="total-donors">Total Donors</Label>
                      <Input
                        id="total-donors"
                        type="number"
                        value={totalDonors}
                        onChange={(e) => setTotalDonors(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avg-mosque">Avg per Mosque ($)</Label>
                      <Input
                        id="avg-mosque"
                        type="number"
                        value={avgPerMosque}
                        onChange={(e) => setAvgPerMosque(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      Progress: {((parseInt(totalRaised) / parseInt(targetGoal)) * 100).toFixed(1)}%
                    </p>
                    <Button onClick={saveDonationSettings} disabled={savingDonations}>
                      {savingDonations ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 w-4 h-4" />
                          Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Elections Tab */}
          <TabsContent value="elections">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Manage Elections</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Position</TableHead>
                        <TableHead>Candidate</TableHead>
                        <TableHead>Votes</TableHead>
                        <TableHead>Daily Increment</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {elections?.map((election) => (
                        <TableRow key={election.id}>
                          <TableCell className="font-medium">{election.position}</TableCell>
                          <TableCell>
                            {editingElection === election.id ? (
                              <Input
                                value={electionEdits[election.id]?.candidate_name || ""}
                                onChange={(e) =>
                                  setElectionEdits({
                                    ...electionEdits,
                                    [election.id]: {
                                      ...electionEdits[election.id],
                                      candidate_name: e.target.value,
                                    },
                                  })
                                }
                                className="w-48"
                              />
                            ) : (
                              election.candidate_name
                            )}
                          </TableCell>
                          <TableCell>
                            {editingElection === election.id ? (
                              <Input
                                type="number"
                                value={electionEdits[election.id]?.votes || 0}
                                onChange={(e) =>
                                  setElectionEdits({
                                    ...electionEdits,
                                    [election.id]: {
                                      ...electionEdits[election.id],
                                      votes: parseInt(e.target.value) || 0,
                                    },
                                  })
                                }
                                className="w-24"
                              />
                            ) : (
                              election.votes.toLocaleString()
                            )}
                          </TableCell>
                          <TableCell>
                            {editingElection === election.id ? (
                              <Input
                                type="number"
                                value={electionEdits[election.id]?.daily_increment || 0}
                                onChange={(e) =>
                                  setElectionEdits({
                                    ...electionEdits,
                                    [election.id]: {
                                      ...electionEdits[election.id],
                                      daily_increment: parseInt(e.target.value) || 0,
                                    },
                                  })
                                }
                                className="w-20"
                              />
                            ) : (
                              `+${election.daily_increment}/day`
                            )}
                          </TableCell>
                          <TableCell>
                            {editingElection === election.id ? (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => saveElection(election.id)}
                                  disabled={savingElection}
                                >
                                  {savingElection ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setEditingElection(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => startEditingElection(election)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteElection(election.id)}
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Donations Log Tab */}
          <TabsContent value="donors">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Donations Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    No donations recorded yet. Donations will appear here once processed through the payment gateway.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
