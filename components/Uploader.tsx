"use client"
import { cn } from "@/lib/utils"
import { PlusSquare, Upload, MonitorUp } from "lucide-react"
import { useState, DragEvent, ChangeEvent } from "react"

interface UploaderProps {
  onFileUpload?: (audioFile: File) => void
  id: string
}

const Uploader: React.FC<UploaderProps> = ({ id }) => {
  const [isDragOver, setIsDragOver] = useState(false)
  const [progress, setProgress] = useState<number>(0)
  const [error, setError] = useState<string | null>(null)
  const onFileUpload = async (audioFile: File) => {
    console.log(audioFile)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = (e.dataTransfer?.files as FileList) || []
    handleFiles(files)
  }

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList
    handleFiles(files)
  }

  const handleFiles = (files: FileList) => {
    setError(null)
    setProgress(0)

    // Check if there are any files
    if (files.length === 0) {
      setError("No files selected.")
      return
    }

    // Check file format
    const allowedFormats = ["audio/mp3", "audio/mpeg", "audio/wav", "audio/ogg", "audio/x-m4a"]
    const file = files[0]

    if (!allowedFormats.includes(file.type)) {
      setError("Opps! Upload a valid file.")
      return
    }

    // Simulate file upload (replace with actual upload logic)
    const totalSize = file.size
    const chunkSize = 1024 * 1024 // 1MB chunks (you can adjust this size)
    let loaded = 0

    const uploadChunk = () => {
      const chunk = Math.min(chunkSize, totalSize - loaded)
      loaded += chunk
      setProgress((loaded / totalSize) * 100)

      if (loaded < totalSize) {
        // Simulate uploading next chunk
        setTimeout(uploadChunk, 500)
      } else {
        // Upload complete
        setTimeout(() => {
          setProgress(0)
          onFileUpload(file)
        }, 500)
      }
    }

    // Start the upload
    setTimeout(uploadChunk, 500)
  }

  return (
    <div className="w-full">
      <div
        className={`relative flex items-center justify-center w-full h-full transition-all border-2 border-dashed border-slate-300 rounded-md ${
          isDragOver ? "bg-gradient-to-t from-violet-50 to-white" : "bg-[#fcfcfc]"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="h-full flex flex-col items-center justify-center p-4">
          <MonitorUp size={36} className="text-slate-500" />
          <h2 className="text-sm font-medium text-slate-600 mt-2">
            Drag & Drop or click to upload file
          </h2>

          <input type="file" id={id} className="hidden" onChange={handleFileInput} />

          {progress > 0 && (
            <div className="absolute top-0 left-0 z-10 w-full">
              <div className="bg-slate-100 h-[6px] rounded-md">
                <div
                  className="bg-violet-500 h-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* <p className="text-[14px] text-slate-500 text-center">
            Supported file formats: MP3, M4A, WAV, OGG, etc.
          </p> */}
          <p
            className={cn(
              "h-0 bg-blue-400 text-sm border border-red-200 rounded-md transition-transform",
              {
                "visible opacity-100 translate-x-0 mt-4 px-4 py-2 h-auto": error,
                "invisible opacity-0 translate-x-12": !error,
              }
            )}
            style={{ backgroundColor: "#FEE2E2", color: "#E53E3E" }} // You can specify custom background and text color
          >
            {error}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Uploader
