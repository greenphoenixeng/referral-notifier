import React from "react"
import Container from "@/layouts/Container"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Uploader from "@/components/Uploader"
import Loader from "@/components/loader"
import TestButton from "@/components/TestButton"

export const metadata = {
  title: "Add Feed",
  description: "Add Feed",
}

const page = () => {
  // const onFileUpload = async (audioFile: File) => {
  //   console.log(audioFile)
  // }
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Container>
        <div className="form w-[300px] md:w-[400px]">
          <div className="flex flex-col gap-2">
            <h1 className="text-base text-slate-800 font-semibold -mb-1.5">Add data feed</h1>
            <Select>
              <SelectTrigger className="mb-2">
                <SelectValue placeholder="Which feed do you want to update?" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Counties</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Uploader id="file" />
            {/* <button className="mt-1 text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 ">
              Sumit
            </button> */}
            <TestButton redirect="http://localhost:3000/success" />
          </div>
        </div>
      </Container>
    </main>
  )
}

export default page
