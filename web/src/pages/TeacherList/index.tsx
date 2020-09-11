import React from 'react'
import PageHeader from '../../components/pageHeader/index'
import './style.css'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matérias"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Ingles", label: "Ingles" },
                            { value: "Historia", label: "Historia" },
                            { value: "Física", label: "Física" },
                            { value: "Português", label: "Português" },
                            { value: "Química", label: "Química" },
                        ]
                        }
                    />
                    <Select
                        name="week_day"
                        label="DIas da semana"
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sábado-feira" },
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem name="Diego Fernandes" subject="Química"

                    bio="Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões." cost="20,00" avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" />
                <TeacherItem name="Diego Fernandes" subject="Química" bio="  Entusiasta das melhores tecnologias de química avançada.      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões." cost="20,00" avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" />
                <TeacherItem name="Diego Fernandes" subject="Química" bio="  Entusiasta das melhores tecnologias de química avançada.      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões." cost="20,00" avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" />
            </main>
        </div>

    )
}


export default TeacherList