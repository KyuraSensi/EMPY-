/* eslint-disable react/no-unknown-property */
import {  useEffect, useRef, useState } from "react";
import "./about.css";
import axios from "axios";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser'

const About = () => {
 const form = useRef();

 const [user, setUser] = useState('');
 const [comments, setComments] = useState('');
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [display, setDisplay] = useState([]);

 const [loading, setLoading] = useState(false);
 
 
 const handleComment = () => {
 
  //  e.preventDefault()

     axios
     .post("http://localhost:4000/comments", { user:name, comments })
     .then(result => {
       setComments('')
       console.log(result)
       setDisplay([...display,{user,comments,_id : crypto.randomUUID()}])
     })
     .catch(err => console.log(err))     
     console.log(comments)
    }
    
    useEffect(()=>{
      
      setLoading(true)
      emailjs.sendForm(
        'service_ln4tzfu',
        'template_7jtzzkh',
        form.current,
        'cg1tDmBLgyDdfXfmh'
        ).then(email => {
          console.log(email + " " + 'Sent!!')
        })
        .catch(err => {
          console.log(err)
        })
        
     fetch('http://localhost:4000/comments')
     .then(res => res.json())
      .then(data => { 
        console.log(data)
        setDisplay(data)
        setLoading(false);
      })
   .catch(err=>console.log(err))
   
   fetch('http://localhost:4000/users')
   .then(res => res.json())
   .then(data => setName(data[data.length -1].username))
   .catch(err=>console.log(err))
   
   fetch('http://localhost:4000/users')
   .then(res => res.json())
   .then(data => setEmail(data[data.length -1].email))
   .catch(err=>console.log(err))
   
  },[])
  
  const handleDelete = (id) => {
    setLoading(true)

    axios.delete('http://localhost:4000/delete/' + id)
    .then(result => {
      let res = display.filter((item)=>item._id !== id)
      setDisplay(res)
      console.log(result.data)
    })
    .catch(err => {
      console.log(err)
    })

    setLoading(false)
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
                  people who have struggles finding their creative selfs. We help
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
                  Our site is still being updated bare with us where we lack please, if you notice something that can help us better the site please comment it down.
                </p>
                <p>
                  This site was specifically created to help you out with suggestions of the best teachers for our available courses, we did not employe any of the teachers or tutors you will see. 
                  <br/><br/>
                  <span>THANK YOU FOR CHOOSING EMPY?</span>
                </p>
              </div>
              
            </section>

            <section className="about-feedback">
              <h3 id="feed">Feedback</h3>
              <br/>
            
              <h5>How has your experiance been so far, any suggestions:</h5>

              <br/>
              <form ref={form} className='form' onSubmit={handleComment}>
                <div>
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="style=fill">
                  <g id="profile">
                  <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6.5C6.75 3.6005 9.1005 1.25 12 1.25C14.8995 1.25 17.25 3.6005 17.25 6.5C17.25 9.3995 14.8995 11.75 12 11.75C9.1005 11.75 6.75 9.3995 6.75 6.5Z" fill="#000000"/>
                  <path id="rec (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M4.25 18.5714C4.25 15.6325 6.63249 13.25 9.57143 13.25H14.4286C17.3675 13.25 19.75 15.6325 19.75 18.5714C19.75 20.8792 17.8792 22.75 15.5714 22.75H8.42857C6.12081 22.75 4.25 20.8792 4.25 18.5714Z" fill="#000000"/>
                  </g>
                  </g>
                  </svg>
                  <p className='input1' autoComplete="none" type="text" placeholder="Name" name="from_name" onChange={()=> setUser(name)}>{name}</p>
                </div>

                <br/>

                <div>
                  <svg width="20px" height="20px" viewBox="0 -2.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <title>email [#1573]</title>
                      <desc>Created with Sketch.</desc>
                      <defs>
                  </defs>
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#000000">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#1573]">
                  </path>
                              </g>
                          </g>
                      </g>
                  </svg> 
                  <p className='input1' autoComplete="none" type="text" placeholder="email" name="email_from">{email}</p>
                </div>

                <br/>
                
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
                <button type="submit">Submit</button> 
                <br/>
                <br/>

                <h2 className="comTitle">Comments</h2>
                
              </form>
                <br/>

                { loading
                ?
                <h3 className="Loader">Loading...</h3>
                :
              <div> { 
              display.map((item)=>(
                 <div className='commentsBox' key={item._id}>
                  <div className='comments'>
                    <div className="texts">
                      <h4>
<svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>profile_favorite [#1334]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2199.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M22.6446428,2043.90844 C22.4684473,2044.08303 22.3882684,2044.33387 22.4298427,2044.57969 L22.6961156,2046.15397 C22.7792641,2046.64461 22.3942076,2047.04294 21.9586681,2047.04294 C21.8438441,2047.04294 21.7250606,2047.01485 21.6102366,2046.95364 L20.2155204,2046.21015 C20.1066355,2046.15196 19.9868622,2046.12286 19.8670888,2046.12286 C19.7473155,2046.12286 19.628532,2046.15196 19.5186572,2046.21015 L18.1239411,2046.95364 C18.009117,2047.01485 17.8903335,2047.04294 17.7755095,2047.04294 C17.33997,2047.04294 16.9559034,2046.64461 17.038062,2046.15397 L17.3053248,2044.57969 C17.3468991,2044.33387 17.2657304,2044.08303 17.0895348,2043.90844 L15.9610917,2042.79371 C15.5166434,2042.35424 15.7621293,2041.58968 16.375844,2041.49937 L17.9358672,2041.2696 C18.1793734,2041.23449 18.3902141,2041.07896 18.4990989,2040.85521 L19.1959621,2039.42242 C19.333553,2039.14047 19.6008158,2039 19.8670888,2039 C20.1343517,2039 20.4006247,2039.14047 20.5382155,2039.42242 L21.2360686,2040.85521 C21.3449534,2041.07896 21.5548043,2041.23449 21.7993003,2041.2696 L23.3583336,2041.49937 C23.9720483,2041.58968 24.2175342,2042.35424 23.773086,2042.79371 L22.6446428,2043.90844 Z M11.8927571,2050.87478 C11.8779091,2050.87478 11.8650409,2050.87277 11.850193,2050.87277 C11.8363349,2050.87277 11.8224768,2050.87478 11.8086188,2050.87478 C10.7365978,2050.8517 9.87046813,2049.96373 9.87046813,2048.87207 C9.87046813,2047.76536 10.7583747,2046.86535 11.850193,2046.86535 C12.9420113,2046.86535 13.8299179,2047.76536 13.8299179,2048.87207 C13.8299179,2049.96373 12.9637882,2050.8517 11.8927571,2050.87478 L11.8927571,2050.87478 Z M14.8455167,2051.46977 C15.6671025,2050.49852 16.0630475,2049.14699 15.6364168,2047.6851 C15.2434414,2046.33758 14.1248969,2045.27301 12.7717549,2044.96398 C10.1842545,2044.373 7.89074327,2046.35062 7.89074327,2048.87207 C7.89074327,2049.86841 8.26194168,2050.76742 8.85486928,2051.46977 C6.29805462,2052.52732 4.4093971,2054.98354 4.00949268,2057.86319 C3.92634423,2058.46421 4.40048834,2059 4.99836525,2059 C5.48834715,2059 5.90210965,2058.63578 5.97041015,2058.14413 C6.37922334,2055.22736 8.83804161,2052.90257 11.8086188,2052.8815 C11.8224768,2052.8815 11.8363349,2052.88552 11.850193,2052.88552 C11.8650409,2052.88552 11.8779091,2052.8815 11.8927571,2052.8815 C14.8623444,2052.90257 17.3221525,2055.22736 17.7299758,2058.14514 C17.7992662,2058.63578 18.2130287,2059 18.7020207,2059 L18.7030106,2059 C19.3008875,2059 19.7740417,2058.46421 19.6908933,2057.8642 C19.2919787,2054.98354 17.4023314,2052.52932 14.8455167,2051.46977 L14.8455167,2051.46977 Z" id="profile_favorite-[#1334]">

</path>
            </g>
        </g>
    </g>
</svg>{item.user}</h4>
                      <p>{item.comments}</p>
                    </div>

                    <div className="mentsBtns">
                      {/* <div className='checkbox' title='Edit' onClick={() => handleEdit(item._id)}><img src='public/pencil.png' height='50%' width='50%'/></div>                      */}
                      <button title='DELETE' onClick={() => handleDelete(item._id)}><img src='public/bin.png' height='50%' width='50%'/></button>
                    </div>
                  </div>
                </div>
              ))
              
              }</div>
              
              }
                <br/>
            </section>
          </div>

        <Link to='/profile'>
            <button className="profileButton" title="Profile">
                    <svg fill="#ffffff" width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"></path></g></svg>
            </button>
        </Link>
      </main>
    </>
  )
}

export default About