"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Loader from "./loader"

const TestButton = ({ redirect }: { redirect: string }) => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  const handleRedirect = () => {
    console.log("Redirecting...")
    setLoading(true)
    setTimeout(() => {
      push(redirect)
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <button
        className="mt-1 w-full text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 "
        onClick={handleRedirect}
      >
        {loading ? "Submit..." : "Submit"}
      </button>
      {loading && <Loader />}
    </>
  )
}

export default TestButton
