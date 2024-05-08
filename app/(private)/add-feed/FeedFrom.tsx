"use client"
import React, { useEffect, useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TestButton from "@/components/TestButton"
import Card from "@/components/Card"
import CSVUploader from "@/components/CSVUploader"
import axios from "axios"
interface Options {
  id: number
  name: string
  value: number
}
const FeedFrom = () => {
  const [csvData, setCSVData] = useState<any[] | null>(null)
  const [countyOptions, setCountyOptions] = useState<Options[]>([])
  const fetchCountyOptions = async () => {
    try {
      const { data: counties } = await axios.get("/api/counties")
      setCountyOptions(counties.data)
    } catch (error) {
      console.log("Error:", error)
    }
  }

  const handleUpload = (data: any[] | null) => {
    setCSVData(data)
  }

  useEffect(() => {
    fetchCountyOptions()
  }, [])

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Card>
          <h1 className="text-base text-slate-800 font-semibold -mb-1.5">Add data feed</h1>
          <Select>
            <SelectTrigger className="mb-2">
              <SelectValue placeholder="Which feed do you want to update?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Counties</SelectLabel>

                {countyOptions.map((county) => (
                  <SelectItem key={county.value} value={county.value.toString()}>
                    {county.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <CSVUploader onUpload={handleUpload} />
        </Card>
      </div>
      <div className="col-span-12">
        {/* <button className="mt-1 text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 ">
//           Sumit
//         </button> */}
        <TestButton redirect="/success" disabled />
      </div>
    </div>
  )
}

export default FeedFrom
