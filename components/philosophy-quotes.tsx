"use client"

import React, { useState, useEffect } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Quote, RefreshCw } from "lucide-react"
import philosophersData from "@/data/data.json"
import QuoteDisplay from "@/components/quote-display"
import StarCount from "@/components/star-count"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

interface Philosopher {
  name: string
  quotes: { text: string; school: string }[]
}

export default function PhilosophyQuotes() {
  const [currentQuote, setCurrentQuote] = useState<string>("")
  const [currentPhilosopher, setCurrentPhilosopher] = useState<string>("")
  const [philosophers, setPhilosophers] = useState<Philosopher[]>([])

  useEffect(() => {
    setPhilosophers(philosophersData.philosophers)
  }, [])

  useEffect(() => {
    if (philosophers.length > 0) {
      setRandomQuote()
    }
  }, [philosophers])

  const setRandomQuote = () => {
    const randomPhilosopher =
      philosophers[Math.floor(Math.random() * philosophers.length)]
    if (randomPhilosopher) {
      const randomQuote =
        randomPhilosopher.quotes[
          Math.floor(Math.random() * randomPhilosopher.quotes.length)
        ]
      setCurrentQuote(randomQuote.text)
      setCurrentPhilosopher(randomPhilosopher.name)
    }
  }

  const handleTweet = () => {
    const tweet = `https://twitter.com/intent/tweet?text=${currentQuote} - ${currentPhilosopher}`
    window.open(tweet, "_blank")
  }

  const handleRefresh = () => {
    setRandomQuote()
  }

  return (
    <div className="w-full max-w-2xl">
      <QuoteDisplay
        currentQuote={currentQuote}
        currentPhilosopher={currentPhilosopher}
      />
      <div className="flex justify-between items-center">
        <a
          href="https://philosophy.rest/api"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://philosophy.rest/api
        </a>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={handleTweet}>
            <Quote className="mr-2 h-4 w-4" /> tweet
          </Button>
          <Button variant="outline" size="sm" onClick={handleRefresh}>
            <RefreshCw className="mr-2 h-4 w-4" /> refresh
          </Button>
        </div>
      </div>
      <Accordion type="single" collapsible className="my-5">
        <AccordionItem value="quotes-list">
          <AccordionTrigger className={buttonVariants({ variant: "outline" })}>
            📜 Quotes List
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-h-64 overflow-y-auto bg-gray-100 rounded-sm">
              {philosophers.flatMap((philosopher) =>
                philosopher.quotes.map((quote, index) => (
                  <div
                    key={`${philosopher.name}-${index}`}
                    className="p-2 border-b"
                  >
                    &ldquo;{quote.text}&rdquo; - {philosopher.name}
                  </div>
                )),
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-8 text-center">
        <span className="text-yellow-500">👋</span>{" "}
        <a
          href="https://github.com/yourusername"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @horacebramwell
        </a>
      </div>
      <StarCount />
    </div>
  )
}
