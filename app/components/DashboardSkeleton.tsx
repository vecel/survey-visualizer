"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface Question {
    id: number,
    type: string,
    difficulty: string,
    category: string,
    question: string
}

export default function DashboardSkeleton({
    questionsList 
}: {
    questionsList: Question[]
}) {

    const categories = questionsList.reduce<Record<string, number>>((acc, cur) => {
        acc[cur.category] = (acc[cur.category] || 0) + 1
        return acc
    }, {})

    const data = Object.keys(categories).map(key => ({
        category: key,
        count: categories[key]
    }))

    return (
        <div className="flex-1 p-8 grid grid-cols-2 gap-8 grid-rows-2">
            <div className="border"/>
            <div className="border"/>
            <div className="border"/>
            {/* <ResponsiveContainer>
                <BarChart data={data} margin={{top: 20, right: 5, bottom: 5, left: 5}}>
                    <CartesianGrid />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}
        </div>
    )
}