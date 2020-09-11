import React from 'react'
import './style.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
    name: string
    avatar: string
    whatsapp?: string
    subject: string
    cost: string
    bio: string
}
const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={props.avatar} alt="avatar" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>
            <p>
                {props.bio}
                <footer>
                    <p>
                        <strong>Preço/hora R$ {props.cost} </strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
                </footer>
            </p>
        </article>
    )
}

export default TeacherItem