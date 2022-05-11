
import './style.css'

export function Suggestion() {

       

    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img src={`https://media-exp1.licdn.com/dms/image/D4D35AQH2qQEUhnVcdw/profile-framedphoto-shrink_200_200/0/1647375504121?e=1652382000&v=beta&t=OAOkp_hOFFd1sNC1bQrLj3k0Cnqq9D0p5hpWhl9Y3p0`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>Rian Paiva</span>
                        <p>rianpaiva</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            </div>

            <div className="header-main-suggestion" >

                <p>Sugestões para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion" >

                
                     <div className="infos-suggestion" >
                        <img src="https://t.ctcdn.com.br/YiUoo98i2YU8fkN5Q4SVgXFBeNE=/400x400/smart/filters:format(webp)/i490771.jpeg" />
    
                        <div className="info-suggestion" >
                            <span>Obama</span>
                            <p>Seguido por arnoldschwarzenegger</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion" >
                        <img src="https://startupi.com.br/wp-content/uploads/2021/10/Joao-Appolinario.jpg" />
    
                        <div className="info-suggestion" >
                            <span>Appolinario</span>
                            <p>Seguido por arnoldschwarzenegger</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion" >
                        <img src="https://www.dmtpalestras.com.br/wp-content/uploads/2020/08/mario-sergio-cortella-palestrante-dmtpalestras.jpg" />
    
                        <div className="info-suggestion" >
                            <span>Cortella</span>
                            <p>Seguido por arnoldschwarzenegger</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                    <div className="infos-suggestion" >
                        <img src="https://t.ctcdn.com.br/IFvswOVy57rDAEBc5_ox062Me0c=/400x400/smart/filters:format(webp)/i490763.jpeg" />
    
                        <div className="info-suggestion" >
                            <span>Bill Gates</span>
                            <p>Seguido por arnoldschwarzenegger</p>
                        </div>
    
                        <button className='follow' >Seguir</button>
                    </div>
                   
                
               

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
        </div>
    )
}