"use client";
import { useEffect, useState } from "react";
import { QuestionMajor } from "../../interfaces/question";
import { createClient } from "../../utils/supabase/client";
import Swal from "sweetalert2";

import { useRouter, usePathname } from "next/navigation";

export default function MajorTable() {
  const supabase = createClient();
  const [questions, setQuestions] = useState<QuestionMajor[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const { data, error } = await supabase
      .from("question-major-input")
      .select("*")
      .is("answer", null);

    if (error) {
      throw new Error("Not Reading");
    }

    setQuestions(data);
  }

  const handleDelete = async (id: number) => {
    Swal.fire({
      title: "متأكد بتحذفها أخوك؟",
      text: "ترا ماكو استرجاع!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setQuestions(questions!.filter((q) => q.id !== id));
        const { error } = await supabase
          .from("question-major-input")
          .delete()
          .eq("id", id);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });

    // Here you can also add the functionality to remove it from the database
  };

  const handleRowClick = (id: number) => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <div className="p-4 w-full">
      <table className="min-w-full table-auto bg-gray-800 rounded-md">
        <thead>
          <tr className="bg-gray-900 text-white rounded-lg">
            <th className="px-4 py-2 font-bold">#</th>
            <th className="px-4 py-2 font-bold">التاريخ</th>
            <th className="px-4 py-2 font-bold">السؤال</th>
            <th className="px-4 py-2 font-bold">التخصص</th>
            <th className="px-4 py-2 font-bold " />
            <th className="px-4 py-2 font-bold " />
          </tr>
        </thead>
        <tbody>
          {questions!.map((question) => (
            <tr
              key={question.id}
              className="bg-gray-800 text-white hover:bg-white hover:bg-opacity-5 cursor-pointer"
            >
              <td className="border px-4 py-2 w-4">{question.id}</td>
              <td className="border px-4 py-2 w-12  text-sm sm:text-md sm:w-28">
                {question.created_at.split("T")[0]}
              </td>
              <td dir="rtl" className="border px-4 py-2  text-sm sm:text-xl">
                {question.question}
              </td>
              <td dir="rtl" className="border px-4 py-2  text-sm sm:text-xl">
                {question.major}
              </td>
              <td className=" border  px-2 py-2 items-center text-center text-red-500">
                <p
                  className=" text-sm sm:text-3xl"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering row click
                    handleDelete(question.id);
                  }}
                >
                  &#10060;
                </p>
              </td>
              <td className=" border  px-2 py-2 items-center text-center text-green-500">
                <p
                  className="text-sm sm:text-3xl"
                  onClick={() => handleRowClick(question.id)}
                >
                  {" "}
                  &#10004;{" "}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
