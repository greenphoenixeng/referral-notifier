import React from "react"

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto px-4 md:px-20 md:w-[1000px]">{children}</div>
}

export default Container
