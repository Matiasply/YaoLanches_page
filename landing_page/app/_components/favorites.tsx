"use client"

import useEmblaCarousel from "embla-carousel-react"
import {ChevronRight, ChevronLeft} from "lucide-react"
import Image from "next/image"
import { Like } from "./likebutton"

const favorites = [

    {
        name: 'Turbão',
        descricao: 'Aquele pastel recheado de queijo e presunto para turbinar o seu dia!',
        imagem: '/turbao.jpeg'
    },
    {
        name: 'Empada doce',
        descricao: 'Empada de doce de leite com chocolate para adocicar seu dia!',
        imagem: '/empada_doce.jpeg'
    },
    {
        name: 'Esfihas',
        descricao: 'Esfihas quentinhas de frango, queijo ou carne para você se deliciar!',
        imagem: '/esfiha.jpeg'
    },
    {
        name: 'Pastel de camarão',
        descricao: 'Delicioso pastel de camarão, se não correr, vai ficar sem!',
        imagem: '/pastel_camarao.jpeg'
    }

]

export function Favorites () {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false, //Define o loop
        align: "start", // Define de onde começa
        slidesToScroll: 1, // Define quantos slides aparecem por vez
        breakpoints: {
            "(min-width: 768px)" : {slidesToScroll: 3}
        }
    })

    function scrollPrev () {

        emblaApi?.scrollPrev()
    }

    function scrollNext () {

        emblaApi?.scrollNext()
    }

    return (
        
        <section className="py-16">

            <div className="container mx-auto">

                <h3 className="text-4xl lg:text-5xl text-center">Favoritos dos clientes</h3>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>

                        <div className="flex gap-3">

                            {favorites.map((item, index) => (
                                
                                <div key={index} className="flex-[0_0_100%] flex-col min-w-0 md:flex-[0_0_calc(100%/3)]
                                 bg-[#F2E6D0] py-2 px-4">

                                    <div className="flex justify-center">

                                        <Image src={item.imagem} alt="Imagem da comida" width={500} height={500}
                                        className="rounded-2xl w-50 h-auto"/>

                                    </div>
                                    <div className="flex justify-between items-center">

                                        <div className="flex flex-col gap-2 w-60 mt-5">

                                            <h4 className="text-2xl">{item.name}</h4>
                                            <p className="text-sm">{item.descricao}</p>

                                        </div>

                                        <Like/>
                                    
                                    </div>

                                </div>
        ))}

                        </div>

                    </div> 

                    <button onClick={scrollPrev} className="bg-[#081654] rounded-full cursor-pointer px-1 py-1
                    absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                        <ChevronLeft className="text-[#F2E3D5]"/>
                    </button> 

                    <button onClick={scrollNext} className="bg-[#081654] rounded-full cursor-pointer px-1 py-1
                    absolute -right-5 -translate-y-1/4 -translate-x-1/4 top-1/2">
                        <ChevronRight className="text-[#F2E3D5]"/>
                    </button> 

                </div>

            </div>

        </section>

    )
}