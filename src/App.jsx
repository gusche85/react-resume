import './App.css'
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Introduction() {
  return (
    <main className='border border-black rounded'>
      <div className='container m-2 p-3'>
      <h1 className='fw-bold'>Giuseppina Sherry Sayan</h1>
        <p>
          <i class="bi-envelope p-3"></i><a href="#" class="link-primary">gishjode@gmail.com</a><br></br>
          <i class="bi-github p-3"></i><a href="#" class="link-primary">https://github.com/gusche85</a>
        </p>
        <hr></hr>
        <Skills />
        <Education />
        <Experience />
      </div>
      
    </main>
  )
}

export function Skills() {
  return (
    <>
        <nav class="navbar bg-body-secondary mb-3 mt-3"> 
          <div class="container-fluid"> 
            <span class="navbar-brand mb-0 h1">Skills</span>
          </div>
        </nav>
      <p>
       JavaScript, HTML, CSS, React.js, Firebase, Express.js, JSON, Application Programming Interfaces (API), Information Technology
      </p>
   </>
  )
}

export function Education() {
  return (
    <>
      <nav class="navbar bg-body-secondary mb-3 mt-3"> 
        <div class="container-fluid"> 
          <span class="navbar-brand mb-0 h1">Education</span>
        </div>
      </nav>
      <ol>
        <li>Universiti Tun Hussein Onn (2004 - 2007)</li>
        <ul>
        <li>Bachelor of Information Technology (Hons)</li>
        </ul>
        <li>Sigma School (2023)</li>
        <ul>
        <li>Software Development Program</li>
        </ul>
      </ol>
      
   </>
  )
}


export function Experience() {
  return (
    <>
      <nav class="navbar bg-body-secondary mb-3 mt-3"> 
        <div class="container-fluid"> 
          <span class="navbar-brand mb-0 h1">Experience</span>
        </div>
      </nav>
      <ul>
        <li>Universiti Tun Hussein Onn</li>
        <li>Sigma School</li>
      </ul>
      
   </>
  )
}




export default Introduction;