"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { EyeIcon, EyeOff, LucideIcon, LucideProps, User, icons } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  prefix?: string
  icon?: keyof typeof icons
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, icon, ...props }, ref) => {
    const LucideIcon = icons[icon ? icon : "User"]
    const [show, setShow] = React.useState(false)
    return (
      <div className={cn(`relative select-none`, className)}>
        {label && (
          <label className="text-[14px] capitalize font-medium text-gray-700 mb-[6px] block">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && <LucideIcon size={16} className="absolute left-3.5 text-slate-500" />}
          <input
            type={show ? "text" : type}
            className={cn(
              "flex w-full text-sm bg-white pl-4 pr-4 py-[14px] text-gray-600 border border-border rounded-md outline-none focus:border-brand focus:shadow-input disabled:bg-gray-100 read-only:focus:border-border read-only:bg-gray-100 transition-all",
              className,
              {
                "pl-10": icon,
              }
            )}
            ref={ref}
            {...props}
          />
          {type === "password" && (
            <div
              className="absolute top-3.5 right-4 text-slate-600 cursor-pointer hover:text-brand"
              onClick={() => setShow(!show)}
            >
              {show ? <EyeIcon size="18" /> : <EyeOff size="18" />}
            </div>
          )}
        </div>
      </div>
    )
  }
)

export default InputField
