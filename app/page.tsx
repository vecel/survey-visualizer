import Link from "next/link";

export default function Page() {
  return (
    <div className="size-full flex flex-col items-center justify-center">
      <h1 className="flex justify-center items-center text-6xl">Welcome to Survey Visualizer</h1>
      <Link href="/dashboard" className="m-8 p-4 bg-primary text-on-primary rounded-2xl hover:bg-primary-container">Go to Dashboard</Link>
    </div>
  )
}