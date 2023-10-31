import { useState, useEffect } from "react";
import './suggestion.css'
import { Link } from "react-router-dom";

const Suggestion = () => {

  const [programming, setProgramming] = useState([])
  const [visual, setVisual] = useState([])
  const [graphics, setGraphics] = useState([])

  const [loader, setLoader] = useState(true)

  useEffect(()=>{

    fetch('http://localhost:4000/programming')
    .then(res => res.json())
    .then(data => {
      setProgramming(data)
      console.log(data)
    })
    // .then(ddt => console.log(ddt))
    .catch(err => console.log(`coaght error${err}`))
    
    fetch('http://localhost:4000/visualarts')
    .then(res => res.json())
    .then(data => {
      setVisual(data)
      console.log(data)
    })
    .catch(err => console.log(`coaght error${err}`))
    
    fetch('http://localhost:4000/graphics')
    .then(res => res.json())
    .then(data => {
      setGraphics(data)
      console.log(data)
    })
    .catch(err => console.log(`coaght error${err}`))

    setLoader(false);

  },[])

  return (
    <>
      { 
      loader 
      
      ?
      
      <div>Loading....</div>
      
      :  
      
      <div>

      
        {/* <!-- Bubble Start --> */}

        <div className="bubles buble-about-1"></div>
        <div className="bubles buble-about-2"></div>
        <div className="bubles buble-about-3"></div>
        <div className="bubles buble-about-4"></div>
        <div className="bubles buble-about-5"></div>
        <div className="bubles buble-about-6"></div>
        <div className="bubles buble-about-7"></div>
        <div className="bubles buble-about-8"></div>
        <div className="bubles buble-about-9"></div>
        <div className="bubles buble-about-10"></div>
        <div className="bubles buble-about-11"></div>
        <div className="bubles buble-about-12"></div>

        {/* <!-- Bubble End --> */}

        <main>
          <section>
            <div className="abouth1">
              <h1>Suggestions</h1>
            </div>
            {/* <!-- Programming section start --> */}

            <div className="suggCont">
              <h1 id='programming'>Programming:</h1>
              <div className="suggBox resultsHere">
                { programming.map((item)=>(
                  
                      <div key={item._id}>
                        <a href={item.link}>
                          <img
                          src={item.img}
                          width="100%"
                          height="100%"
                        />
                        <h3>{item.title}</h3>
                        <h5>posted by {item.postedby}</h5>
                        <p>
                          {item.description} 
                        </p>
                       </a>
                      </div>

                ))}
              </div>
            </div>

            {/* <!-- Programming section end --> */}

            {/* <!-- GD section start --> */}

            <div className="suggCont">
              <h1 id='graphic'>Graphic Designing:</h1>
              <div className="suggBox resultsHere2">
                { graphics.map((item)=>(

                        <div key={item._id}>
                        <a href={item.link}>
                          <img
                          src={item.img}
                          width="100%"
                          height="100%"
                         />
                         <h3>{item.title}</h3>
                         <h5>posted by {item.postedby}</h5>
                         <p>
                          {item.description} 
                         </p>
                       </a>
                      </div>
                      
                ))}
              </div>
            </div>

            {/* <!-- GD section end --> */}

            {/* <!-- VA section start --> */}

            <div className="suggCont">
              <h1 id='visual'>Visual Art:</h1>
              <div className="suggBox resultsHere3">
                { visual.map((item)=>(

                      <div key={item._id}>
                        <a href={item.link}>
                          <img
                          src={item.img}
                          width="100%"
                          height="100%"
                        />
                         <h3>{item.title}</h3>
                         <h5>posted by {item.postedby}</h5>
                         <p>
                          {item.description} 
                         </p>
                        </a>
                      </div>
                      
                ))}
              </div>
            </div>

            {/* <!-- VA section end --> */}
          </section>

          {/* <!-- Add section start --> */}
        </main>

      </div>  
    
    }

     <Link to='/profile'>
            <button className="profileButton" title="Profile">
                    <svg fill="#ffffff" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"></path></g></svg>
            </button>
      </Link>
    </>
  );
};

export default Suggestion;
