import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface QuoteListProps {
  philosophers: {
    name: string
    quotes: { text: string; school: string }[]
  }[]
}

const QuoteList: React.FC<QuoteListProps> = ({ philosophers }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="mt-4">
          📜 Quotes List
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 max-h-[300px] overflow-y-auto">
        {philosophers.flatMap((philosopher) =>
          philosopher.quotes.map((quote, index) => (
            <DropdownMenuItem key={`${philosopher.name}-${index}`}>
              {quote.text}
            </DropdownMenuItem>
          )),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default QuoteList
