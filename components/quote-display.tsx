import React from "react"

interface QuoteDisplayProps {
  currentQuote: string
  currentPhilosopher: string
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({
  currentQuote,
  currentPhilosopher,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-4 min-h-[150px] flex flex-col justify-center">
      {currentQuote ? (
        <>
          <p className="text-lg mb-2">&ldquo;{currentQuote}&rdquo;</p>
          <p className="text-right">- {currentPhilosopher}</p>
        </>
      ) : (
        <p className="text-center text-gray-500">Loading quote...</p>
      )}
    </div>
  )
}

export default QuoteDisplay
