"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function MentalHealthCheckin() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [note, setNote] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const moods = [
    { emoji: "😞", label: "Low", value: 1 },
    { emoji: "😐", label: "Okay", value: 2 },
    { emoji: "🙂", label: "Good", value: 3 },
    { emoji: "😀", label: "Great", value: 4 },
    { emoji: "🤩", label: "Amazing", value: 5 },
  ]

  const handleSubmit = () => {
    if (selectedMood !== null) {
      // In a real app, you would send this data to your backend
      console.log({
        mood: selectedMood,
        note,
        timestamp: new Date(),
      })
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center text-green mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Check-in Complete!</h3>
        <p className="text-gray-500 text-center max-w-md mb-6">
          Thank you for completing today's check-in. Your input helps us support your well-being and improve team
          dynamics.
        </p>
        <Button onClick={() => setSubmitted(false)}>Back to Check-in</Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">How are you feeling today?</h3>
        <div className="flex justify-between">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`flex flex-col items-center transition-all ${
                selectedMood === mood.value ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center text-3xl rounded-full mb-2 ${
                  selectedMood === mood.value
                    ? mood.value >= 4
                      ? "bg-green text-white"
                      : mood.value === 3
                        ? "bg-primary text-white"
                        : mood.value === 2
                          ? "bg-amber-400 text-white"
                          : "bg-red-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {mood.emoji}
              </div>
              <span className="text-sm font-medium">{mood.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Add a note (optional)</h3>
        <Textarea
          placeholder="How are you feeling today? What's on your mind?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="min-h-[120px]"
        />
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Your responses are private and only visible to your coaches.</p>
        <Button onClick={handleSubmit} disabled={selectedMood === null}>
          Submit Check-in
        </Button>
      </div>
    </div>
  )
}

