"use client"

import { useRouter } from "next/navigation"

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
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 mb-6
            px-3 py-1.5
            text-sm text-zinc-300
            border border-zinc-700/60
            bg-zinc-900/40
            hover:bg-zinc-800/60 hover:text-white
            transition hover:cursor-pointer"
    >
      &larr; back
    </button>
  )
}
