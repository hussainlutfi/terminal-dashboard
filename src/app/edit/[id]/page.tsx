"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../../utils/supabase/client";
import { Question } from "../../../../interfaces/question";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function EditPage({ params }: { params: { id: string } }) {
  const [question, setQuestion] = useState<string>();
  const [answer, setAnswer] = useState<string>();

  const supabase = createClient();

  useEffect(() => {
    generateQuestion();
  }, []);

  async function generateQuestion() {
    const { data, error } = await supabase
      .from("question-input")
      .select("*")
      .eq("id", params.id);

    if (error) {
      throw new Error("No questionInput");
    }
    setQuestion(data[0].question);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ question, answer });
  };

  return (
    <div
      dir="rtl"
      className={`min-h-screen flex items-center justify-center  bg-gray-800 ${tajawal.className} font-sans`}
    >
      <form
        className="bg-gray-900 p-8 rounded-lg w-10/12 "
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
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="answer">
            الإجابة
          </label>
          <textarea
            id="answer"
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={4} // Adjust the number of rows as needed
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white font-bold rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
