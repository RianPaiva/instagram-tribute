import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
        <div  >
            <header className="header-post">

                <div className="infos-post">
                    <img className='img-header-post' src="https://www.opovo.com.br/_midias/jpg/vasti/2013/01-06/03/20130306/diversas/20130306_arnold_schwarzenegger__ator.jpg" />
                    <p>Arnold Schwarzenegger</p>
                </div>

                <FiMoreHorizontal />

            </header>

            <div className="img-post" >

                <img src="https://m.media-amazon.com/images/I/41ukZaKo-HL._AC_SX450_.jpg" />


            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>

                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>

                        </div>

                        <div className="icon"><BsBookmark /></div>


                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>61 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <span>JayCuttler</span> Nice.
                    </p>
                </div>

                <div className="time-post">
                    <time>1 HORA</time>
                </div>
                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>

        </div>

            

  
        </>

        
    )
}