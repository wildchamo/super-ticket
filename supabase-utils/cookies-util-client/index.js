import { createServerClient } from "@supabase/ssr";

import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const getSupabaseCookiesUtilCLient = () => {
  const cookiesStore = cookies();
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookiesStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookiesStore.set(name, value, options);
          });
        } catch (error) {
          console.log("failed to set cookies", error);
        }
      },
    },
  });
};
