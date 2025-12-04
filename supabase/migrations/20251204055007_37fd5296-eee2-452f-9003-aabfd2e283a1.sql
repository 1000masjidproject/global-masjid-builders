-- Create enum for admin roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator');

-- Create user roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create donation settings table
CREATE TABLE public.donation_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    total_raised BIGINT NOT NULL DEFAULT 247546755,
    target_goal BIGINT NOT NULL DEFAULT 500000000,
    total_donors INTEGER NOT NULL DEFAULT 142847,
    avg_per_mosque INTEGER NOT NULL DEFAULT 405000,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create elections table
CREATE TABLE public.elections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    position TEXT NOT NULL,
    candidate_name TEXT NOT NULL,
    votes INTEGER NOT NULL DEFAULT 0,
    base_votes INTEGER NOT NULL DEFAULT 0,
    daily_increment INTEGER NOT NULL DEFAULT 10,
    start_date DATE NOT NULL DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create donations log table
CREATE TABLE public.donations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    donor_name TEXT,
    email TEXT,
    amount DECIMAL(12,2) NOT NULL,
    country TEXT,
    frequency TEXT DEFAULT 'one-time',
    purpose TEXT DEFAULT 'general',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donation_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.elections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- RLS policies for user_roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for donation_settings (public read, admin write)
CREATE POLICY "Anyone can view donation settings"
ON public.donation_settings FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can update donation settings"
ON public.donation_settings FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert donation settings"
ON public.donation_settings FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- RLS policies for elections (public read, admin write)
CREATE POLICY "Anyone can view elections"
ON public.elections FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Admins can manage elections"
ON public.elections FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for donations (admin only)
CREATE POLICY "Admins can view donations"
ON public.donations FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage donations"
ON public.donations FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Insert default donation settings
INSERT INTO public.donation_settings (total_raised, target_goal, total_donors, avg_per_mosque)
VALUES (247546755, 500000000, 142847, 405000);

-- Insert default elections data
INSERT INTO public.elections (position, candidate_name, votes, base_votes, daily_increment, start_date) VALUES
('Chairperson', 'Dr. Ahmad Hassan', 1247, 1200, 15, '2024-10-01'),
('Vice Chairperson', 'Fatima Al-Rashid', 982, 950, 12, '2024-10-01'),
('Treasurer', 'Mohamed Ibrahim', 876, 850, 10, '2024-10-01'),
('Secretary', 'Aisha Bello', 754, 720, 11, '2024-10-01'),
('East Africa Rep', 'Abdilkadir Hussein Malin', 756, 720, 20, '2024-10-01'),
('North Africa Rep', 'Omar El-Fassi', 643, 620, 8, '2024-10-01'),
('South Asia Rep', 'Dr. Zahid Khan', 589, 560, 9, '2024-10-01'),
('Southeast Asia Rep', 'Rizal Mahmud', 512, 490, 7, '2024-10-01');