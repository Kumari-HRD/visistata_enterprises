// src/pages/Contact.jsx
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Footer from "../components/Footer";
import {
  StyledColoredDiv,
  StyledPrimaryButton,
} from "../components/styled-components";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "enquiries"), {
        fullname: formData.fullname,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });
      alert("Form submitted successfully!");
      setFormData({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting form. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="py-4 px-4">
        <div className="mb-6">
          <h1 className="text-6xl space-grotesk text-center">
            Get in Touch
          </h1>
          <p className="mb-3 text-muted-foreground text-center">
            Have questions about our courses or enrollment? We're here to help.
          </p>
        </div>

        <div style={{ maxWidth: "896px", margin: "auto" }}>
          <StyledColoredDiv className="grid grid-nogutter radius border-1">
            {/* CONTACT INFORMATION */}
            <div className="p-4 col-12 md:col-6">
              <div className="mb-4">
                <h3 className="text-2xl space-grotesk tracking-tight">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mt-2">
                  You can also reach us directly through the channels below.
                </p>
              </div>

              <div>
                {/* EMAIL */}
                <div className="flex gap-3 mb-4">
                  <div className="contactIcon-background border-circle">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:visistata@hotmail.com"
                      className="text-muted-foreground"
                    >
                      visistata@hotmail.com
                    </a>
                  </div>
                </div>

                {/* ================= PHONE (COMMENTED FOR FUTURE USE) ================= */}
                {/*
                <div className="flex gap-3 mb-4">
                  <div className="contactIcon-background border-circle">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+919035920555"
                      className="text-muted-foreground"
                    >
                      (+91) &nbsp; 9035920555
                    </a>
                  </div>
                </div>
                */}
                {/* ================= END PHONE ================= */}

                {/* OFFICE ADDRESS */}
                <div className="flex gap-3">
                  <div className="contactIcon-background border-circle">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-muted-foreground">
                      #63, Muddinapalya Main Road, Muneshwara Layout,
                      Gidadakonenahalli, Bengaluru, Karnataka 560091
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEND MESSAGE */}
            <div className="p-4 col-12 md:col-6">
              <div className="mb-4">
                <h3 className="text-2xl space-grotesk tracking-tight">
                  Send us a Message
                </h3>
                <p className="text-muted-foreground mt-2">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-column gap-2">
                  <label className="font-semibold">Full Name</label>
                  <InputText
                    name="fullname"
                    placeholder="Shiva Kumar"
                    value={formData.fullname}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-column gap-2 mt-3">
                  <label className="font-semibold">Email</label>
                  <InputText
                    name="email"
                    placeholder="shiva@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-column gap-2 mt-3">
                  <label className="font-semibold">Subject</label>
                  <InputText
                    name="subject"
                    placeholder="Course Inquiry regarding Web Development"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-column gap-2 mt-3">
                  <label className="font-semibold">Message</label>
                  <InputTextarea
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <StyledPrimaryButton
                  className="w-full mt-3"
                  label={loading ? "Submitting..." : "Submit"}
                  icon="pi pi-arrow-right"
                  iconPos="right"
                />
              </form>
            </div>
          </StyledColoredDiv>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
