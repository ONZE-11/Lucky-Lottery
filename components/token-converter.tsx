"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowDownUp, DollarSign, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface TokenConverterProps {
  usdtBalance: number
  luckyBalance: number
}

export default function TokenConverter({ usdtBalance, luckyBalance }: TokenConverterProps) {
  const [conversionType, setConversionType] = useState<"buy" | "sell">("buy")
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)
  const [price, setPrice] = useState(1.05) // Mock price
  const { toast } = useToast()

  const handleConvert = () => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      })
      return
    }

    const numAmount = Number.parseFloat(amount)

    if (conversionType === "buy" && numAmount > usdtBalance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough USDT",
        variant: "destructive",
      })
      return
    }

    if (conversionType === "sell" && numAmount > luckyBalance) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough LUCKY tokens",
        variant: "destructive",
      })
      return
    }

    // Mock conversion
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: "Conversion Successful",
        description:
          conversionType === "buy"
            ? `Successfully bought ${(numAmount / price).toFixed(2)} LUCKY tokens`
            : `Successfully sold ${numAmount} LUCKY tokens for ${(numAmount * price).toFixed(2)} USDT`,
      })
      setAmount("")
    }, 2000)
  }

  const estimatedOutput =
    amount && !isNaN(Number.parseFloat(amount))
      ? conversionType === "buy"
        ? (Number.parseFloat(amount) / price).toFixed(4)
        : (Number.parseFloat(amount) * price).toFixed(4)
      : "0"

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle>Token Converter</CardTitle>
        <CardDescription>Convert between USDT and LUCKY tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" onValueChange={(value) => setConversionType(value as "buy" | "sell")}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="buy">Buy LUCKY</TabsTrigger>
            <TabsTrigger value="sell">Sell LUCKY</TabsTrigger>
          </TabsList>

          <TabsContent value="buy">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Current Price</p>
                <p className="text-xl font-bold text-gray-800">1 LUCKY = {price} USDT</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-500">You Pay</label>
                    <span className="text-sm text-gray-500">Balance: {usdtBalance} USDT</span>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-0 bg-transparent text-xl font-bold focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-gray-800"
                    />
                    <div className="flex items-center bg-amber-100 px-3 py-1 rounded-md text-amber-700">
                      <DollarSign className="h-4 w-4 text-amber-600 mr-1" />
                      <span>USDT</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-gray-100 rounded-full p-2">
                    <ArrowDownUp className="h-5 w-5 text-gray-600" />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-500">You Receive</label>
                    <span className="text-sm text-gray-500">Estimated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-800">{estimatedOutput}</div>
                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-md text-green-700">
                      <span>LUCKY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sell">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-600">Current Price</p>
                <p className="text-xl font-bold text-gray-800">1 LUCKY = {price} USDT</p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-500">You Sell</label>
                    <span className="text-sm text-gray-500">Balance: {luckyBalance} LUCKY</span>
                  </div>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="border-0 bg-transparent text-xl font-bold focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-gray-800"
                    />
                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-md text-green-700">
                      <span>LUCKY</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-gray-100 rounded-full p-2">
                    <ArrowDownUp className="h-5 w-5 text-gray-600" />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-gray-500">You Receive</label>
                    <span className="text-sm text-gray-500">Estimated</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-800">{estimatedOutput}</div>
                    <div className="flex items-center bg-amber-100 px-3 py-1 rounded-md text-amber-700">
                      <DollarSign className="h-4 w-4 text-amber-600 mr-1" />
                      <span>USDT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleConvert}
          disabled={loading || !amount || Number.parseFloat(amount) <= 0}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : conversionType === "buy" ? (
            "Buy LUCKY Tokens"
          ) : (
            "Sell LUCKY Tokens"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
