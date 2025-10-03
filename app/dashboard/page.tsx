import DashboardSkeleton from "../components/DashboardSkeleton"

export default async function Page() {

  const data = await fetch("https://opentdb.com/api.php?amount=50")
  const json = await data.json()
  const questions = json.results.map((item, i) => ({
    id: i,
    ...item,
  }));


  console.log(questions)

  return (
    <>
        <div>Go back</div>
        <h1>Hello, Dashboard</h1>
        <DashboardSkeleton questionsList={questions}/>
    </>
  )
}