import Link from "next/link"
import { IconType } from "react-icons"

export default function NavLink({
    link,
    title,
    Icon
}: {
    link: string,
    title: string,
    Icon: IconType
}) {
    return (
        <li className="m-2">
            <Link href={link} className="flex items-center p-3 hover:bg-surface-container-high hover:rounded-2xl">
                <Icon size={20} className="mr-4"/>
                { title }
            </Link>    
        </li>
    )
}