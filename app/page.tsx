import React from "react"
import PhilosophyQuotes from "@/components/philosophy-quotes"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">🧠 philosophy.rest</h1>
      <p className="text-xl mb-8">
        A free REST API for random philosophy quotes (Philosophy as a Service)
      </p>
      <PhilosophyQuotes />
    </main>
  )
}
