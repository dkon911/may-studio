import React, { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import useNotificationStore from "@/stores/notificationStore" // Import the Zustand store
import { translations } from "@/i18n"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

const ContactForm = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const showNotification = useNotificationStore((state) => state.showNotification) // Get the action from the store

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS environment variables are not set!");
        showNotification("Email configuration is missing. Please contact support.", "error");
        setIsLoading(false);
        return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        from_email: formData.email,
        message: formData.message,
        to_email: "congntdgcd210309@fpt.edu.vn",
        subject: `Contact from ${formData.name} (${formData.email})`,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      // Use the Zustand store action to show the notification
      showNotification(t.emailSentSuccess || "Message sent successfully!", "success")

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending message:", error)
      showNotification(t.emailSentError || "Error sending message. Please try again.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-8 md:mb-12">{t.contactUs}</h2>

        <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">{t.yourName}</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t.yourNamePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
              className="text-base md:text-sm"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.yourEmail}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t.yourEmailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              required
              className="text-base md:text-sm"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.yourMessage}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t.yourMessagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[120px] text-base md:text-sm"
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.sending}
              </>
            ) : (
              t.sendMessage
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
