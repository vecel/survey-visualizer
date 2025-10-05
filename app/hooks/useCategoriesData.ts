import { useState } from "react"

export function useCategoriesData(questions: Question[]): [CategoryData[], (category: CategoryData) => void, (category: CategoryData) => boolean] {

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

    const toggleDisplay = (category: CategoryData) => {
        setCategories(categories.map((cat) => {
            return cat.name === category.name ? { ...category, display: !category.display } : cat
        }))
    }

    const displayFilter = (category: CategoryData) => category.display

    return [categories, toggleDisplay, displayFilter]
}