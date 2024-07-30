"use client";

import { useRouter } from "next/navigation";

export default function QuestionSquare() {
  const router = useRouter();
  function onSubmit() {
    router.push("/add");
  }

  return (
    <div className="h-[150px] w-[90%] mt-5 sm:mt-[50px] sm:w-[350px] rounded-2xl bg-white bg-opacity-70 flex flex-col items-center justify-around p-3 mb-4 sm:mb-0">
      <div>
        <h1 className="text-black text-1xl sm:text-2xl font-bold leading-normal sm:leading-tight tracking-tight text-center">
          بتضيف سؤال جديد؟
        </h1>
      </div>

      <button
        className="bg-gradient-to-r from-[#901604e6] to-[#061f40c5] to-30% h-[40%] w-[90%] text-white rounded-3xl text-black text-1xl sm:text-2xl font-extrabold leading-normal sm:leading-tight tracking-tight text-center hover:bg-gray-200"
        onClick={onSubmit}
      >
        حياااك 🤩
      </button>
    </div>
  );
}
