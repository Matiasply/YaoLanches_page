"use client"

import useEmblaCarousel from "embla-carousel-react"
import {ChevronRight, ChevronLeft} from "lucide-react"
import Image from "next/image"
import MarmitaIcon from "../../public/marmita.png"

const testemunhos = [

    {
        name: 'Matias Monteiro',
        role: 'Estudante do curso de CDIA',
        comment: `"A minha salvação quando cheguei para estudar no CI foi YAO Lanches,
        o que falar do Sr. Ysmahely com o seu bom-humor e carisma cativante? Como fera,
        me senti muito acolhido."`,
        image: "/Matias.jpeg"
    },

    {
        name: 'Tiago Monteiro',
        role: 'Estudante do Ensino Médio',
        comment: `Conheci Yao Lanches através do meu irmão Matias que estuda no CI.
        Ainda sonho com a empada de carne de sol que comi outro dia...`,
        image: '/tiago.jpeg'
    }

]

export function Testemunhos () {

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

            <h3 className="text-3xl lg:text-5xl text-center">O que nossos clientes dizem</h3>

            <div className="relative mt-5">

                <div className="overflow-hidden" ref={emblaRef}>

                    <div className="flex gap-3">

                        {testemunhos.map((testemunho, index)=> (

                            <div key={index} className="flex-[0_0_100%] flex-col min-w-100 gap-3 justify-center
                            px-7 py-3 bg-[#F2E8E4] rounded-2xl">

                                <div className="flex items-center">

                                    <div className="flex flex-col gap-5">

                                        <div className="flex items-center gap-4"> 
                                            <div>

                                                <Image src={testemunho.image} alt="Foto do autor do comentário"
                                                height={500} width={500} className="w-20 h-20 rounded-full"/>
                                            
                                            </div>
                                            
                                            <div>

                                                <h4 className="text-2xl">{testemunho.name}</h4>

                                                <p className="text-sm">{testemunho.role}</p>
                                            
                                            </div>
                                        
                                        </div>

                                        <p className="md:mr-20">{testemunho.comment}</p>

                                    </div>

                                    <Image src={MarmitaIcon} alt="Png de marmita" className="hidden md:block
                                    w-50 h-50"/>

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