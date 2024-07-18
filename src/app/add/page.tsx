"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { QAInput, Question } from "../../../interfaces/question";
import { Tajawal } from "next/font/google";
import { options } from "../../../data/options";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function AddPage() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [radioSelection, setRadioSelection] = useState<string>("");
  const router = useRouter();

  const supabase = createClient();

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioSelection(e.target.value);
    setSelectedOption(""); // Reset the select element when radio button changes
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    const input: QAInput = {
      question,
      answer,
      type: selectedOption,
    };
    const table: string = radioSelection.includes("قبل")
      ? "qa-before"
      : "qa-after";
    const { data, error } = await supabase
      .from(`${table}`)
      .insert(input)
      .select();

    if (error) {
      throw new Error("Not Inserted");
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم الاضافة!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center bg-gray-800 ${tajawal.className} font-sans`}
    >
      <form
        className="bg-gray-900 p-8 rounded-lg w-10/12"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="question">
            السؤال
          </label>
          <input
            type="text"
            id="question"
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">الاختيار</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="before"
              name="timeframe"
              value="قبل"
              className="mr-2"
              onChange={handleRadioChange}
            />
            <label htmlFor="before" className="text-white pr-2">
              قبل
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="after"
              name="timeframe"
              value="بعد"
              className="mr-2"
              onChange={handleRadioChange}
            />
            <label htmlFor="after" className="text-white pr-2">
              بعد
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2">الفئة</label>
          <select
            className="w-full p-2 bg-gray-800 text-white rounded-md"
            required
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              اختر الفئة
            </option>
            {(radioSelection === "قبل"
              ? options.optionsBefore
              : options.optionsAfter
            ).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="answer">
            الإجابة
          </label>
          <textarea
            id="answer"
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={4} // Adjust the number of rows as needed
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-bold rounded-md"
        >
          أرسل
        </button>
      </form>
    </div>
  );
}
