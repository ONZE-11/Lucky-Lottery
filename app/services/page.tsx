"use client"

import ServicesSection from "@/components/services-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useTranslation } from "react-i18next"

export default function ServicesPage() {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === "fa"

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${isRTL ? "font-vazirmatn" : "font-inter"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  )
}
