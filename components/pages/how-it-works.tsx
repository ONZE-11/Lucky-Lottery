"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Ticket, Coins, Trophy, ArrowRight } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">How Lucky Lottery Works</h1>
        <p className="text-lg text-gray-600">
          Our blockchain-based lottery is designed to be transparent, fair, and easy to play. Follow these simple steps
          to participate and potentially win big prizes!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white border-gray-200">
          <CardContent className="pt-6">
            <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-amber-600">1</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Buy Tickets</h3>
            <p className="text-gray-600 mb-4">
              Purchase lottery tickets using USDT or LUCKY tokens. Each ticket requires you to select 7 numbers between
              1-50.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <Ticket className="h-5 w-5 text-amber-500 mr-2" />
                <span className="font-medium text-gray-800">Ticket Details</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 1 USDT = 1 ticket row (7 numbers)</li>
                <li>• 1 LUCKY = 2 ticket rows (14 numbers)</li>
                <li>• Buy up to 10 rows per transaction</li>
                <li>• Numbers range from 1 to 50</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardContent className="pt-6">
            <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Wait for the Draw</h3>
            <p className="text-gray-600 mb-4">
              Each lottery round has a specific timeframe. Once the round ends, the winning numbers are drawn and
              announced.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <Coins className="h-5 w-5 text-blue-500 mr-2" />
                <span className="font-medium text-gray-800">Draw Process</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lottery rounds last for 7 days</li>
                <li>• Winning numbers are drawn after round ends</li>
                <li>• Results are recorded on the blockchain</li>
                <li>• Completely transparent and verifiable</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardContent className="pt-6">
            <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Claim Your Prize</h3>
            <p className="text-gray-600 mb-4">
              If your numbers match the winning combination, you can claim your prize in LUCKY tokens directly to your
              wallet.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-2">
                <Trophy className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium text-gray-800">Prize Structure</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Match 3 numbers: 100 LUCKY tokens</li>
                <li>• Match 4 numbers: 500 LUCKY tokens</li>
                <li>• Match 5 numbers: 2,000 LUCKY tokens</li>
                <li>• Match 6 numbers: 5,000 LUCKY tokens</li>
                <li>• Match all 7 numbers: 10,000 LUCKY tokens</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold mb-4">Token Conversion System</h2>
        <p className="text-gray-600 mb-6">
          Our lottery features a unique token conversion system that allows you to convert between USDT and LUCKY
          tokens.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <ArrowRight className="h-5 w-5 text-amber-500 mr-2" />
              Buy LUCKY Tokens
            </h3>
            <p className="text-gray-600 mb-3">
              Convert your USDT to LUCKY tokens to get better rates on lottery tickets and participate in exclusive
              features.
            </p>
            <div className="text-sm text-gray-500">
              The price of LUCKY tokens is determined by the token's supply and demand, with a bonding curve mechanism
              that ensures fair pricing.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <ArrowRight className="h-5 w-5 text-green-500 mr-2" />
              Sell LUCKY Tokens
            </h3>
            <p className="text-gray-600 mb-3">
              Convert your LUCKY tokens back to USDT whenever you want. The conversion rate is determined by the current
              market price.
            </p>
            <div className="text-sm text-gray-500">
              A small fee (5%) is applied to each conversion to maintain the stability of the token ecosystem and fund
              the prize pool.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-2">How are the winning numbers selected?</h3>
            <p className="text-gray-600">
              Winning numbers are selected using a verifiable random function on the blockchain, ensuring complete
              transparency and fairness in the selection process.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-2">When can I claim my prize?</h3>
            <p className="text-gray-600">
              You can claim your prize immediately after the winning numbers are announced. Prizes are automatically
              calculated based on the number of matches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold mb-2">What happens if no one wins the jackpot?</h3>
            <p className="text-gray-600">
              If no one matches all 7 numbers, the jackpot prize is added to the next round's prize pool, creating an
              even bigger incentive to participate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
