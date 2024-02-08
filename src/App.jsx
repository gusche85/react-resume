import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Introduction() {
  return (
    
    <div className="d-flex m-5 justify-content-center align-items-center">
    <main className='border border-black rounded'>
      <div className='container-fluid m-7 p-3'>
      <h1 className='fw-bold text-center'>Giuseppina Sherry Sayan</h1>
        <Picture />
        <p className="text-center">
           <i className="bi-file-code"></i><a href="https://portfolio.juspna.com/" className="link-primary p-2">My personal portfolio</a>
          <i className="bi-linkedin"></i><a href="www.linkedin.com/in/giuseppina-sayan-1a32056b" className="link-primary p-2">LinkedIn</a>
          <i className="bi-github"></i><a href="https://github.com/gusche85" className="link-primary p-2">Github</a>
        </p>
        <hr />
        <Summary />
        <Skills />
        <Education />
        <Experience />
      
    </div>
    </main>
    </div>
  )
}

export function Skills() {
  return (
    <>
        <nav className="navbar bg-body-secondary mb-3 mt-3"> 
          <div className="container-fluid"> 
            <span className="navbar-brand mb-0 h1">Skills</span>
          </div>
        </nav>
      <p className='mb-4'>
       JavaScript, HTML, CSS, React.js, Firebase, Express.js, Wordpress, JSON, Application Programming Interfaces (API), Information Technology
      </p>
   </>
  )
}

export function Education() {
  return (
    <>
      <nav className="navbar bg-body-secondary mb-3 mt-3"> 
        <div className="container-fluid"> 
          <span className="navbar-brand mb-0 h1">Education</span>
        </div>
      </nav>
      <ol className='mb-4'>
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
      <nav className="navbar bg-body-secondary mb-3 mt-3"> 
        <div className="container-fluid"> 
          <span className="navbar-brand mb-0 h1">Experience</span>
        </div>
      </nav>
      <ul>
        <li><span className='fw-bold'>Document Controller </span> @ Sumatec Engineering & Construction Sdn. Bhd.(2010)
          <ul>
            <li> Managed the ABF Plant Rejuvenation Project Main Construction Package, ensuring smooth communication and coordination among stakeholders.</li>
            <li>Ensured compliance with project requirements through systematic file management practices for efficient document retrieval.</li> <br />
          </ul>
        </li>

        <li><span className='fw-bold'>Document Control Coordinator</span> @ Air Energy Consulting (M) Sdn. Bhd.(2009) </li>
        <ul>
           <li>Overseeing the organization and management of documents and drawings for the Construction of Murphy Gas Plant Phase 1 Bintulu Onshore Receiving Facility project.</li> <br />
        </ul>
 
        <li><span className='fw-bold'>General Clerk</span> @ K-Frontiers Sdn. Bhd.(2008 - 2009)</li>
        <ul>
          <li>Assisting the Technical Assistant with general administrative duties, while performing document control tasks to facilitate project progression.</li>
        </ul>
        
      </ul>
      
   </>
  )
}

export function Summary() {
  return (
    <>
     <p className='mt-4 fw-bold'>Summary:</p>
    <p className='mb-4'>I am a tech enthusiast fueled by a passion for problem-solving. My coding journey is a testament to my self-learning prowess, showcasing my commitment to continuous improvement. Drawing from a background as a document controller in the oil and gas industry, I bring a unique blend of organizational skills and attention to detail. Leveraging this experience, I've successfully translated my expertise into programming, contributing to the development of impactful applications. Explore with me as I merge industry insights with cutting-edge technology in my online portfolio. I am ready to bring a dynamic blend of tech prowess and industry experience to your team</p>
    </>
   )
}

export function Picture() {
  return (
    <div className='text-center m-3'>
    <img className='border-black rounded' height={110} src='profile.png'/>
    </div>
  );
}



export default Introduction;