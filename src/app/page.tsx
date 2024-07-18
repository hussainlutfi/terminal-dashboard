"use client";
import { Tajawal } from "next/font/google";
import { useEffect } from "react";
import { isLogin } from "./auth";
import { useRouter } from "next/navigation";
import MainSquares from "@/components/main-squares";
import QuestionSquare from "@/components/question-input";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    if (!(await isLogin())) {
      router.push("/login");
    }
  }

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] ">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <MainSquares />
          <QuestionSquare />
        </div>
      </div>
    </main>
  );
}
