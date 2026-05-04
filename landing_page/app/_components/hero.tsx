import YaoLogo from "../../public/YaoLogo.png"
import Image from "next/image"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"

export function Hero () {
    return (

        <section className="bg-[url('../public/fundo_hero.jpeg')] bg-cover bg-center 
        text-black overflow-hidden px-16 py-12 flex justify-between flex-col">

            <div className="container mx-auto">

                <Image src={YaoLogo} alt="Logo do Yao" className="w-100 h-100"/>
            
            </div>

            <div className="text-[#081654] px-16">

                <h3 className="text-3xl font-bold">Bateu uma fome?</h3>
                <p className="font-semibold">Compre já o seu salgado ou peça o seu almoço!</p>

                <a href="#" className="flex items-center gap-2 mt-5 bg-green-500 text-white
                px-3 py-3 rounded-2xl w-50">

                    <WhatsappLogoIcon/>
                    Entre em contato

                </a>

            </div>



        </section>
    )
}