import React from "react"

const Card = ({ children, ...rest }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full h-full flex flex-col gap-3 justify-center p-6 bg-white border border-slate-200 rounded-lg shadow-box"
      {...rest}
    >
      {children}
    </div>
  )
}

export default Card
