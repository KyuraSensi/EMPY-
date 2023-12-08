/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // If theres an error

  const [wrongPass, setWrongPass] = useState(false)
  const [noUser, setNoUser] = useState(false)
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email)
    console.log(password)

     axios
    .post("https://kyu-server-fb54c82d9f3c.herokuapp.com/login", { email, password })
    .then((result) => {
      console.log(result)
      if(result.data == "Correct Password") {
        console.log(result.data)
        setEmail('')
        setPassword('')
        setNoUser(false)
        setWrongPass(false)
        navigate('/')
      } else if (result.data == "Wrong Password"){
        setWrongPass(true)
      } else {
        setNoUser(true)
      }
    })
    .catch((err) => console.log(err));
      

    
    
  };
  
    return (
      <>
       <nav className="navbar">
        

        <div className="navBtn nav-mid">

          <Link to={'/'} className='Link'>
            <h1 className="box logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stars"
                width="15"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
              EMPY?
            </h1>
          </Link>  

        </div>


      </nav>

      {/* <!-- Navbar End--> */}


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

      <div className="pop-cont">
        <div className="popup">
          <div id="pop-flex">
            <div id="pop-h">
              <h1>Login</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="pop-inputs loginInputs" method="get">
            <br />
            <div>
              <label>Email:</label>
              <input
                name="email"
                id="email"
                type="email"
                autoComplete="none"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            <br />
            <div>
              <label>Password:</label>
              <input
                name="password"
                id="password"
                type="password"
                value={password}
                minLength='8'
                required
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>


            <div className="pop-sub-cont">
              <button id="pop-sub" type="submit">
                Submit
              </button>
            </div>
             <Link to='/signup' id="login">
              <p>Do not have an <i>account?</i></p>
             </Link>
            <br/>
          </form>
        </div>
        {noUser ? <div className="wrongEmail"><h3>Email Does Not Exist</h3></div> : ''}
        {wrongPass ? <div className="wrongPassword"><h3>Incorrect Password</h3></div> : ''}
      </div>
    </>
      );
    };
    
export default Login;
