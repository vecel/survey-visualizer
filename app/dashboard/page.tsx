import { MdArrowBack } from "react-icons/md";
import DashboardSkeleton from "../components/DashboardSkeleton"
import Link from "next/link";

export default async function Page() {

  const data = await fetch("https://opentdb.com/api.php?amount=50")
  const json = await data.json()
  const questions = json.results.map((item, i) => ({
    id: i,
    ...item,
  }));

  return (
    <div className="size-full flex flex-col">
        <div className="h-16 flex items-center border-b border-surface-container-high">
          <Link href="/" className="flex items-center justify-center size-12 m-2 cursor-pointer hover:bg-surface-container-high hover:rounded-4xl">
            <MdArrowBack size={24}/>
          </Link>
          <h1 className="text-3xl">Dashboard</h1>
        </div>
        <DashboardSkeleton questionsList={questions}/>
    </div>
  )
}