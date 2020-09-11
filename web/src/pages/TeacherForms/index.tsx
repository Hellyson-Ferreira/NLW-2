import React from 'react'
import { useState } from 'react'
import PageHeader from '../../components/pageHeader'
import warningIcon from '../../assets/images/icons/warning.svg'
import Input from '../../components/Input'
import Select from '../../components/Select'
import './style.css'
import Textarea from '../../components/TextArea'


function TeacherForms() {
    const [scheduleItems, setScheduleItems] = useState([{week_day:0, from:'', to:''}])

    function addNewScheduleItem(/*week_day:number, from:string, to:string*/) {
        setScheduleItems([
            ...scheduleItems,
            {week_day:0,from:'',to:''}
        ])
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição" />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select name="subject" label="Matérias" options={[
                        { value: "Artes", label: "Artes" },
                        { value: "Biologia", label: "Biologia" },
                        { value: "Geografia", label: "Geografia" },
                        { value: "Matemática", label: "Matemática" },
                        { value: "Ingles", label: "Ingles" },
                        { value: "Historia", label: "Historia" },
                        { value: "Física", label: "Física" },
                        { value: "Português", label: "Português" },
                        { value: "Química", label: "Química" },
                    ]} />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>
                <fieldset>
                    <legend>
                        Horário disponíveis
                        <button type="button" onClick={addNewScheduleItem}>+ novo horário</button>
                    </legend>

                   {scheduleItems.map(item =>{
                       return(
                        <div key={item.week_day.toString()} className="schedule-item">
                        <Select
                            name="week_day"
                            label="Dias da semana"
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
                        <Input name="from" label="Das" type="time"/>
                        <Input name="do" label="Ás" type="time"/>
                        </div>
                       )
                   })}
                </fieldset>
                <footer>
                    <p>

                        <img src={warningIcon} alt="Aviso importante" />
                        importante<br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>


    )
}


export default TeacherForms