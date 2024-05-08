"use client"
import { cn } from "@/lib/utils"
import { MonitorUp } from "lucide-react"
import React, { useState } from "react"

interface CSVUploaderProps {
  onUpload: (data: any[] | null) => void
}

const CSVUploader: React.FC<CSVUploaderProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    if (file.type !== "text/csv") {
      setErrorMessage("Only CSV files are allowed.")
      return
    }

    setFileName(file.name)
    setErrorMessage("")

    const reader = new FileReader()
    reader.onload = (event) => {
      const result = event.target?.result as string
      const data = result.split("\n").map((row) => row.split(","))
      onUpload(data)
    }
    reader.readAsText(file)
  }

  return (
    <>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          `group border-2 border-dashed border-salate-300 bg-white rounded p-5 cursor-pointer transition-all`,
          {
            "border-primary-blue bg-slate-300": isDragging,
          }
        )}
      >
        <label
          htmlFor="fileInput"
          className="flex flex-col justify-center items-center"
          style={{ cursor: "pointer" }}
        >
          <MonitorUp size={36} className="text-slate-500 group-hover:text-primary-blue" />
          <p className="text-sm font-medium text-slate-600 mt-2">
            Drag 'n' drop a CSV file here, or click to select one
          </p>
          <input
            id="fileInput"
            type="file"
            accept=".csv"
            onChange={handleFileInputChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      {fileName && (
        <p className="text-sm text-slate-600">
          Uploaded file: <span className="text-medium text-primary-blue">{fileName}</span>
        </p>
      )}
    </>
  )
}

const dropzoneStyle: React.CSSProperties = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
}

const dropzoneStyleDragging: React.CSSProperties = {
  ...dropzoneStyle,
  backgroundColor: "#f7f7f7",
}

export default CSVUploader
