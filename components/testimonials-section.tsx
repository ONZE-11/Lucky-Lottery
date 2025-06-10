"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "react-i18next"

export default function TestimonialsSection() {
  const { t } = useTranslation()

  const testimonials = [
    {
      quote: t("testimonials.quote1"),
      name: "Maria S.",
      title: t("testimonials.title1"),
      avatar: "/happy-woman-smiling.png",
    },
    {
      quote: t("testimonials.quote2"),
      name: "Ahmed K.",
      title: t("testimonials.title2"),
      avatar: "/happy-man-smiling.png",
    },
    {
      quote: t("testimonials.quote3"),
      name: "Li W.",
      title: t("testimonials.title3"),
      avatar: "/happy-asian-woman.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-lawyer-secondary/30 dark:bg-lawyer-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lawyer-primary dark:text-lawyer-accent-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">{t("testimonials.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border shadow-md p-6 flex flex-col items-center text-center">
                <Quote className="h-10 w-10 text-lawyer-accent mb-4" />
                <CardContent className="flex-grow">
                  <p className="text-foreground/80 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-3 border-2 border-lawyer-accent">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
