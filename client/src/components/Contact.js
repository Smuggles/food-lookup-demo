import React, { Component } from 'react';


class Contact extends Component {

  render() {

    return (
      <section id="contact" className="section-padding wow fadeIn delay-05s">
             <div className="container">
               <div className="row">
                 <div className="col-md-12">
                   <div className="contact-sec text-center">
                     <h2>Want To <span className="deco">Hire</span> Me?</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                   </div>
                 </div>
                 <div className="col-md-8 col-md-push-2">
                   <div id="sendmessage">Your message has been sent. Thank you!</div>
                   <div id="errormessage" />
                   <form action method="post" role="form" className="contactForm">
                     <div className="form-group">
                       <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                       <div className="validation" />
                     </div>
                     <div className="form-group">
                       <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                       <div className="validation" />
                     </div>
                     <div className="form-group">
                       <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                       <div className="validation" />
                     </div>
                     <div className="form-group">
                       <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                       <div className="validation" />
                     </div>
                     <div className="text-center"><button type="submit" className="btn btn-primary btn-lg">Send Message</button></div>
                   </form>
                 </div>
               </div>
             </div>
           </section>

    );
  }
}

export default Contact;
