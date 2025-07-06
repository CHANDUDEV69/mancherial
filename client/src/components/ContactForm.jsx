import { useEffect, useState } from "react";
import "./ContactForm.css";


const ContactForm = () => {
  const [status, setStatus] = useState("Waiting...");

  useEffect(() => {
    setStatus("Fetching...");
    const fetchData = async () => {
      try {
        const res = await fetch("https://mancherial-production.up.railway.app/");
        const data = await res.json();
        setStatus(`✅ ${data.message}`);
      } catch (error) {
        setStatus("❌ Error fetching message");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ContactUs section-padding" id="ContactUs">
      <h2 className="text-white">Contact Us</h2>
      <p style={{ color: "white", fontWeight: "bold" }}>{status}</p>
      {/* rest of your existing JSX */}
    </div>
  );
};

export default ContactForm;
