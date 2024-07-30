"use client";
import { useEffect, useState } from "react";
import { QAInterface } from "../../interfaces/question";
import { createClient } from "../../utils/supabase/client";
import Swal from "sweetalert2";
import { useRouter, usePathname } from "next/navigation";

interface QATableProps {
  type: string;
}

export default function QATable({ type }: QATableProps) {
  const supabase = createClient();
  const [questions, setQuestions] = useState<QAInterface[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    const { data, error } = await supabase.from(`${type}`).select("*");

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
        const { error } = await supabase.from(`${type}`).delete().eq("id", id);

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
    <div className="p-4 w-full overflow-x-auto">
      <table className="min-w-full table-auto bg-gray-800 rounded-md">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="px-4 py-2 font-bold">#</th>
            <th className="px-4 py-2 font-bold">السؤال</th>
            <th className="px-4 py-2 font-bold">الجواب</th>
            <th className="px-4 py-2 font-bold">النوع</th>
            <th className="px-4 py-2 font-bold" />
            <th className="px-4 py-2 font-bold" />
          </tr>
        </thead>
        <tbody>
          {questions!.map((question) => (
            <tr
              key={question.id}
              className="bg-gray-800 text-white hover:bg-white hover:bg-opacity-5 cursor-pointer"
            >
              <td className="border px-4 py-2">{question.id}</td>
              <td dir="rtl" className="border px-4 py-2 text-sm sm:text-base">
                {question.question}
              </td>
              <td className="border px-4 py-2 text-sm">
                {question.answer.substring(0,45)+"..."}
              </td>
              <td className="border px-4 py-2 text-sm">
                {question.type}
              </td>
              <td className="border px-2 py-2 text-center text-red-500">
                <p
                  className="sm:text-lg"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering row click
                    handleDelete(question.id);
                  }}
                >
                  &#10060;
                </p>
              </td>
              <td className="border px-2 py-2 text-center text-green-500">
                <p
                  className="sm:text-lg"
                  onClick={() => handleRowClick(question.id)}
                >
                  {" "}
                  &#128295;{" "}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
