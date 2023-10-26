import { useState, useEffect } from "react";
import './suggestion.css'

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
              <h1>HTML, CSS & Programming:</h1>
              <div className="suggBox resultsHere">
                { programming.map((item)=>(

                        <div key={item._id}>
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
                      </div>

                ))}{ programming.map((item)=>(

                        <div key={item._id}>
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
                      </div>

                ))}
              </div>
            </div>

            {/* <!-- Programming section end --> */}

            {/* <!-- GD section start --> */}

            <div className="suggCont">
              <h1>Graphic Designing:</h1>
              <div className="suggBox resultsHere2">
                { graphics.map((item)=>(

                        <div key={item._id}>
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
                      </div>
                      
                ))}
              </div>
            </div>

            {/* <!-- GD section end --> */}

            {/* <!-- VA section start --> */}

            <div className="suggCont">
              <h1>Visual Art:</h1>
              <div className="suggBox resultsHere3">
                { visual.map((item)=>(

                        <div key={item._id}>
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
    </>
  );
};

export default Suggestion;
