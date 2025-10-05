interface Question {
    id: number,
    type: string,
    difficulty: string,
    category: string,
    question: string
}

interface ChartData {
    name: string,
    count: number,
}

interface CategoryData extends ChartData {
    display: boolean
}