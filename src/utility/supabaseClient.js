import { createClient } from "@refinedev/supabase";

const supabaseUrl = "https://rfebjhhghcfeywjeetqz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmZWJqaGhnaGNmZXl3amVldHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NTc3OTYsImV4cCI6MjAwNDIzMzc5Nn0.ARiq3Th05rJvH0ad-AchsJroe91_N0qGmpWvZhClc-Q";

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
