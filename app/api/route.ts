import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "data.json")
const jsonData = JSON.parse(fs.readFileSync(dataFilePath, "utf8"))

export async function GET() {
  try {
    const philosophers = jsonData.philosophers

    const randomPhilosopher =
      philosophers[Math.floor(Math.random() * philosophers.length)]

    const randomQuote =
      randomPhilosopher.quotes[
        Math.floor(Math.random() * randomPhilosopher.quotes.length)
      ]

    const response = {
      philosopher: randomPhilosopher.name,
      quote: randomQuote.text,
      school: randomQuote.school,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    )
  }
}
