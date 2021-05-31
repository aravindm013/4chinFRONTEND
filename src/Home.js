import React from 'react'
import { Boards } from './components/Boards'
import {Header} from './components/Header'
import { HomeNav } from './components/HomeNav'
import { PopularThreads } from './components/PopularThreads'
import { What } from './components/What'
export const Home = () => {
    const boards = {
        'Video Games':[
            ['Video Games','/v/'],
            ['Video Game Generals','/vg/']
          ],
          'Interests':[
            ['Interests','/in/'],
            ['Anime & manga','/a/']
          ]
          
    }
    return (
        <div className='container'>
            <Header title='Home'/>
            <What/>
            <Boards boards={boards}/>
            <PopularThreads />
            <HomeNav />
        </div>
    )
}
