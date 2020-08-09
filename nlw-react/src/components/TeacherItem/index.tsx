import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
    teacher: {
        id: number,
        avatar: string,
        bio: string;
        cost: number,
        subject: string,
        name: string,
        whatsapp: string,
    }
}

const TeacherItem: React.FC<TeacherItemProps> =({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }
    return(
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt="Avatar"/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>{teacher.bio}</p>
                    <footer>
                        <p>Preço/hora: <strong>R$ {teacher.cost}</strong></p>
                        <a target="_blank" onClick={createNewConnection}href={`https://wa.me/+5553999317232`}>
                            <img src={whatsappIcon} alt="WhatsApp Icone"/>
                            Entrar em contato
                        </a>
                    </footer>
        </article>
    );
}

export default TeacherItem;