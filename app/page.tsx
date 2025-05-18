import LotteryApp from "@/components/lottery-app"
import NetworkBackground from "@/components/network-background"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <NetworkBackground />
      <LotteryApp />
    </main>
  )
}
