import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForms from './pages/TeacherForms'

function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForms} />

        </BrowserRouter>
    )
}


export default Routes