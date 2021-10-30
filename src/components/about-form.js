
import React from 'react';
import emailjs from 'emailjs-com';
import './about-form.css';


function Form1() {
  
        function sendEmail(e){
            e.preventDefault();
            emailjs.sendForm('gmail', 'template_jtzjexj', e.target, 'user_ICM54NQEAxQz5xivUr4K1')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
    
              e.target.reset();
        }
        
        return (
            <form onSubmit={sendEmail}>
            <div className = 'form-layout'>
                <div >
                    <input type="text" className="form-control" placeholder="Name" name="from_name"/>
                </div>

                <div>
                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                </div>

                <div>
                    <input type="text" className="form-control" placeholder="Number" name="number"/>
                </div>

                <div>
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>

                <div>
                    <input type="submit" className="btn btn-primary" value="Send Message"></input>
                </div>
            </div>
        </form>


             )
     
}
export default Form1;