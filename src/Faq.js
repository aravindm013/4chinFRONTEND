import React from 'react'
import { Header } from './components/Header'
import { Faqheader } from './componentsfaq/Faqheader'

export const Faq = () => {
    return (
        <div className='container'>
            <Header margin={5}/>
            <div className='row'>
                <Faqheader />
            </div>
        </div>
    )
}
