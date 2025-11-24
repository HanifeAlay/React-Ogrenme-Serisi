import React from 'react'
import  {Link, Outlet} from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{ backgroundColor: 'lightcyan', textDecoration: 'none'}} to = "employee">ÇAlışanlar Hakkında</Link>
      <Link style={{margin: '40px', backgroundColor: 'lightcyan', textDecoration: 'none'}} to = "company"> Şirket Hakkında</Link>

      <Outlet/>

    </div>
  )
}

export default About
