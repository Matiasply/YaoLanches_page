import AboutImage from "../../public/about_image.jpeg"
import Image from "next/image"

export function About () {

    return (

        <section className="px-6 py-10">

            <div className="flex flex-col-reverse items-center gap-16 py-16 px-7 mt-10 rounded-2xl md:flex-row bg-[#F2E3D5]">

                <div>

                    <Image src={AboutImage} alt="Foto de comida" className="md:w-450 h-70 rounded-4xl hover:scale-110 duration-300 shadow-2xl"/>

                </div>

                <div className="flex flex-col gap-6">

                    <h3 className="text-4xl md:text-5xl">Quem somos?</h3>

                    <p> Yao Lanches é o empreendimento do Sr. Ysmahely, que há anos tem experiência 
                        com a venda de salgados e marmitas de almoço. Seu principal local de atuação é 
                        em frente ao Campus da Universidade Federal da Paraíba situado em Mangabeira.
                        Yao é muito amado pelos alunos, visto que é um dos dois únicos pontos de lanche
                        e almoço da unidade.
                    </p>

                </div>

            </div>

        </section>
    )
}