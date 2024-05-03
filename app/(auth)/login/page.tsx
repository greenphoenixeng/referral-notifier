import React from "react"
import InputField from "@/components/ui/inputField"
import Container from "@/layouts/Container"

export const metadata = {
  title: "Login",
  description: "Login",
}

const page = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Container>
        <div className="form w-[300px] md:w-[340px]">
          <h1 className=" text-2xl text-primary-blue mb-6 font-semibold text-center">Login</h1>
          <form className="flex flex-col gap-2">
            <InputField icon="Mail" placeholder="Enter email" type="text" />
            <InputField icon="Lock" placeholder="Enter password" type="password" />
            <button className="mt-1 text-base bg-primary-yellow rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 ">
              Login
            </button>
          </form>
        </div>
      </Container>
    </main>
  )
}

export default page
