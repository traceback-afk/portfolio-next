import React from "react";
import { MoveRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface TextDisplayProps {
    title: string
    description: string
    tags: string[]
}

const WriteupCard: React.FC<TextDisplayProps> =
({title, description, tags}) => {
    return (
        <Card className="group">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardAction className="group-hover:text-rose-600 text-zinc-600">Read</CardAction>
            </CardHeader>
            <CardContent className="flex gap-2">
                {tags.map((tag)=>(
                    <small className="text-zinc-" key={tag}>{tag}</small>
                ))}
            </CardContent>
            {/* <CardFooter className="gap-2">
                <Button>Read</Button>
            </CardFooter> */}
        </Card>
    )
}

export default WriteupCard