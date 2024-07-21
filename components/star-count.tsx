"use client"

import React, { useState, useEffect } from "react"

const StarCount: React.FC = () => {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetchGitHubStars()
  }, [])

  const fetchGitHubStars = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/horacebramwell/philosophy-rest",
      )
      const data = await response.json()
      setStars(data.stargazers_count)
    } catch (error) {
      console.error("Failed to fetch GitHub stars:", error)
    }
  }

  return (
    <div className="mt-2 text-center">
      <a
        href="https://github.com/horacebramwell/philosophy-rest"
        className="text-gray-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        ★ Stars {stars !== null ? stars : "Loading..."}
      </a>
    </div>
  )
}

export default StarCount
