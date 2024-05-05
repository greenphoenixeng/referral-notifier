"use client"
import React, { useLayoutEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

const Header = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const [hideHeader, setHideHeader] = useState<boolean>(true)

  useLayoutEffect(() => {
    if (pathname === "/login") {
      setHideHeader(true)
    } else {
      setHideHeader(false)
    }
  }, [pathname])

  if (hideHeader) return null

  return (
    <header className="py-10 pb-7">
      <h1 className="text-2xl text-center font-semibold text-primary-blue mb-3">
        Track Your Referrals for free
      </h1>
    </header>
  )
}

export default Header
