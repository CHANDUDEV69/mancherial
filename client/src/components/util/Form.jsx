import { useState } from "react";

const Form = () => {
  const [validMobile, setValideMobile] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    userPhone: "",
    message: "",
  });
  const [responseStatus, setResponseStatus] = useState(false);

  function inputChangeHandler(e) {
    if(e.target.name === "userPhone"){
          if(userPhone.length>=10 && userPhone.length >=10){
            setValideMobile(true);
          }
          else{
            setValideMobile(false);
          }
    }
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
function mobileValidation(e) {
  const { name, value } = e.target;
  // Only accept up to 10 digits
  if (/^\d{0,10}$/.test(value)) {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
}

  async function formSubmitionHandler(e) {
    e.preventDefault();
    console.log("Submitting form with data:", formData);

    if(
      !formData.username.trim() ||
      !formData.userPhone.trim() ||
      !formData.message.trim()
    ) {
      alert("❌ Failed! All fields are required.");
      return;
    }
    if(validMobile){
      try {
      const res = await fetch("https://backend-timx.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setResponseStatus(true);
        setFormData({
          username: "",
          userPhone: "",
          message: "",
        });
        console.log(data);
      } else {
        const errorData = await res.json();
     //    console.log(errorData);
        alert("❌ Failed: " + (errorData?.error || "Unknown error"));
      }
    } catch (err) {
      console.error("❌ Fetch failed:", err);
      alert("❌ Network error. Check your server or CORS.");
    }
    }
    
  }

  return (
    <div className="Form">
      {!responseStatus && (
        <form className="contactForm" onSubmit={formSubmitionHandler}>
          <h3 className="text-white">Let’s Start Your Dream Home Today</h3>
          <p className="text-white">
            Ready to design your dream home or office? We’re just a call away.
          </p>
          <div className="formLayout">
            <div className="form-control">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Your Full Name"
                value={formData.username}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="userPhone"
                id="userPhone"
                placeholder="Your Phone Number"
                value={formData.userPhone}
                onChange={mobileValidation}
                pattern="\d{10}"
                title="Phone number must be 10 digits"
                required
              />
              {!validMobile && <span className="errTxt">Enter Valide Number</span>}
            </div>
        
            <div className="form-control full">
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={inputChangeHandler}
                required
              />
            </div>
          </div>
          <div className="form-control btn-control">
            <input type="submit" value="Submit" />
          </div>
        </form>
      )}
      {responseStatus && (
        <div className="thankYouMessage">
          <h3 className="text-white text-center">Thank You</h3>
          <p className="text-white text-center py-1">
            Your message has been received. We'll get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
