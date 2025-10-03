import DashboardSkeleton from "../components/DashboardSkeleton"

export default async function Page() {

  const data = await fetch("https://opentdb.com/api.php?amount=50")
  const json = await data.json()
  const questions = json.results.map((item, i) => ({
    id: i,
    ...item,
  }));

  return (
    <div className="size-full flex flex-col">
        <div className="h-16 border-b"></div>
        <DashboardSkeleton questionsList={questions}/>
    </div>
  )
}