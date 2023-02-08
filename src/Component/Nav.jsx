import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className='nav'>
        <ul>
            <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/'>Home</NavLink></li></h4>
            <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/bollywood'>BollyWood</NavLink></li></h4>
            <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/technology'>Technology</NavLink></li></h4>
            <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/hollywood'>Hollywood</NavLink></li></h4>
            <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/fitness'>Fitness</NavLink></li></h4>
            <h4><li><NavLink className={({isActive})=>(isActive ? 'active' : 'notactive')} to='/food'>Food</NavLink></li></h4>
        </ul>
      </div>
      <hr/>

    </>
  )
}

export default Nav