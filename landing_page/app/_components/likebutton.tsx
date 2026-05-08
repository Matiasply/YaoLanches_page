"use client"

import { useState, useEffect } from "react"
import { HandThumbUpIcon } from "@heroicons/react/24/outline"
import confetti from "canvas-confetti"



export function Like () {

    function soltarConfete() {
        confetti();
        }


    const [likes, setlikes] = useState(0)

    useEffect(() => {
        console.log("Obrigado pelo like!")
    }, [likes])

    return (

        <button onClick={()=> {setlikes(likes + 1) ;soltarConfete()}}
        className="text-2xl flex gap-5 hover:bg-[#081654] rounded-2xl px-2 py-2
        hover:text-white cursor-pointer">
            <HandThumbUpIcon className="w-7 h-7"/>
            {likes}
        </button>

    )

}