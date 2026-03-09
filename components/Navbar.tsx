import Link from "next/link"
import { MoveUpRightIcon } from "lucide-react"

export default function Navbar (){
    return (
        <div className="w-full flex justify-center fixed z-10">
            <div className="flex py-6 w-10/12 justify-between">
                <div>
                    <Link href="/" className="text-zinc-200 font-semibold">Khashayar.</Link>
                </div>
                <div className="flex justify-between items-center gap-8">
                    <Link href="/projects" className="text-zinc-200 font-semibold">Projects</Link>
                    <Link href="/writeups" className="text-zinc-200 font-semibold">Writeups</Link>
                    <a href="#" className="text-zinc-200 font-semibold flex items-center gap-1">
                        Github
                        <MoveUpRightIcon size={15}/>
                    </a>
                    <a href="#" className="text-zinc-200 font-semibold flex items-center gap-1">
                        LinkedIn
                        <MoveUpRightIcon size={15}/>
                    </a>
                </div>

            </div>
        </div>
    )
}