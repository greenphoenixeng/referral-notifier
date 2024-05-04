import { MoveLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

export const metadata = {
  title: "Page Not Found",
  description: `Oops! It seems like you've reached an unexpected corner.`,
}

const page = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold text-slate-700 mb-3">Opps!!!</h1>

      <h1 className="text-xl font-semibold text-slate-700">Page Not Found</h1>
      <Link
        href={"/login"}
        className="text-sm px-4 py-2 flex items-center gap-2 hover:bg-slate-800 text-slate-700 hover:text-white rounded-md transition-all mt-3"
      >
        <MoveLeft size={20} />
        Back to Home
      </Link>
    </div>
  )
}

export default page
