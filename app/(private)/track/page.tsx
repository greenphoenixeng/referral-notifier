import InputField from "@/components/ui/inputField"
import React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import TestButton from "@/components/TestButton"
import Card from "@/components/Card"

export const metadata = {
  title: "Track Your Referrals",
  description: "Track Your Referrals",
}

const page = () => {
  return (
    <main className="w-full pb-10 md:pb-0">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-1 md:col-span-12">
          <Card>
            <InputField
              label="What do you want to track?"
              placeholder="Enter what do you want to track?"
              icon="TrendingUp"
            />
          </Card>
        </div>
        <div className="col-span-1 md:col-span-6">
          <Card>
            <h1 className="text-base text-slate-800 font-semibold mb-1">
              Where are they looking?
            </h1>
            <Select>
              <SelectTrigger label="State">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>States</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger label="County">
                <SelectValue placeholder="Select a county" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Counties</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger label="Cities/Parishes">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cities</SelectLabel>
                  <SelectItem value="test">test</SelectItem>
                  <SelectItem value="test">test</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-6">
          <Card>
            <InputField
              type="text"
              icon="User"
              label="Your Name"
              placeholder="What is your name?"
            />
            <InputField
              type="email"
              icon="Mail"
              label="Your Email"
              placeholder="what is your email address?"
            />
            <InputField
              type="tel"
              icon="Phone"
              label="Your Phone"
              placeholder="what is your phone number?"
            />
          </Card>
        </div>
        <div className="col-span-1 md:col-span-6">
          <div className="flex items-center space-x-2 select-none mb-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium text-slate-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to terms
            </label>
          </div>
          {/* <button className="mt-1 w-full text-base bg-primary-blue rounded-md text-white px-4 py-3 font-semibold transition-all hover:opacity-90 ">
            Submit
          </button> */}
          <TestButton redirect="/add-feed" />
        </div>
      </div>
    </main>
  )
}

export default page
