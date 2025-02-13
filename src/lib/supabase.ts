import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Provide fallback values for development or when env vars are missing
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzufwojpgyxicaypshtj.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dWZ3b2pwZ3l4aWNheXBzaHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODAxOTcsImV4cCI6MjA0OTY1NjE5N30.azYnTVbCUy2edOB8nt3NUuw-UF6CVgaYoidpPMFtiuE'

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Using fallback Supabase credentials. Please set up environment variables.')
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    }
  )
}