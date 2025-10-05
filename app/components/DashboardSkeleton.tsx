"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useCategoriesData } from "../hooks/useCategoriesData"
import { useDifficultyData } from "../hooks/useDifficultyData"

export default function DashboardSkeleton({
    questionsList 
}: {
    questionsList: Question[]
}) {

    const [categories, toggleDisplay, displayFilter] = useCategoriesData(questionsList)
    const difficulties = useDifficultyData(questionsList)

    return (
        <div className="flex-1 p-8 grid grid-cols-2 gap-8 grid-rows-2 overflow-scroll">
            <div className="border flex flex-col">
                <h1 className="text-xl m-2 text-center">Categories distribution</h1>
                <div className="flex-1">
                    <ResponsiveContainer width="100%">
                        <BarChart data={ categories.filter(displayFilter) } margin={{top: 5, left: 10, bottom: 5, right: 10}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" type="category" tick={<TruncatedTick />} interval={0} label={{value: "Category", position: "insideBottom"}} height={120}/>
                            <YAxis label={{value: "Number of entries", angle: -90}} domain={[0, 'dataMax + 2']} interval={0}/>
                            <Tooltip contentStyle={{
                                backgroundColor: "var(--color-surface-container)"
                            }} cursor={{ fill: "var(--color-on-surface)"}} />
                            <Bar dataKey="count" fill="var(--color-primary)" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <div className="border flex flex-col">
                <h1 className="text-xl m-2 text-center">Difficulties distribution</h1>
                <div className="flex-1">
                    <ResponsiveContainer width="100%">
                        <BarChart data={ difficulties } margin={{top: 5, left: 10, bottom: 5, right: 10}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" type="category" interval={0} label={{value: "Category", position: "insideBottom"}} height={60}/>
                            <YAxis label={{value: "Number of entries", angle: -90}} domain={[0, 'dataMax + 5']}/>
                            <Tooltip contentStyle={{
                                backgroundColor: "var(--color-surface-container)"
                            }} cursor={{ fill: "var(--color-on-surface)"}} />
                            <Bar dataKey="count" fill="var(--color-primary)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
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
                        { categories.map(category => (
                            <tr key={category.name} className="nth-of-type-[even]:bg-surface-container-high nth-of-type-[odd]:bg-surface-container-variant">
                                <td className="p-2 pl-4 text-start">{ category.name }</td>
                                <td className="p-2">{ category.count }</td>
                                <td className="p-2">
                                    <input type="checkbox" defaultChecked onChange={() => toggleDisplay(category)}/>
                                </td>
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