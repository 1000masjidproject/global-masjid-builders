import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface DonationSettings {
  id: string;
  total_raised: number;
  target_goal: number;
  total_donors: number;
  avg_per_mosque: number;
  updated_at: string;
}

export const useDonationSettings = () => {
  return useQuery({
    queryKey: ["donation-settings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("donation_settings")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      return data as DonationSettings | null;
    },
  });
};
