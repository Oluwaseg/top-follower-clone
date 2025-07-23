import { StarIcon } from "./star-icon"

interface StarRatingProps {
  rating: number
  totalStars?: number
  className?: string
}

export function StarRating({ rating, totalStars = 5, className = "h-5 w-5 fill-brand" }: StarRatingProps) {
  return (
    <div className="-space-x-[1px] flex">
      {[...Array(totalStars)].map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </div>
  )
}
