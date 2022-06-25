import React from 'react'
import BodyPage from '../BodyPage/BodyPageIndex';
import Header from '../BodyPage/Header'
import Amortization from './Amortization';

const Form = () => {
    return (
        <div>
            {/* <Header title={"Échenacier de microcrédit"}/> */}
            <BodyPage title={"Calculer le plan"} component={<Amortization />}/>
        </div>
    )
}

export default Form//////////////////////// à supprimer ce component