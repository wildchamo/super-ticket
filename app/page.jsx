"use client";
import { createSupabaseBrowserClient } from "@/supabase-utils/browser-client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    supabase.storage.listBuckets().then((response) => {
      console.log(response);
    });
  });
  return <section>hola Jose! te quiero mucho! 🥳</section>;
}
