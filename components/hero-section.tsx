"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Scale } from "lucide-react"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export default function HeroSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "fa"

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-lawyer-primary/5 to-lawyer-accent/5 dark:from-lawyer-primary/10 dark:to-lawyer-accent/10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className={`flex-1 text-center md:text-left space-y-6 ${isRTL ? "md:text-right" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-lawyer-primary dark:text-lawyer-accent-foreground">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto md:mx-0">{t("hero.description")}</p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "md:justify-end" : "md:justify-start"} pt-4`}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-lawyer-primary text-lawyer-primary-foreground hover:bg-lawyer-primary/90 transition-colors duration-200 rounded-full px-8 py-6 text-lg shadow-lg"
                  asChild
                >
                  <Link href="/contact">
                    {t("hero.consultationButton")} {isRTL ? null : <ArrowRight className="ml-2 h-5 w-5" />}
                    {isRTL ? <ArrowRight className="mr-2 h-5 w-5 rotate-180" /> : null}
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-lawyer-primary text-lawyer-primary dark:border-lawyer-accent-foreground dark:text-lawyer-accent-foreground hover:bg-lawyer-secondary/50 dark:hover:bg-lawyer-secondary/20"
                  asChild
                >
                  <Link href="/about">{t("hero.learnMoreButton")}</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-lawyer-primary/10 dark:bg-lawyer-primary/20 rounded-full opacity-70 blur-3xl animate-pulse"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                  className="bg-card p-8 rounded-full shadow-2xl border border-border"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-lawyer-primary to-lawyer-accent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    ></motion.div>
                    <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <Scale className="h-16 w-16 mx-auto text-lawyer-primary dark:text-lawyer-accent mb-4" />
                        <div className="text-2xl md:text-3xl font-bold text-foreground">{t("hero.legalExpertise")}</div>
                        <div className="text-lawyer-accent font-medium">{t("hero.compassionateGuidance")}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
