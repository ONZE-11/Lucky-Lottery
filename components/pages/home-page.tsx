"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Ticket, Trophy, Coins } from "lucide-react"

interface HomePageProps {
  onConnect?: () => void
}

export default function HomePage({ onConnect }: HomePageProps) {
  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Win Big with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-green-500 to-blue-500">
              Lucky Lottery
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            The first decentralized lottery on the blockchain. Pick 7 lucky numbers, buy tickets with USDT or LUCKY
            tokens, and win amazing prizes!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={onConnect}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
            >
              Play Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => (window.location.href = "#how-it-works")}>
              How It Works
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-gray-600">100% Transparent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-gray-600">Provably Fair</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-gray-600">Instant Payouts</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="bg-white p-8 rounded-full shadow-xl">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-green-500 to-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Ticket className="h-16 w-16 mx-auto text-amber-500 mb-4" />
                      <div className="text-3xl font-bold text-gray-800">10,000</div>
                      <div className="text-green-600 font-medium">LUCKY Prize</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Lucky Lottery?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our blockchain-based lottery offers transparency, fairness, and exciting rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Ticket className="h-7 w-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy to Play</h3>
            <p className="text-gray-600">
              Simply pick 7 numbers between 1-50, purchase your tickets with USDT or LUCKY tokens, and wait for the
              draw.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Big Prizes</h3>
            <p className="text-gray-600">
              Win substantial prizes in LUCKY tokens. The more numbers you match, the bigger your prize.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Coins className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Token Conversion</h3>
            <p className="text-gray-600">
              Easily convert between USDT and LUCKY tokens. Hold LUCKY tokens to get better ticket prices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 md:p-12 rounded-2xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Try Your Luck?</h2>
            <p className="text-gray-600 max-w-xl">
              Join thousands of players who have already won prizes in our lottery. The next draw could make you a
              winner!
            </p>
          </div>
          <Button
            size="lg"
            onClick={onConnect}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
          >
            Play Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
