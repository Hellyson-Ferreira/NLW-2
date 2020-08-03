import React from 'react'
import './style.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
    image: string
    name: string
    material: string
    preco: string
    description: string
}
const TeacherItem: React.FC<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={props.image} alt="" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.material}</span>
                </div>
            </header>
            <p>
                {props.description}
                <footer>
                    <p>
                        <strong>Preço/hora R$ {props.preco} </strong>
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