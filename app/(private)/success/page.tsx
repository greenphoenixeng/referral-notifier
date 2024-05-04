import React from "react"
import Container from "@/layouts/Container"
import { SearchCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Success",
  description: "Success",
}

const page = () => {
  return (
    <main className="w-full h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[300px] md:w-[450px] text-center">
        <div className="mb-4" data-aos="zoom-in-up">
          <SearchCheck size={60} className="text-primary-blue" />
        </div>
        <h1 className="text-primary-blue font-semibold text-lg mb-4" data-aos="zoom-in-up">
          Martin County Feed Updated
        </h1>
        <div className="flex flex-col gap-1 text-slate-600">
          <p data-aos="zoom-in-up">
            <span className="font-semibold text-primary-blue">118</span> Records uploaded
          </p>
          <p data-aos="zoom-in-up">
            <span className="font-semibold text-primary-blue">17</span> Records uploaded
          </p>
          <p data-aos="zoom-in-up">
            <span className="font-semibold text-primary-blue">3</span> Matches Found
          </p>
        </div>
        <Link
          href="/track"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          className="px-4 py-2 mt-10 text-white bg-primary-blue transition-all rounded-md"
        >
          Track new records
        </Link>
      </div>
    </main>
  )
}

export default page
