import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const FORMSPREE_URL = "https://formspree.io/f/mzzjdvwk";

  function handleChange(e) {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill in name, email and message.");
      return;
    }
    
    setSending(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        alert("Thank you for your message! I'll get back to you soon.");
      } else {
        setSubmitStatus("error");
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      alert("There was an error sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="animate-slide-right space-y-6">
            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <a
                  href="mailto:dkdhilip777@gmail.com"
                  className="text-gray-400 hover:text-purple-400"
                >
                  dkdhilip777@gmail.com
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <a
                  href="tel:+916379889634"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  +91 6379889634
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Location</h4>
                <div className="text-gray-400">Marakkanam - 604 303, Tamil Nadu</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="glass rounded-3xl p-8">
              <div className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Your Name</label>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">Your Email</label>
                  <input
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="subject">Subject</label>
                  <input
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    id="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}