"use client"

import { motion } from "framer-motion"
import { Gavel, Twitter, Linkedin, Facebook } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "react-i18next"
import Link from "next/link"

export default function Footer() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "fa"

  return (
    <motion.footer
      className="bg-lawyer-primary text-lawyer-primary-foreground py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 ${isRTL ? "md:grid-cols-[2fr_1fr_1fr_1fr]" : ""}`}>
          <div className="col-span-1 md:col-span-2 space-y-4">
            <motion.a
              href="/"
              className={`flex items-center gap-2 text-3xl font-bold text-lawyer-accent-foreground ${isRTL ? "flex-row-reverse justify-end" : ""}`}
              initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Gavel className="h-8 w-8 text-lawyer-accent" />
              ImmigrantLaw
            </motion.a>
            <p className="text-lawyer-primary-foreground/80 max-w-md">{t("footer.tagline")}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-lawyer-accent-foreground">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-lawyer-primary-foreground/80">
              <li>
                <Link href="/services" className="hover:text-lawyer-accent transition-colors">
                  {t("navbar.services")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lawyer-accent transition-colors">
                  {t("navbar.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-lawyer-accent transition-colors">
                  {t("navbar.testimonials")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lawyer-accent transition-colors">
                  {t("navbar.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-lawyer-accent-foreground">{t("footer.contactInfo")}</h3>
            <ul className="space-y-2 text-lawyer-primary-foreground/80">
              <li>
                {t("contact.phone")}: {t("footer.phoneValue1")}
              </li>
              <li>
                {t("contact.phone")}: {t("footer.phoneValue2")}
              </li>
              <li>
                {t("contact.email")}: {t("footer.emailValue1")}
              </li>
              <li>
                {t("contact.email")}: {t("footer.emailValue2")}
              </li>
              <li>
                {t("contact.address")}: {t("footer.addressValue")}
              </li>
            </ul>
            <div className={`flex space-x-4 mt-4 ${isRTL ? "flex-row-reverse justify-end space-x-reverse" : ""}`}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-lawyer-primary-foreground hover:text-lawyer-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-lawyer-primary-foreground hover:text-lawyer-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-lawyer-primary-foreground hover:text-lawyer-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <Separator className="bg-lawyer-primary-foreground/20 my-8" />

        <div className="text-center text-lawyer-primary-foreground/70 text-sm">
          &copy; {new Date().getFullYear()} ImmigrantLaw. {t("footer.allRightsReserved")}
        </div>
      </div>
    </motion.footer>
  )
}
