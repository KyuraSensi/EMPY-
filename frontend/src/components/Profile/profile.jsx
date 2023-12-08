import './profile.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Profile = () => {


    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('')

    const [newUsername ,setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAge, setNewAge] = useState('')
    




    const [update, setUpdate] = useState(true);

    useEffect(()=>{
        fetch('https://kyu-server-fb54c82d9f3c.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            setName(data[data.length -1].username)
            setEmail(data[data.length -1].email)
            setAge(data[data.length -1].age)
            setId(data[data.length -1]._id)
        })
    }, [])

    function handleUpdate() {
        setUpdate(false)
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    function handleEdit(id) {

        axios.put(`https://kyu-server-fb54c82d9f3c.herokuapp.com/users/${id}`, {
                newUsername,
                newEmail,
                newPassword,
                newAge
        })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
        navigate('/')
        setUpdate(true)
    }

    

    function cancelEdit() {
        setUpdate(true)
    }


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
          {/* <!-- Bubble End --> */}

        <div className='profilePopUpCont'>
            <div className="profilePopUp">
                <div className='profileIco'>
                    {
                     update
                     ?
                     <div>
                         <svg fill="#000000" width="73px" height="73px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"> <title>profile</title> <path d="M28 9h-1.958v-2.938l-4.042-0.062 0.021 3h-12.146l0.083-3-3.958 0.062v3l-2-0.062c-1.104 0-2 0.896-2 2v14c0 1.104 0.896 2 2 2h24c1.104 0 2-0.896 2-2v-14c0-1.104-0.896-2-2-2zM23 7h2v4h-2v-4zM10 13.812c1.208 0 2.188 1.287 2.188 2.875s-0.98 2.875-2.188 2.875-2.188-1.287-2.188-2.875 0.98-2.875 2.188-2.875zM7 7h2v4h-2v-4zM5.667 22.948c0 0 0.237-1.902 0.776-2.261s2.090-0.598 2.090-0.598 1.006 1.075 1.434 1.075c0.427 0 1.433-1.075 1.433-1.075s1.552 0.238 2.091 0.598c0.633 0.422 0.791 2.261 0.791 2.261h-8.615zM26 22h-9v-1h9v1zM26 20h-9v-1h9v1zM26 18h-9v-1h9v1zM26 16h-9v-1h9v1z"></path> </g></svg>
                         <h1 className='profileTitle'>Current Details</h1>
                     </div>
                     :
                     <div>
                         <svg fill="#ffffff" width="75px" height="75px" style={{marginTop: "9px"}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"></path></g></svg>
                         <h1 className='profileTitle'>Edit Details</h1>                    
                     </div>

                    }
                </div>

                <form onSubmit={handleForm} className='profileH1'>
                    <div>
                     <h2>Name: </h2>
                     { update 
                     ?
                     <span>{name}</span>
                     :
                     <input placeholder={name} type='text' onChange={(e) => setNewUsername(e.target.value)} required/>
                     }
                    </div>
                    <div>
                     <h2>Email:</h2>
                     { update 
                     ?
                     <span>{email}</span>
                     :
                     <input placeholder={email} type='email' onChange={(e) => setNewEmail(e.target.value)} required/>
                     }
                    </div>
                    <div>
                     <h2>Password:</h2>
                     { update 
                     ?
                     <span>Cannot Disclose</span>
                     :
                     <input placeholder='Password of minimum 8 characters' type='password' minLength='8' onChange={(e) => setNewPassword(e.target.value)} required/>
                     }
                    </div>
                    <div>
                     <h2>Age: </h2>
                     { update 
                     ?
                     <span>{age}</span>
                     :                     
                     <input placeholder={age} type='number' min='8' onChange={(e) => setNewAge(e.target.value)} required/>
                     }
                    </div>
                    {
                     update
                     ?
                     <div></div>
                     :
                     <div>
                         <button onClick={()=> handleEdit(id)} type='submit'>Update</button>
                         <br/>
                         <br/>
                         <button style={{color: 'black', backgroundColor: 'wheat'}} onClick={()=> cancelEdit()} type='submit'>Cancel Update</button>
                     </div>
                    }
                     
                </form>

                <div className='profileBtn'>
                    {
                     update
                     ?
                     <div>
                      {/* <button title='Logout' onClick={() => handleDelete(id)}><img src='public/bin.png' height='30px' width='30px'/></button> */}
                      <button onClick={()=> handleUpdate()} title='Edit'><svg fill="#000000" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 36.9765 21.5781 L 34.2812 18.8828 L 35.9452 17.2422 C 36.6952 16.5156 37.5390 16.4453 38.2187 17.125 L 38.7343 17.6406 C 39.4140 18.3203 39.3436 19.1406 38.6171 19.9140 Z M 20.6874 37.7969 L 17.5702 38.9687 C 17.0546 39.1562 16.5155 38.6875 16.7499 38.125 L 18.0390 35.1016 L 32.9218 20.2422 L 35.6171 22.9140 Z"></path></g></svg></button>
                     </div>
                     :
                     <div></div>
                    }
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Profile