
import emailjs from "@emailjs/browser";
// src/components/Contact.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
//import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 emailjs
      .sendForm(
        "service_y9e8fya",  // Replace with your EmailJS Service ID
        "template_0v2i7gj",  // Replace with your EmailJS Template ID
        form.current,
        "UypiQgBfjkAXLwI-R"  // Replace with your EmailJS Public Key
      )
    
    
    
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Let’s <span className="text-primary">Connect</span>
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-sm md:text-base">
          Feel free to reach out if you’d like to collaborate, share feedback, or just say hi!
        </p>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-800/30 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto border border-gray-200 dark:border-gray-800"
        >
          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 shadow-md shadow-primary/30 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Toast Container */}
        <ToastContainer position="bottom-right" autoClose={3000} theme="colored" />
      </div>
    </section>
  );
}
