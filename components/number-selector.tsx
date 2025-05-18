"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface NumberSelectorProps {
  selectedNumbers: number[]
  onChange: (numbers: number[]) => void
}

export default function NumberSelector({ selectedNumbers, onChange }: NumberSelectorProps) {
  const [selected, setSelected] = useState<number[]>(selectedNumbers)

  // This useEffect was causing the infinite loop
  // Only update parent when local state changes, but avoid the loop
  useEffect(() => {
    // Only update if the arrays are different
    if (JSON.stringify(selected) !== JSON.stringify(selectedNumbers)) {
      onChange(selected)
    }
  }, [selected, onChange, selectedNumbers])

  // Update local state when props change (one-way sync)
  useEffect(() => {
    if (JSON.stringify(selected) !== JSON.stringify(selectedNumbers)) {
      setSelected(selectedNumbers)
    }
  }, [selectedNumbers])

  const toggleNumber = (num: number) => {
    const currentIndex = selected.indexOf(num)
    const newSelected = [...selected]

    if (currentIndex === -1) {
      // If not already selected and we have less than 7 numbers selected
      if (selected.filter((n) => n > 0).length < 7) {
        // Find the first zero and replace it
        const zeroIndex = newSelected.findIndex((n) => n === 0)
        if (zeroIndex !== -1) {
          newSelected[zeroIndex] = num
        }
      }
    } else {
      // If already selected, remove it and add a zero at the end
      newSelected[currentIndex] = 0
    }

    setSelected(newSelected)
  }

  // Generate numbers 1-50
  const numbers = Array.from({ length: 50 }, (_, i) => i + 1)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {selected.map((num, index) => (
          <div
            key={index}
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300",
              num > 0
                ? "bg-gradient-to-br from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-600 text-white"
                : "bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500",
            )}
          >
            {num > 0 ? num : "?"}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-10 gap-1">
        {numbers.map((num) => (
          <button
            key={num}
            onClick={() => toggleNumber(num)}
            className={cn(
              "w-full aspect-square rounded-md flex items-center justify-center text-xs font-medium transition-all",
              selected.includes(num)
                ? "bg-amber-500 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300",
            )}
            disabled={!selected.includes(num) && selected.filter((n) => n > 0).length >= 7}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}
