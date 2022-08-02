import React from "react"


const Masthead: React.FC = () => {
    return (
        <section className="flex flex-col min-h-screen min-w-[100vw] justify-center bg-masthead bg-cover">
            <div>
                <h1 className="font-bold text-yellow-400">Rolê App</h1>
                <br /><br />
                <p className="max-w-[900px] text-center my-0 mx-auto">
                    Rolê App é um lugar pra você que procura o rolê perfeito para seu dia. Acesse nosso app e encontre o melhor local para você e seus amigos curtirem!
                    <br /><br />
                    Navegue entre as centenas de opções: bares, pubs, restaurantes e conforme sua preferência, faça sua reserva e curta sua noite!
                </p>
            </div>
        </section >
    )

}

export default Masthead