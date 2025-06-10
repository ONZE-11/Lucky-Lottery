"use client"

import type React from "react"
import { useState, useRef } from "react"
import type { ReactElement } from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function ContactSection(): ReactElement {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "fa"

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [submissionMessage, setSubmissionMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionStatus("loading")
    setSubmissionMessage("")

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmissionStatus("success")
        setSubmissionMessage(result.message)
        formRef.current?.reset() // Reset the form on success
      } else {
        setSubmissionStatus("error")
        setSubmissionMessage(result.message || "An unexpected error occurred.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
      setSubmissionMessage("Network error or server is unreachable.")
    }
  }

  // Encode the address for the Google Maps URL
  const address = "3333 Cavendish Boulevard, Suite:370 Montreal (Quebec) Canada H4B 2M5"
  const encodedAddress = encodeURIComponent(address)
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lawyer-primary dark:text-lawyer-accent-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">{t("contact.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card border-border shadow-md p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground">
                  {t("contact.getInTouch")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className={`flex items-start ${isRTL ? "space-x-reverse" : "space-x-4"}`}>
                  <Phone className="h-6 w-6 text-lawyer-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.phone")}</h3>
                    <p className="text-foreground/80">{t("footer.phoneValue1")}</p>
                    <p className="text-foreground/80">{t("footer.phoneValue2")}</p>
                  </div>
                </div>
                <div className={`flex items-start ${isRTL ? "space-x-reverse" : "space-x-4"}`}>
                  <Mail className="h-6 w-6 text-lawyer-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.email")}</h3>
                    <p className="text-foreground/80">{t("footer.emailValue1")}</p>
                    <p className="text-foreground/80">{t("footer.emailValue2")}</p>
                  </div>
                </div>
                <div className={`flex items-start ${isRTL ? "space-x-reverse" : "space-x-4"}`}>
                  <MapPin className="h-6 w-6 text-lawyer-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.address")}</h3>
                    <p className="text-foreground/80">{t("footer.addressValue")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-lg"
                title="Office Location Map"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-lawyer-secondary border-border shadow-md p-8 rounded-xl"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground mb-6 text-center">
              {t("contact.sendMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
              <div>
                <Label htmlFor="name" className="text-foreground">
                  {t("contact.name")}
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("contact.yourName")}
                  required
                  className="mt-1 bg-background border-border focus:ring-lawyer-accent focus:border-lawyer-accent"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground">
                  {t("contact.email")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  required
                  className="mt-1 bg-background border-border focus:ring-lawyer-accent focus:border-lawyer-accent"
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground">
                  {t("contact.subject")}
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder={t("contact.subjectInquiry")}
                  required
                  className="mt-1 bg-background border-border focus:ring-lawyer-accent focus:border-lawyer-accent"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground">
                  {t("contact.message")}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.yourMessage")}
                  rows={5}
                  required
                  className="mt-1 bg-background border-border focus:ring-lawyer-accent focus:border-lawyer-accent"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-lawyer-primary text-lawyer-primary-foreground hover:bg-lawyer-primary/90 transition-colors duration-200 py-3 text-lg rounded-md shadow-md"
                  disabled={submissionStatus === "loading"}
                >
                  {submissionStatus === "loading" ? t("contact.sending") : t("contact.sendButton")}
                </Button>
              </motion.div>
              {submissionStatus !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 text-center text-sm font-medium ${
                    submissionStatus === "success"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {submissionMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
