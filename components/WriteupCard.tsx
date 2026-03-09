import React from "react";
import { MoveRightIcon } from "lucide-react";

interface TextDisplayProps {
    title: string
    description: string
    tags: string[]
}

const WriteupCard: React.FC<TextDisplayProps> =
({title, description, tags}) => {
    return (
        <div className="w-full group border
                        border-zinc-700
                        hover:border-rose-600
                        transition-colors duration-200
                        shadow-2xl h-full min-h-35
                        bg-zinc-800 flex justify-between">

            <div className="flex flex-col py-4 px-4 justify-between">
                <div>
                    <h1 className="text-xl mb-2
                    transition-colors duration-200
                    text-zinc-100 font-semibold">

                        {title}
                    </h1>
                    <p className="text-md text-zinc-300 mb-4">
                        {description}
                    </p>
                </div>
                <div className="flex gap-2">
                    {tags.map((tag)=>(
                        <small key={tag} className="text-zinc-500">
                            {tag}
                        </small>
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-end
                        py-2 pe-4">
                <MoveRightIcon strokeWidth={1}
                className="stroke-rose-600
                transition-colors duration-200
                "/>
            </div>
        </div>
    )
}

export default WriteupCard