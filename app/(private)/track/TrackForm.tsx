"use client"
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
import { useApp } from "@/context/AppContext"

const TrackForm = () => {
  const { appState, appDispatch } = useApp()
  const { trackFrom } = appState

  const handleChange = (e: any) => {
    appDispatch({ type: "UPDATE_TRACK_FORM", payload: { [e.target.name]: e.target.value } })
  }

  const isAllFieldsFilled = Object.values(trackFrom).every((val) => val !== "")

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="col-span-1 md:col-span-12">
        <Card>
          <InputField
            label="What do you want to track?"
            name="track"
            value={trackFrom.track}
            onChange={handleChange}
            placeholder="Enter what do you want to track?"
            required
            icon="TrendingUp"
          />
        </Card>
      </div>
      <div className="col-span-1 md:col-span-6">
        <Card>
          <h1 className="text-base text-slate-800 font-semibold mb-1">Where are they looking?</h1>
          <Select
            value={trackFrom.state}
            onValueChange={(value) =>
              appDispatch({ type: "UPDATE_TRACK_FORM", payload: { state: value } })
            }
          >
            <SelectTrigger label="State">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>States</SelectLabel>
                <SelectItem value="test1">test1</SelectItem>
                <SelectItem value="test3">test3</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select
            value={trackFrom.county}
            onValueChange={(value) =>
              appDispatch({ type: "UPDATE_TRACK_FORM", payload: { county: value } })
            }
          >
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
          <Select
            value={trackFrom.city}
            onValueChange={(value) =>
              appDispatch({ type: "UPDATE_TRACK_FORM", payload: { city: value } })
            }
          >
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
            name="name"
            value={trackFrom.name}
            onChange={handleChange}
            type="text"
            icon="User"
            label="Your Name"
            placeholder="What is your name?"
          />
          <InputField
            name="email"
            value={trackFrom.email}
            onChange={handleChange}
            type="email"
            icon="Mail"
            label="Your Email"
            placeholder="what is your email address?"
          />
          <InputField
            name="phone"
            value={trackFrom.phone}
            onChange={handleChange}
            type="tel"
            icon="Phone"
            label="Your Phone"
            required
            maxLength={10}
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
        <TestButton redirect="/add-feed" disabled={!isAllFieldsFilled} />
      </div>
    </div>
  )
}

export default TrackForm
