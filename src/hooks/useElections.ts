import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Election {
  id: string;
  position: string;
  candidate_name: string;
  votes: number;
  base_votes: number;
  daily_increment: number;
  start_date: string;
  created_at: string;
  updated_at: string;
}

export const useElections = () => {
  return useQuery({
    queryKey: ["elections"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("elections")
        .select("*")
        .order("position");

      if (error) throw error;
      return data as Election[];
    },
  });
};

export const calculateCurrentVotes = (election: Election): number => {
  const startDate = new Date(election.start_date);
  const today = new Date();
  const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  return election.base_votes + (daysPassed * election.daily_increment);
};
