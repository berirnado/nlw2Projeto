import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/20270550?s=460&u=02a2afc9c715b95067912e0cb5d88f83b655e820&v=4" alt="Bernardo"/>
                        <div>
                            <strong>Bernardo Simões Pires</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
                    Unde earum ut quos laborum nobis corrupti quibusdam sint assumenda culpa distinctio consectetur veniam perferendis obcaecati nam natus, <br/>
                    ipsum officiis omnis cumque.</p>

                    <footer>
                        <p>Preço/hora: <strong>R$ 80,00</strong></p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsApp Icone"/>
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    );
}

export default TeacherItem;