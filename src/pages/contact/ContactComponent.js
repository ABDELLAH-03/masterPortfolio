import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import emailjs from "@emailjs/browser";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

const Contact = (props) => {
  const { theme, onToggle } = props;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init("k0mm4-z_vN1bFcBkE");
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    else if (formData.message.length < 10)
      e.message = "Too short (min 10 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      // In v3, you don't need to pass the Public Key in the send method
      // because we called init() above.
      await emailjs.send("service_qdc0kwu", "template_05lx299", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
    }
    setIsSubmitting(false);
  };

  const contactItems = [
    {
      label: "Email",
      value: "abdellah.chahdi.03@gmail.com",
      href: "mailto:abdellah.chahdi.03@gmail.com",
    },
    { label: "Phone", value: "+212 688 967 390", href: "tel:+212688967390" },
    { label: "Location", value: "Salé, Morocco", href: "#" },
  ];

  return (
    <div className="contact-main">
      <Header theme={theme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button text="See My Resume" href="/resume" theme={theme} />
              </div>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1000} distance="40px">
          <div className="address-heading-div">
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
              <div className="contact-info-glass">
                {contactItems.map((c) => (
                  <a key={c.label} href={c.href} className="glass-item">
                    <div className="glass-icon">
                      {c.label === "Email" && "📧"}
                      {c.label === "Phone" && "📱"}
                      {c.label === "Location" && "📍"}
                    </div>
                    <div className="glass-text">
                      <div
                        className="glass-label"
                        style={{ color: theme.secondaryText }}
                      >
                        {c.label.toUpperCase()}
                      </div>
                      <div
                        className="glass-value"
                        style={{ color: theme.text }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="contact-form">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  Send a Message
                </h1>

                {submitted && (
                  <p className="success-message">
                    ✓ Message sent successfully!
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="contact-input"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="contact-input"
                />

                <textarea
                  placeholder="Write your message..."
                  rows="6"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="contact-input contact-textarea"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="send-btn"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Contact;
