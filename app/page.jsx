"use client";
import { createSupabaseClient } from "@/supabase-utils/client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const supabase = createSupabaseClient();
    supabase.storage.listBuckets().then((response) => {
      console.log(response);
    });
  });
  return <section>hola Jose! te quiero mucho! 🥳</section>;
}
