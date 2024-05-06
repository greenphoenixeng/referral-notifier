import React from "react"
import FeedFrom from "./FeedFrom"

export const metadata = {
  title: "Add Feed",
  description: "Add Feed",
}

const page = () => {
  return (
    <main className="w-full">
      <FeedFrom />
    </main>
  )
}

export default page
