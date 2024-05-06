import React from "react"
import TrackForm from "./TrackForm"

export const metadata = {
  title: "Track Your Referrals",
  description: "Track Your Referrals",
}

const page = () => {
  return (
    <main className="w-full pb-10 md:pb-0">
      <TrackForm />
    </main>
  )
}

export default page
