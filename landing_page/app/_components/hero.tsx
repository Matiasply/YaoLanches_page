import YaoLogo from "../../public/YaoLogo.png"
import Image from "next/image"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import CoxinhaIcon from "../../public/coxinha.png"
import EmpadaIcon from "../../public/empada.png"
import MarmitaIcon from "../../public/marmita.png"
import Pastelicon from "../../public/pastel.png"

export function Hero () {
    return (

        <section className="bg-[url('../public/fundo_hero.jpeg')] bg-cover bg-center 
        text-black overflow-hidden px-16 py-12 flex justify-between">
            

            <article className="flex flex-col justify-between">

                <div className="container mx-auto">

                    <Image src={YaoLogo} alt="Logo do Yao" className="w-100 h-100
                    hover:scale-110 duration-300"/>
                
                </div>

                <div className="text-[#081654] px-16">

                    <h3 className="text-3xl font-bold">Bateu uma fome?</h3>
                    <p className="font-semibold">Compre já o seu salgado ou peça o seu almoço!</p>

                    <a href="#" className="flex items-center gap-2 mt-5 bg-green-500 text-white
                    px-3 py-3 rounded-2xl w-50 hover:bg-green-950">

                        <WhatsappLogoIcon/>
                        Entre em contato

                    </a>

                </div>

            </article>

            <article>

                <div>

                    <Image src={CoxinhaIcon} alt="Imagem de uma coxinha" className="hidden md:block
                    absolute w-100 top-100 right-60 hover:scale-105 duration-200"/>
                
                </div>

                <div>

                    <Image src={EmpadaIcon} alt="Imagem de uma empada" className="hidden md:block
                    absolute w-90 top-30 right-60 rotate-36 hover:scale-105 duration-200"/>

                </div>


                <div>

                    <Image src={MarmitaIcon} alt="Imagem de marmita" className="hidden md:block
                    absolute w-60 top-100 right-10 hover:scale-105 duration-200"/>

                </div>

                <div>

                    <Image src={Pastelicon} alt="Imagem de pastéis" className="hidden md:block
                    absolute w-60 top-40 right-10 hover:scale-105 duration-200"/>

                </div>

            </article>



        </section>
    )
}