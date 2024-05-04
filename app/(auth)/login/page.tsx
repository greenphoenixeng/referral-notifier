import React from "react"
import Form from "./form"

export const metadata = {
  title: "Login",
  description: "Login",
}

const page = () => {
  return (
    <main className="w-full h-[90vh] flex items-center justify-center">
      <div className="w-[300px] md:w-[340px]">
        <h1 className=" text-2xl text-primary-blue mb-6 font-semibold text-center">Login</h1>
        <Form />
      </div>
    </main>
  )
}

export default page
