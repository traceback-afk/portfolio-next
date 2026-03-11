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
                        hover:shadow-rose-600/10
                        transition-all duration-350
                        shadow-md hover:shadow-xl h-full min-h-35
                        bg-zinc-800 flex justify-between">

            <div className="flex flex-col py-4 px-4 justify-between">
                <div>
                    <h1 className="text-xl mb-2
                    transition-colors duration-200
                    text-zinc-100 font-semibold">

                        {title}
                    </h1>
                    <p className="text-md text-zinc-300 mb-4">
                        {(() => {
                        const words = description.split(" ");
                        return words.length > 10 ? words.slice(0, 10).join(" ") + "..." : description;
                        })()}
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => (
                        <span
                        key={tag}
                        className="
                            text-xs
                            text-zinc-300
                            
                            border border-zinc-600
                            px-2.5 py-1
                            rounded-sm
                            transition-colors duration-200
                        "
                        >
                        {tag}
                        </span>
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