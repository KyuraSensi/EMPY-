/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './home.css'
import { useEffect, useState } from 'react';
// import { set } from 'mongoose';

const Home = () => {

  const [name, setName] = useState('')

  const [popup, setPopup] = useState(true)

  const [suggestion, setSuggestion] = useState('')

  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setName(data[data.length -1].username))
    .catch(err=>console.log(err))

    fetch('https://www.boredapi.com/api/activity/')
    .then((res) => res.json())
    .then((data) => {
      setSuggestion(data.activity)
      console.log(data.activity)
    })
    .catch((err) => {
      setPopup(false)
      console.log(err)
    })

  },[name])

  return (
    <>
      
      {/* <!-- Bubbles Start --> */}

      <div className="bubles buble-1"></div>
      <div className="bubles buble-2"></div>
      <div className="bubles buble-3"></div>
      <div className="bubles buble-4"></div>
      <div className="bubles buble-5"></div>
      <div className="bubles buble-6"></div>
      <div className="bubles buble-7"></div>
      <div className="bubles buble-8"></div>
      <div className="bubles buble-9"></div>
      <div className="bubles buble-10"></div>
      <div className="bubles buble-11"></div>
      <div className="bubles buble-12"></div>
      <div className="bubles buble-13"></div>
      <div className="bubles buble-14"></div>
      <div className="bubles buble-15"></div>
      <div className="bubles buble-16"></div>
      <div className="bubles buble-17"></div>
      <div className="bubles buble-18"></div>
      <div className="bubles buble-19"></div>
      <div className="bubles buble-20"></div>
      <div className="bubles buble-21"></div>
      <div className="bubles buble-22"></div>
      <div className="bubles buble-23"></div>
      <div className="bubles buble-24"></div>
      <div className="bubles buble-25"></div>
      <div className="bubles buble-26"></div>
      <div className="bubles buble-27"></div>
      <div className="bubles buble-28"></div>
      <div className="bubles buble-29"></div>
      <div className="bubles buble-30"></div>
      <div className="bubles buble-31"></div>
      <div className="bubles buble-32"></div>
      <div className="bubles buble-33"></div>
      <div className="bubles buble-34"></div>

      {/* <!-- Bubbles End --> */}

      <header className="header">
        <div className="banner">
          <h1 className="banner-h1">
            Welcome to{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stars"
              width="15"
              height="39"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg>
            EMPY?
          </h1>
          <br />
          <i id="nameput">
            Logged into:
            <b>
              <h1 id="inName"> {
              name ? <p>{name}</p> : <p>?</p>
            } </h1>
            </b>
          </i>
          <p className="banner-p banner-p1">
            Are you empty inside? Do you wish to learn something new, something
            to challannge your empty soul and fill it with the colors of
            knowladge.
          </p>
          <p className="banner-p banner-p2">
            Then you have clicked the right link, for you can enroll in coloring
            yourself with outstanding colors of{" "}
            <b
              title="Something excellent, impressive."
              style={{ color: "#013542" }}
            >
              <i>empy</i>
            </b>
            , what you want to learn or who you would love to become is just a
            button away with our 10/10 suggestions.
          </p>
          <span id="banner-button-cont">
            <a href="#main-start">
              <button className="banner-btn">Start Your Journey </button>
            </a>
          </span>
          {/* <svg width="50px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Arrow / Arrow_Down_SM">
                <path id="Vector" d="M12 7V17M12 17L16 13M12 17L8 13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg> */}
        </div>
      </header>

      {/* <!-- Banner End --> */}

      <div id="main-start"></div>
      <main>
        {/* <!-- Subjects Start --> */}

        <br />
        <br />
        <br />

        <div className="heading">
          <h1>Subjects:</h1>
        </div>

        <section className="IT main">
          <div className="IT-1 main-1"></div>
          <div className="IT-2 main-2">
            <h1>Learn I.T</h1>
            <h3>Kyu's Suggestions</h3>
            <p>Various career opportunities</p>
            <p>
              Information Technology studies will allow you to expand your
              career in a number of different ways. Technical writers, web
              developers, information technology directors, chief technology
              officers, and many other positions are in demand.
            </p>

            <p>
              IT has a lot to offer, including numerous job opportunities,
              competitive salaries, work–life balance and more. If you're ready
              to change careers, learn more about why IT is a great option for
              your next move. With growth, high wages and work–life balance, IT
              could be your next best move.
            </p>
            <Link to={"/suggestion"}>
              <button className="learnBtn">Learn I.T Now</button>
            </Link>
          </div>
        </section>

        <section className="graphic main">
          <div className="graphic-2">
            <h1>Learn Graphic Design</h1>
            <h3>Tois's Suggestions</h3>
            <p>
              Graphic design and motion graphics go hand-in-hand. By studying
              graphic design, you'll learn the basics of composition, colour,
              and typography, which are essential for creating effective
              visuals. You'll also develop problem-solving skills that will come
              in handy when designing for clients.
            </p>
            <p>
              Graphics should help to guide the viewers' focus to the important
              content on the page. Using visually strong graphic elements on a
              page can be useful in directing viewers' attention and providing
              structure for the page.
            </p>
            <Link to={"/suggestion"}>
              <button className="learnBtn">Learn Graphic Design Now</button>
            </Link>
          </div>
          <div className="graphic-1"></div>
        </section>

        <section className="VA main">
          <div className="VA-1 main-1"></div>
          <div className="VA-2 main-2">
            <h1>Learn Visual Artist</h1>
            <h3>Tom's Suggestions</h3>
            <p>
              The visual arts provide an essential outlet for creativity and
              emotions, make it possible for human history to be visually
              recorded, and create a space in which ideas can be expressed in
              ways other than words and writing.
            </p>
            <p>
              Visual art is a fundamental component of the human experience
              reflecting the world and the time in which we live. Art can help
              us understand our history, our culture, our lives, and the
              experience of others in a manner that cannot be achieved through
              other means.
            </p>
            <p>
              Generally speaking, there are five main functions of visual arts:
              artistic expression, functional, persuasive, and ceremonial as
              well as narrative. Visual arts are used in designing book covers,
              posters, clothing, apparel, accessories, packaging of food
              materials & a lot more things
            </p>
            <Link to={"/suggestion"}>
              <button className="learnBtn">Learn Visual Art Now</button>
            </Link>
          </div>
        </section>

        <div className="warning">
          <h1 id="randomSug"></h1>
          {/* <button onclick=remove()>&Cross;</button> */}
        </div>

        <div className="heading">
          <h1>Upcoming Features</h1>
        </div>

        {/* <!-- Subjects Start --> */}

        {/* <!-- Suggestions Start --> */}

        <section className="addBox">
          <img src="public/Psychics in San Diego_  Who are the Best Psychics and Mediums in San Diego_ - Famous Psychic Mediums.jpeg" width="100%" height="100%" id="suggImg" />
          <div id="suggADD">
            <h1>Suggestions!?</h1>
            <h3>
              Wanna help people with your own personal suggestion? <br /> Soon That Will Be Possible!!!{" "}
            </h3>
             <Link to={"/suggestion"}>
              <button>Just Click here</button>
            </Link>
          </div>
        </section>

        <hr/>

        <section className="upcoming">
          <img src="public/Meeting Customizable Isometric Illustrations _ Amico Style.jpeg" alt="img" width="70%" height="80%" />
          <h1>MEET!</h1>
          <h3>
            Platform for you to talk to our fellow subscribers <br /> and our
            company tutors.
          </h3>
          <p>coming soon...</p>
        </section>

        {/* <!-- Suggestions End --> */}
      </main>

      <div>
        {
        popup 
        ? 
        <div className='ads'>
              <p>Suggestions: {suggestion}</p>
              <button onClick={()=> setPopup(false)}>X</button>
        </div>
        :
        <div></div>
        }
      </div>
    </>
  );
}

export default Home