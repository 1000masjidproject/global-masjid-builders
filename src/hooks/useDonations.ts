import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Donation {
  id: string;
  amount: number;
  donor_name: string | null;
  email: string | null;
  country: string | null;
  frequency: string | null;
  purpose: string | null;
  created_at: string;
}

export const useDonations = (enabled: boolean = true) => {
  return useQuery({
    queryKey: ["donations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Donation[];
    },
    enabled,
  });
};
