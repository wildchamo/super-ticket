import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const getSupabaseReqResClient = ({ request }) => {
  let response = {
    value: NextResponse.next({ request: request }),
  };

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value, options);
        });
        response.value = NextResponse.next({ request });

        cookiesToSet.forEach(({ name, value, options }) => {
          response.value.cookies.set(name, value, options);
        });
      },
    },
  });

  return {
    supabase,
    response,
  };
};
