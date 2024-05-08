import React from "react"
import TrackForm from "./TrackForm"
import Header from "@/components/Header"

export const metadata = {
  title: "Track Your Referrals",
  description: "Track Your Referrals",
}

const page = () => {
  return (
    <>
      <Header />
      <main className="w-full pb-10 md:pb-0">
        <TrackForm />
      </main>
    </>
  )
}

export default page
