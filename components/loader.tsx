import { Loader2 } from "lucide-react"
import React from "react"

const Loader = () => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 bg-white/90 flex flex-col gap-2 items-center justify-center z-10">
      <Loader2 size={60} className="animate-spin text-primary-blue mb-2" />
      <p className="text-slate-800 font-semibold">Submitting..</p>
    </div>
  )
}

export default Loader
