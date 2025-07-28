import { cn } from "../../utils/cn"

export const Card = ({ children, className, ...props }) => {
  return (
    <div className={cn("card", className)} {...props}>
      {children}
    </div>
  )
}

export const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  )
}
