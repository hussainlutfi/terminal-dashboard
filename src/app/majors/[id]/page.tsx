"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../../utils/supabase/client";
import { QAInput, Question } from "../../../../interfaces/question";
import { Tajawal } from "next/font/google";
import { options } from "../../../../data/options";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { QAIEmail } from "../../../../interfaces/form";

const tajawal = Tajawal({
  subsets: ["latin"],
  variable: "--font-tajawal",
  weight: "400",
});

export default function AddPage({ params }: { params: { id: string } }) {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const supabase = createClient();

  useEffect(() => {
    generateQuestion();
  }, []);

  async function generateQuestion() {
    const { data, error } = await supabase
      .from("question-major-input")
      .select("*")
      .eq("id", params.id);

    if (error) {
      throw new Error("No questionInput");
    }
    setQuestion(data[0].question);
    setEmail(data[0].email);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here

    const { data, error } = await supabase
      .from("question-major-input")
      .update({ answer })
      .eq("id", params.id)
      .select();

    if (error) {
      throw new Error("Not Inserted");
    } else {
      await removeQuestion();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "تم الاجابة!",
        showConfirmButton: false,
        timer: 1500,
      });
      sendEmail();
    }
  };

  async function removeQuestion() {
    const { error } = await supabase
      .from("question-input")
      .delete()
      .eq("id", params.id);
    if (error) {
      throw new Error("Not Deleted");
    } else {
      router.back();
    }
  }
  const sendEmail = async () => {
    const data: QAIEmail = { answer, question, email };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        // Handle the error response
        const errorData = await response.json();
        console.error("Error:", errorData);
        // You can also display an error message to the user here
      } else {
        // Handle the success response
        const responseData = await response.json();
        console.log("Success:", responseData);
        // You can also display a success message to the user here
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // Handle the fetch error here, e.g., display an error message to the user
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
