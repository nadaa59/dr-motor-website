import { cn } from "../../utils/cn"

const Badge = ({ children, className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-primary-500 text-white",
    secondary: "bg-gray-200 text-gray-700",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  }

  return (
    <span className={cn("badge", variants[variant], className)} {...props}>
      {children}
    </span>
  )
}

export default Badge
