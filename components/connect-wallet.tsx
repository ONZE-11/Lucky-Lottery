"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet } from "lucide-react"

interface ConnectWalletProps {
  onConnect: () => void
}

export default function ConnectWallet({ onConnect }: ConnectWalletProps) {
  return (
    <div className="flex justify-center items-center my-12">
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
          <CardDescription className="dark:text-gray-400 transition-colors duration-300">
            Connect your wallet to participate in the lottery
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-full p-6 mb-4 transition-colors duration-300">
            <Wallet className="h-12 w-12 text-amber-500 dark:text-amber-400 transition-colors duration-300" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={onConnect}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
          >
            Connect Wallet
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
