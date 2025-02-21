import React, { useState } from "react"
import { useLanguage } from "../LanguageContext"
import { translations } from "../i18n"
import emailjs from "@emailjs/browser"
import Notification from "./Notification"

const ContactForm = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Replace these values with your EmailJS account details
      const serviceId = 'service_73dhknp';
      const templateId = 'template_ckis47t';
      const publicKey = 'gwK4ALM44kQQkt5fB';

      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        message: formData.message,
        to_email: "congntdgcd210309@fpt.edu.vn",
        subject: `Contact from ${formData.name} (${formData.email})`,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setNotification({
        isVisible: true,
        message: t.emailSentSuccess || "Message sent successfully!",
        type: "success",
      })

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      setNotification({
        isVisible: true,
        message: t.emailSentError || "Error sending message. Please try again.",
        type: "error",
      })
    }
  }

  const closeNotification = () => {
    setNotification((prevState) => ({ ...prevState, isVisible: false }))
  }

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">{t.contactUs}</h2>

        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            {t.send}
          </button>
        </form>
      </div>
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={closeNotification}
      />
    </section>
  )
}

export default ContactForm

