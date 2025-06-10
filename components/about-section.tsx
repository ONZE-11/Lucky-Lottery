"use client"

import { motion } from "framer-motion"
import { Lightbulb, Handshake, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function AboutSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "fa"

  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/lawyers-office-building.png"
              alt="Our Law Firm"
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div
            className={`flex-1 space-y-8 text-center md:text-left ${isRTL ? "md:text-right" : ""}`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lawyer-primary dark:text-lawyer-accent-foreground mb-4">
              {t("about.title")}
            </h2>
            <p className="text-lg text-foreground/80">{t("about.description")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-sm">
                <CardHeader className={`flex flex-row items-center pb-2 ${isRTL ? "space-x-reverse" : "space-x-3"}`}>
                  <Lightbulb className="h-6 w-6 text-lawyer-accent" />
                  <CardTitle className="text-lg font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground">
                    {t("about.expertise")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{t("about.expertiseDesc")}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-sm">
                <CardHeader className={`flex flex-row items-center pb-2 ${isRTL ? "space-x-reverse" : "space-x-3"}`}>
                  <Handshake className="h-6 w-6 text-lawyer-accent" />
                  <CardTitle className="text-lg font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground">
                    {t("about.clientCentered")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{t("about.clientCenteredDesc")}</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border shadow-sm">
                <CardHeader className={`flex flex-row items-center pb-2 ${isRTL ? "space-x-reverse" : "space-x-3"}`}>
                  <Users className="h-6 w-6 text-lawyer-accent" />
                  <CardTitle className="text-lg font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground">
                    {t("about.dedicatedTeam")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 text-sm">{t("about.dedicatedTeamDesc")}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
