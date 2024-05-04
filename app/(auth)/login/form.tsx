"use client"
import React from "react"
import InputField from "@/components/ui/inputField"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const Form = () => {
  const { push } = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)
    // wait 2 seconds before redirecting
    setTimeout(() => {
      push("/track")
      setLoading(false)
    }, 2000)
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <InputField icon="Mail" value={"admin"} placeholder="Enter email" type="text" />
      <InputField icon="Lock" value={"admin"} placeholder="Enter password" type="password" />
      <button className="mt-1 text-base text-center flex justify-center items-center bg-primary-yellow rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90">
        {loading ? <Loader2 size={24} className="animate-spin" /> : "Login"}
      </button>
    </form>
  )
}

export default Form
