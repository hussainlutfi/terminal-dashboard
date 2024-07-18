"use client";
import { Tajawal } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isLogin, Logout } from "../auth";
import QATable from "@/components/QATables";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function BeforeQA() {
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
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020]  ">
        <div className="flex flex-col items-start justify-center pt-16 sm:pt-16">
          <QATable type={"qa-before"} />
        </div>
      </div>
    </main>
  );
}
