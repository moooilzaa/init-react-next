import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import "../styles.scss"

const About = () => {
  return (
    <React.Fragment>
      <Head title="About" description='set description with props.description'/>
      <Nav />
      <div className='row'>
        <p>Welcome to About!</p>
      </div>
    </React.Fragment>
  )
}
  
export default About