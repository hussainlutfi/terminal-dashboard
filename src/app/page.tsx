"use client";
import { Tajawal } from "next/font/google";
import { useEffect, useState } from "react";
import { isLogin } from "./auth";
import { useRouter } from "next/navigation";
import MainSquares from "@/components/main-squares";
import QuestionSquare from "@/components/question-input";
import { Session } from "@supabase/supabase-js";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  const [session, setSession] = useState<Session | null>(null); // Initialize to null
  const [role, setRole] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    getSession();
  }, []);

  useEffect(() => {
    if (session) {
      checkAuth();
    }
  }, [session]);

  async function getSession() {
    const currentSession = await isLogin();
    setSession(currentSession);
  }

  function checkAuth() {
    if (!session) {
      router.push("/login");
    } else {
      const userRole = session.user.role;
      setRole(userRole);
    }
  }

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] ">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          {role === "authenticated" && (
            <>
              <MainSquares />
              <QuestionSquare />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
