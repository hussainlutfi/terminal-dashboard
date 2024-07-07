"use client";
import { useEffect, useState } from "react";
import { Question } from "../../interfaces/question";
// import { useRouter } from "next/router";

const initialData: Question[] = [
  { id: 1, created_at: "2023-01-01", question: "What is your name?" },
  { id: 2, created_at: "2023-01-02", question: "How old are you?" },
  // Add more initial data as needed
];

export default function QuestionTable() {
  const [questions, setQuestions] = useState<Question[]>(initialData);
  //   const router = useRouter();

  useEffect(() => {});

  async function getQuestions() {
    
  }

  const handleDelete = (id: number) => {
    setQuestions(questions!.filter((q) => q.id !== id));
    // Here you can also add the functionality to remove it from the database
  };

  //   const handleRowClick = (id: number) => {
  //     router.push(`/edit/${id}`);
  //   };

  return (
    <div className="p-4 w-full">
      <table className="min-w-full table-auto bg-gray-800 rounded-md">
        <thead>
          <tr className="bg-gray-900 text-white rounded-lg">
            <th className="px-4 py-2 font-bold">ID</th>
            <th className="px-4 py-2 font-bold">Created_At</th>
            <th className="px-4 py-2 font-bold">Question</th>
            <th className="px-4 py-2 font-bold">Delete</th>
          </tr>
        </thead>
        <tbody>
          {questions!.map((question) => (
            <tr
              key={question.id}
              className="bg-gray-800 text-white hover:bg-white hover:bg-opacity-20 cursor-pointer"
              //   onClick={() => handleRowClick(question.id)}
            >
              <td className="border px-4 py-2">{question.id}</td>
              <td className="border px-4 py-2">{question.created_at}</td>
              <td className="border px-4 py-2">{question.question}</td>
              <td
                className="border px-4 py-2 text-center text-red-500"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering row click
                  handleDelete(question.id);
                }}
              >
                &#10060;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
