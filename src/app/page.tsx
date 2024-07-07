import QuestionTable from "@/components/table";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full">
      <div className="w-full bg-gradient-to-br from-[#51170e] to-[#031020] ">
        <div className="flex flex-col items-center justify-center pt-16 sm:pt-16">
          <QuestionTable />
        </div>
      </div>
    </main>
  );
}
