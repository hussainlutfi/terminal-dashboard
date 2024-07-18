"use client";

import { useState } from "react";
// import { createClient } from "./../../../utils/supabase/client";
import { Tajawal } from "next/font/google";
import { Login } from "../auth";
import { LoginData } from "../../../interfaces/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function LoginPage() {
  const [passType, setpassType] = useState<string>("password");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  // const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    const data: LoginData = {
      email,
      password,
    };
    if (await Login(data)) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم التسجيل!",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center bg-gray-800 ${tajawal.className} font-sans p-4`}
    >
      <div className="bg-gray-900 p-3 rounded-lg h-[400px] content-evenly w-full max-w-md sm:p-8">
        <p className="text-3xl font-bold text-center text-white mb-6 sm:text-4xl">
          تسجيل الدخول
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-white font-bold mb-2 text-sm sm:text-base"
              htmlFor="email"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 bg-gray-800  text-white rounded-md"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex">
              <label
                className="block text-white font-bold mb-2 ml-1 text-sm sm:text-base"
                htmlFor="password"
              >
                الرمز السري
              </label>
              <label
                className="hover:opacity-70 text-sm sm:text-base"
                onClick={() => {
                  if (passType == "text") {
                    setpassType("password");
                  } else {
                    setpassType("text");
                  }
                }}
              >
                &#128584;
              </label>
            </div>
            <input
              type={`${passType}`}
              id="password"
              className="w-full p-2 bg-gray-800 text-white rounded-md"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-900 text-white font-bold rounded-2xl hover:bg-opacity-60"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
}
