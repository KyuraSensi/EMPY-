import { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
// import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const [data, setData] = useState();
  
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username)
    console.log(age)
    console.log(email)
    console.log(password)

    axios
    .post("http://localhost:4000/users", { username, age, email, password })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

    //  axios
    // .post("http://localhost:4000/login", { username, age, email, password })
    // .then((result) => {
    //   console.log(result)
    //   if(result.data) {
    //     console.log(result.data)
    //     alert("correct")
    //   } else {
    //     alert("wrong")
    //   }
    // })
    // .catch((err) => console.log(err));
      
      
    setUsername('')
    setAge('')
    setEmail('')
    setPassword('')
    
    navigate('/home')
    
  };
  
  // fetch('')
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   .catch(err => console.log(err))
  
    return (
      <>
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
              <h1>Sign Up/Log in</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="pop-inputs" method="get">
            <br />
            <div>
              <label>Username:</label>
              <input
                name="name"
                autoComplete="none"
                id="username"
                value={username}
                type="text"
                autoCorrect="hidden"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                name="age"
                id="age"
                type="number"
                min="8"
                max="100"
                autoComplete="none"
                value={age}
                required
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
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
           
           <div>
              {/* {data.map((index) => {
                <p>{index.name}</p>
              })} */}
            </div>
          </form>
        </div>
      </div>
    </>
      );
};

export default Signup;