import {  useEffect, useRef, useState } from "react";
import "./about.css";
import axios from "axios";
import emailjs from '@emailjs/browser'

const About = () => {
 const form = useRef()
 
 
 const [user, setUser] = useState('');
 const [comments, setComments] = useState('');
 
 const [reload, setReload] = useState(true)
//  const [reload2, setReload2] = useState(false)

//  const [sent, setSent] = useState(false);
 
 const [display, setDisplay] = useState([]);
 
 
 useEffect(()=>{
   fetch('http://localhost:4000/comments')
   .then(res => res.json())
   .then(data => {
     setDisplay(data)
     console.log(data)
   })
   .catch(err=>console.log(err))
 },[])
 
//  useEffect(()=>{},[])
 const handleDelete = (id) => {
   axios.delete('http://localhost:4000/delete/' + id)  // For delete
   .then(result => {
    console.log(result.data)
    // setReload(true)
    let res = display.filter((item)=>item._id !== id)
    setDisplay(res)
  })
   .catch(err => {
    console.log(err)
  })
  }
const handleEdit = (id) => {
  axios.put('http://localhost:4000/update/' + id)  // For update
  .then(result => {
    console.log(result)
    // setReload(true)
  })
  .catch(err => {
    console.log(err)
    // setReload(true)
  })
}

console.log(display)
const handleComment = (e) => {

  
  e.preventDefault()
  
  axios
  .post("http://localhost:4000/comments", { user, comments })
  .then(result => {
    console.log(result)
    setDisplay([...display,{user,comments,_id : crypto.randomUUID()}])
  })
  .catch(err => console.log(err))
  
  emailjs.sendForm(
    'service_ln4tzfu',
    'template_7jtzzkh',
    form.current,
    'cg1tDmBLgyDdfXfmh'
    ).then(email => {
      console.log(email + " " + 'Sent!!')
        // setSent(true)
        setComments('')      
        setUser('')
    })
    .catch(err => {
      console.log(err)
    })
    
    console.log(comments)
    
    
  }
  
  
  return (
    <>
        <main>
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

          <div className="about-h1">
            <h1>About Us</h1>
          </div>

        
          <div>

            
            <section className=" about-img">
              <div className="firstdiv">
                <img src="d1fcd624-b38a-4ce4-a5a6-e0499cdcac10.jpeg" className="about-img" alt="img of myself" width='100%' height='100%'/>
              </div>

              <div className="seconddiv">
                <p>
                  Created in 2023 by <i>Thubelihle Ndlangamandla</i> / Kyu, EMPY? was created to help
                  people who have a struggles finding their creative selfs. We help
                  people of all ages, all colors black, white, yellow or green and
                  people of disabilities who need our help.
                </p> 
                <p>
                  We only provide assistance in our provided sections. We do not require
                  any type of payment for our short time assistance, for we want to help
                  as much as we can where possible for the love of Art.
                </p>
                <p>
                  We have planty of available spaces for those who wish to help us grow.
                  Maybe you want to teach, help promote us or even sponser us. Please
                  feel free for we would really appreciate that a lot.
                </p>
                <p>
                  Please note that our numbers , socials and branches are not fake. If
                  you truly need our help, dont be scared to call or visit us for no
                  amount at all for short setions and a specified amount for longer
                  section.
                </p>
                <p>
                  This site was specifically created to help you out with suggestions of the best teachers for our available courses, we did not employe any of the teachers or tutors you will see. 
                  <br/><br/>
                  <span>THANK YOU FOR CHOOSING EMPY?</span>
                </p>
              </div>
              
            </section>

            <section className="about-feedback">
              <h3>Feedback</h3>
              <br/>
            
              <h5>How has your experiance been so far, any suggestions:</h5>

              <br/>
              <form ref={form} onSubmit={handleComment}>
                <input className='input1' autoComplete="none" type="text" placeholder="Name" name="from_name" value={user} onChange={(e)=> setUser(e.target.value)}
 required/>
                <br />
                <textarea
                  name="message"
                  className='input2'
                  autoComplete="none"
                  minLength='10'
                  cols='20'
                  rows='5'
                  type="textarea"
                  value={comments}
                  placeholder="How has your experience been... any *suggestions?"
                  required
                  onChange={(e)=> setComments(e.target.value)}
                />
                <br />
                {/* <button type="submit">Submit</button> */}
                <button onClick={() => setReload(!reload)} type="submit">Submit</button> 
                <br/>
                <br/>

                <h2 className="comTitle">Comments</h2>
                
                  {/* { display.map((item)=>(
                        <div className='comments' key={item._id}>
                          <h4>{item.user}:</h4>
                          <p>{item.comments}Update the comment section it looks terrible</p>

                          <button onClick={() => handleDelete(item._id)}>&times;</button>
                          </div>
                          ))
                } */}


              </form>
                <br/>
              {  
               
              display.map((item)=>(
                 <div className='commentsBox' key={item._id}>
                  <div className='comments'>
                    <div className="texts">
                      <h4>{item.user}</h4>
                      <p>{item.comments}</p>
                    </div>

                    <div className="mentsBtns">
                      <div className='checkbox' title='Edit' onClick={() => handleEdit(item._id)}><img src='public/pencil.png' height='50%' width='50%'/></div>                     
                      <button title='DELETE' onClick={() => handleDelete(item._id)}><img src='public/bin.png' height='50%' width='50%'/></button>
                    </div>
                  </div>
                </div>
              ))
              
              }
                <br/>
            </section>
          </div>
      </main>
    </>
  )
}

export default About