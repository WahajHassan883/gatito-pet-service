import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nxkvmubdgwackcvoyrcd.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54a3ZtdWJkZ3dhY2tjdm95cmNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NzE1MjgsImV4cCI6MjA2NDQ0NzUyOH0.9dvj1RCEE9Ii4vHFZqcBShAuudrMnXJahPn0PgaWS5M';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;