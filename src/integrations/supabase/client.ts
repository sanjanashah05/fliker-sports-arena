// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://btbbytsvrapohfuwnuuk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0YmJ5dHN2cmFwb2hmdXdudXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNTI5MzksImV4cCI6MjA2MjcyODkzOX0.vQ3fIvkpL4Phxndh5c-dnQJc_HxN20eHa1QjKpmNjyc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);