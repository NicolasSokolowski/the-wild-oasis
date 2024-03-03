import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://cowarsufyzpgusddmzhq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvd2Fyc3VmeXpwZ3VzZGRtemhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NjQ3NzEsImV4cCI6MjAyNTA0MDc3MX0._KvI1URMTW8UMrJfSvYE_XyBE8w-xQR0LxEFKqg2B2Q"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;