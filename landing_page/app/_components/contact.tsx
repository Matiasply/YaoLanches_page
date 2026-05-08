import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"

export function Contact () {

    return (
        
        <section className="bg-[#F2E3D5] border-2 border-t-[#081654] px-10 py-3">

            <div className="grid grid-cols-3 gap-10">

                <div className="text-sm">
                    <address>Av. dos Escoteiros, 3 -
                         Mangabeira, João Pessoa - PB,
                          58414-040
                    </address>
                </div>

                <div className="text-sm">
                    
                    <p>Horários de funcionamento:</p>

                    <ul className="mt-2">
                        <li>Segunda - Sexta</li>
                        <li>7:30 - 10:00</li>
                        <li>13:30 - 16:00</li>
                    </ul>

                </div>

                <div className="text-sm">

                    <p>Entre no grupo de whatsapp:</p>

                    <a href="#" className="flex items-center gap-2 mt-5 bg-green-500 text-white
                    px-1 py-1 rounded-2xl w-auto hover:bg-green-950 text-sm mr-5">

                        <WhatsappLogoIcon/>
                        Grupo

                    </a>

                </div>

            </div>

        </section>
    )
}