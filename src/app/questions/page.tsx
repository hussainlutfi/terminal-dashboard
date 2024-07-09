"use client";
import QuestionTable from "@/components/table";
import { Tajawal } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLogin, Logout } from "../auth";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  });

  async function checkAuth() {
    if (!(await isLogin())) {
      router.push("/");
    }
  }

  async function handelLogout() {
    if (await Logout()) {
      router.push("/");
    }
  }

  return (
    <main
      dir="rtl"
      className={`flex min-h-screen min-w-full ${tajawal.className} font-sans`}
    >
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] ">
        <div className="flex flex-col items-start justify-center pt-16 sm:pt-16">
          <button
            onClick={() => {
              handelLogout();
            }}
            className="bg-slate-800 p-2 text-xs mr-3 font-bold rounded-2xl hover:bg-opacity-70 sm:text-base sm:p-4"
          >
            تسجيل خروج
          </button>
          <QuestionTable />
        </div>
      </div>
    </main>
  );
}
