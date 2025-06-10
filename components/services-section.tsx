"use client"

import { motion } from "framer-motion"
import { Globe, ShieldCheck, BookText, Gavel, PlaneTakeoff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export default function ServicesSection() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "fa"

  const serviceCategories = [
    {
      categoryTitle: t("services.translationTitle"),
      icon: <BookText className="h-8 w-8 text-lawyer-accent" />,
      items: [
        { title: t("services.translationDesc1") },
        { title: t("services.translationDesc2") },
        { title: t("services.translationDesc3") },
        { title: t("services.translationDesc4") },
      ],
    },
    {
      categoryTitle: t("services.legalTitle"),
      icon: <Gavel className="h-8 w-8 text-lawyer-accent" />,
      items: [{ title: t("services.legalDesc1") }, { title: t("services.legalDesc2") }],
    },
    {
      categoryTitle: t("services.asylumTitle"),
      icon: <ShieldCheck className="h-8 w-8 text-lawyer-accent" />,
      items: [
        { title: t("services.asylumDesc1") },
        { title: t("services.asylumDesc2") },
        { title: t("services.asylumDesc3") },
        { title: t("services.asylumDesc4") },
        { title: t("services.asylumDesc5") },
        { title: t("services.asylumDesc6") },
        { title: t("services.asylumDesc7") },
      ],
    },
    {
      categoryTitle: t("services.immigrationTitle"),
      icon: <PlaneTakeoff className="h-8 w-8 text-lawyer-accent" />,
      items: [
        { title: t("services.immigrationDesc1") },
        { title: t("services.immigrationDesc2") },
        { title: t("services.immigrationDesc3") },
        { title: t("services.immigrationDesc4") },
      ],
    },
    {
      categoryTitle: t("services.consularTitle"),
      icon: <Globe className="h-8 w-8 text-lawyer-accent" />,
      items: [
        { title: t("services.consularDesc1") },
        { title: t("services.consularDesc2") },
        { title: t("services.consularDesc3") },
        { title: t("services.consularDesc4") },
        { title: t("services.consularDesc5") },
        { title: t("services.consularDesc6") },
      ],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-24 bg-lawyer-secondary/30 dark:bg-lawyer-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-lawyer-primary dark:text-lawyer-accent-foreground mb-4">
            {t("services.mainTitle")}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">{t("services.mainDescription")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              className="h-full"
            >
              <Card className="h-full bg-card border-border shadow-md hover:shadow-lg transition-all duration-200">
                <CardHeader className={`flex flex-row items-center pb-2 ${isRTL ? "space-x-reverse" : "space-x-4"}`}>
                  <div className="p-3 rounded-full bg-lawyer-accent/10 dark:bg-lawyer-accent/20">{category.icon}</div>
                  <CardTitle className="text-xl font-semibold text-lawyer-primary dark:text-lawyer-accent-foreground">
                    {category.categoryTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className={`list-disc text-foreground/70 space-y-2 ${isRTL ? "pr-5" : "pl-5"}`}>
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item.title}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
