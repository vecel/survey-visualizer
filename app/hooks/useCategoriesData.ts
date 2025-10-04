import { useState } from "react"

export function useCategoriesData(questions: Question[]): CategoryData[] {

    const records = questions.reduce<Record<string, number>>((acc, cur) => {
        acc[cur.category] = (acc[cur.category] || 0) + 1
        return acc
    }, {})

    const data = Object.keys(records).map(key => ({
        name: key,
        count: records[key],
        display: true
    }))

    const [categories, setCategories] = useState<CategoryData[]>(data)

    return categories
}