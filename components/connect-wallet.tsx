"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"
import { motion } from "framer-motion"

interface ConnectWalletProps {
  onConnect: () => void
}

export default function ConnectWallet({ onConnect }: ConnectWalletProps) {
  return (
    <div className="flex justify-center items-center my-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="glass-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-700/5 dark:from-brand-500/20 dark:to-brand-700/10" />
          <CardHeader className="text-center relative">
            <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
            <CardDescription className="dark:text-gray-400 transition-colors duration-300">
              Connect your wallet to participate in the lottery
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-100/50 dark:bg-brand-900/30 rounded-full p-8 mb-4 transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-conic from-brand-400/20 via-transparent to-transparent"
              />
              <Wallet className="h-16 w-16 text-brand-500 dark:text-brand-400 transition-colors duration-300 relative" />
            </motion.div>
          </CardContent>
          <CardFooter className="relative">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
              <Button onClick={onConnect} className="w-full btn-primary py-6 text-lg rounded-xl">
                Connect Wallet
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
