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

    return (
        <>
            { questionsList.map(question => (
                <li key={question.id}>{ question.question }</li>
            ))}
        </>
    )
}