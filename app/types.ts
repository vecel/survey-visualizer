interface Question {
    id: number,
    type: string,
    difficulty: string,
    category: string,
    question: string
}

interface CategoryData {
    name: string,
    count: number,
    display: boolean
}