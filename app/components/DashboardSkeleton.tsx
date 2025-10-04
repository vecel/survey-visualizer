"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useCategoriesData } from "../hooks/useCategoriesData"

export default function DashboardSkeleton({
    questionsList 
}: {
    questionsList: Question[]
}) {

    const categoriesData: CategoryData[] = useCategoriesData(questionsList)

    return (
        <div className="flex-1 p-8 grid grid-cols-2 gap-8 grid-rows-2 overflow-scroll">
            <div className="border flex flex-col">
                <h1 className="text-xl m-2 text-center">Number of entries in each category</h1>
                <div className="flex-1">
                    <ResponsiveContainer width="100%">
                        <BarChart data={categoriesData} margin={{top: 5, left: 10, bottom: 5, right: 10}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" type="category" tick={<TruncatedTick />} interval={0} label={{value: "Category", position: "insideBottom"}} height={120}/>
                            <YAxis label={{value: "Count", angle: -90, position: "insideLeft"}}/>
                            <Tooltip contentStyle={{
                                backgroundColor: "var(--color-surface-container)"
                            }} cursor={{ fill: "var(--color-on-surface)"}} />
                            <Bar dataKey="count" fill="var(--color-primary)" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <div className="border"/>
            <div className="overflow-scroll border border-surface-container">
                <table className="size-full text-center">
                    <thead>
                        <tr className="bg-surface-container">
                            <th scope="col" className="p-2">Category</th>
                            <th scope="col" className="p-2">Count</th>
                            <th scope="col" className="p-2">Display</th>
                        </tr>
                    </thead>
                    <tbody>
                        { categoriesData.map(category => (
                            <tr key={category.name} className="nth-of-type-[even]:bg-surface-container-high nth-of-type-[odd]:bg-surface-container-variant">
                                <td className="p-2 pl-4 text-start">{ category.name }</td>
                                <td className="p-2">{ category.count }</td>
                                <td className="p-2">{ "[]" }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function TruncatedTick(props: any) {
  const { x, y, payload } = props;
  const maxChars = 14

  const text =
    payload.value.length > maxChars
      ? payload.value.slice(0, maxChars - 1) + "…"
      : payload.value;

  return (
    <g transform={`translate(${x - 12},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        transform="rotate(-90)"
        textAnchor="end"
        fontSize={12}
        fill="var(--color-on-surface)"
      >
        {text}
      </text>
    </g>
  );
}