import { useState } from "react"

export function useDifficultyData(questions: Question[]): ChartData[] {

    const records = questions.reduce<Record<string, number>>((acc, cur) => {
        acc[cur.difficulty] = (acc[cur.difficulty] || 0) + 1
        return acc
    }, {})

    const data = Object.keys(records).map(key => ({
        name: key,
        count: records[key],
    }))

    const [difficulties, setDifficulties] = useState<ChartData[]>(data)

    return difficulties
}