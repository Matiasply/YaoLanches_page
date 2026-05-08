import SalgadosImage from "../../public/salgados.jpeg"
import Image from "next/image"
import { CurrencyDollarIcon } from "@heroicons/react/24/outline"
import { BanknotesIcon } from "@heroicons/react/24/outline"
import { CreditCardIcon } from "@heroicons/react/24/outline"
import Marmita from "../../public/marmita.jpeg"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"



export function Services () {
    
    return (
        
        <section className="px-6 py-10">

            <h3 className="text-4xl lg:text-5xl text-center">Nossos serviços</h3>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 mt-5">

                <div className="bg-[#F2E3D5] flex flex-col gap-4 justify-center items-center rounded-2xl py-2">

                    <div>

                        <Image src={SalgadosImage} alt="Imagem de uma empada" className="w-50 h-50 rounded-2xl mb-3 hover:scale-110 duration-300"/>
                    
                    </div>

                    <div>

                        <p>Venda de salgados das mais diversas qualidades</p>

                        <div className="flex items-center justify-center">

                            <CurrencyDollarIcon className="w-4"/>
                            <span className="text-sm">3,50</span>
                        
                        </div>
                    
                    </div>

                </div>

                <div className="bg-[#F2E3D5] flex flex-col gap-4 justify-center items-center rounded-2xl py-4">

                    <div>

                        <Image src={Marmita} alt="Imagem de uma marmita" className="w-50 h-50 rounded-2xl hover:scale-110 duration-300"/>
                    
                    </div>

                    <div>

                        <p className="text-center">Venda de marmitas de almoço</p>
                        <p className="text-sm font-bold text-center">As marmitas devem ser encomendadas até às 9:30
                            do dia vigente pelo grupo do whatsapp!
                        </p>

                        <div className="flex items-center justify-center gap-2">

                            <BanknotesIcon className="w-4"/>
                            <span className="text-sm">14,00</span>

                            <CreditCardIcon className="w-4"/>
                            <span className="text-sm">15,00</span>
                        
                        </div>

                        <div className="flex items-center justify-center">

                            <a href="#" className="flex items-center gap-2 mt-5 bg-green-500 text-white
                            px-1 py-2 rounded-2xl w-40 hover:bg-green-950 text-sm">

                                <WhatsappLogoIcon/>
                                Entre em contato

                            </a>

                        </div>
                    
                    </div>

                </div>

            </div>

        </section>
    )
}