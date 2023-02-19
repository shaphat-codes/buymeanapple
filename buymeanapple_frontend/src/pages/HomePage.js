import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'

import Modal from 'react-bootstrap/Modal';



const HomePage = (props) => {
  let {loginUser} = useContext(AuthContext)
  let {registerUser} = useContext(AuthContext)
  let {user, logoutUser} = useContext(AuthContext)

  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleShow = () => setShow(true);
  const handleShowRegister = () => setShowRegister(true);
  const handleClose = () => setShow(false);
  const handleRegisterClose = () => setShowRegister(false);

  const [noUser, setNoUser] = useState()

  
  const name = props.match.params.slug

  const userpage = async () => {
      
      
    const response = await fetch(`https://buymeanapple.herokuapp.com/${name}`,
    {
     method: 'GET',
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
      },
       
   }
   )
   
   console.log(response.status)
  
   if (response.status === 200){
      setNoUser(true)
     
   
   }
   
   const data = await response.json() 
   console.log(data)
   

   //console.log(data)
 
   console.log(data.user)
 }

        
 useEffect(() => {
    userpage()
  }, [])
	
	return (
		<div>
{!user ? 


<div>
    <div class="welcome-area" id="welcome">

        
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                        <h1>We provide a fun way for <strong>creators</strong><br/>to receive <strong>support </strong> from their <strong>audience</strong></h1>
                        <p onClick={handleShowRegister}>With buymeanapple, your audience can "buy you an apple" to support you. </p>
                        <a href="#features" class="main-button-slider"><Link onClick={handleShowRegister}>Get Started</Link></a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    




    <section class="section home-feature">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">

                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">Create a free Account</h5>
                                <p>You dont need to subscribe to our service or pay any upfront fee.</p>
                            </div>
                        </div>
         
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">A secure link is generated for you</h5>
                                <p>You can share this link with your audience through which they can support you.</p>
                            </div>
                        </div>
                   
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div class="features-small-item">
                                <div class="icon">
                                    <i><img src="assets/images/featured-item-01.png" alt=""/></i>
                                </div>
                                <h5 class="features-title">We take only 7% per support </h5>
                                <p>We only make money when you do. We charge 7% per every support you receive.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>









    <section class="section" id="testimonials">
        <div class="container">
           
            <div class="row">
                <div class="col-lg-12">
                    <div class="center-heading">
                        <h2 class="section-title">What do creators say about us?</h2>
                    </div>
                </div>
                <div class="offset-lg-3 col-lg-6">
                    <div class="center-text">
                        <p>Read what some creators have to say about buymeanapple</p>
                    </div>
                </div>
            </div>
         

            <div class="row">
                
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                            <div class="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Catherine Soft</h3>
                                <span>Twitter Influencer</span>
                            </div>
                        </div>
                    </div>
                </div>
          
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            <div class="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">Kelvin Wood</h3>
                                <span>Youtuber</span>
                            </div>
                        </div>
                    </div>
                </div>
                https://buymeanapple.herokuapp.com/#/khal
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="team-item">
                        <div class="team-content">
                            <i><img src="assets/images/testimonial-icon.png" alt=""/></i>
                            <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                            <div class="user-image">
                                <img src="http://placehold.it/60x60" alt=""/>
                            </div>
                            <div class="team-info">
                                <h3 class="user-name">David Martin</h3>
                                <span>Blogger</span>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
 </div>

:null}



<Modal show={showRegister} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={registerUser}>

					<input required type="text" className='form-control' name="username" placeholder="username"/> <br/>
					<input required type="email" className='form-control' name="email" placeholder="email"/> <br/>
					<input required type="text" className='form-control' name="phone_number" placeholder="phone number"/> <br/>
					<input required type="password" className='form-control' name="password1" placeholder="password"/> <br/>
					<input required type="password" className='form-control' name="password2" placeholder="confirm password"/> <br/>
					<div className="text-center"><input className="btn btn-outline-primary" type="submit"/></div> 

			</form>

			<p>Already have an account? sign in <Link onClick={handleShow}>here</Link></p>
			<br/>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>




<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={loginUser}>
					<label for="inputName4">Email</label> 	
		<input required type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="enter your email"/><br/>
					<label for="inputName4">Password</label> 	
		<input required type="password" class="form-control" id="exampleInputEmail1" name="password" placeholder="enter your password"/> <br/>


		<div className="text-center"><input className="btn btn-outline-primary" type="submit"/></div>

	</form>
<p>Dont have an account? register <Link onClick={handleShowRegister}>here</Link></p>
<br/><br/><br/><br/>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>



  

        
		</div>



		
		)
}
export default HomePage