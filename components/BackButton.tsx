"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function BackButton(){
  const router = useRouter();
  function handleBack(){
    if (window.history.length > 1){
      router.back()
    }else{
      router.push("/")
    }
  }
  return (
    <Button onClick={handleBack}><ArrowLeftIcon/></Button>
  )
}
