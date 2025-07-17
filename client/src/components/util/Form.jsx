import { useState } from "react";
const Form = () => {
          const [formData, setFormData] = useState({username: "", usermail: "", message: ""});
          const [responseStatus, setResponseStatus] = useState(false);
          function inputChangeHandler(e){
               setFormData((prev)=>{
                    return {...prev, [e.target.name]: e.target.value}
               })
          }
          async function formSubmitionHandler(e){
               e.preventDefault();
              try {
       const res = await fetch("https://mancherial-production.up.railway.app/contact", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData)
       });
     console.log(res)
       if (res.ok) {
          const data = await res.json();
         setResponseStatus(true);
         setFormData({ username: "", usermail: "", message: "" });
         console.log(data)
       } else {
          const errorData = await res.json(); // Use 'res' not 'result'
         alert("❌ Failed: " + (errorData?.error || "Unknown error"));
       }
     } 
     catch (err) {
       console.error("❌ Fetch failed:", err);
       alert("❌ Network error. Check your server or CORS.");
     }
     }
     return <div className="Form">
          {!responseStatus && 
          <form className="contactForm" onSubmit={formSubmitionHandler}>
                         <h3 className="text-white">Let’s Start Your Dream Home Today</h3>
                         <p className="text-white">
                              Ready to design your dream home or office? We’re just a call away.
                         </p>
                         <div className="formLayout">
                              <div className="form-control">
                                   <input type="text" name="username" id="username" placeholder="Your Name" value={formData.username} onChange={inputChangeHandler} required/>
                              </div>
                              <div className="form-control">
                                   <input type="email" name="usermail" id="usermail" placeholder="Your Email" value={formData.usermail} onChange={inputChangeHandler} required/>
                              </div>
                              <div className="form-control full">
                                   <input type="text" name="message" id="message" placeholder="message" value={formData.message} onChange={inputChangeHandler} required/>
                              </div>
                         </div>
                                  <div className="form-control btn-control">
                                   <input type="submit" value="submit"/>
                              </div>
                              </form>}
                              {responseStatus && <div className="thankYouMessage">
                                   <h3 className="text-white text-center">
                                        Thank You
                                   </h3>
                                   <p className="text-white text-center py-1">
                                        Your message has been received. We'll get back to you soon.
                                   </p>
                              </div>}
     </div>
}

export default Form;