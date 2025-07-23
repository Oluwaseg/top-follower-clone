import Image from "next/image"
import { StarRating } from "./star-rating"

interface ReviewCardProps {
  username: string
  timeAgo: string
  rating: number
  sourceIcon: string // Path to Trustpilot/Google icon
  userImage?: string // Path to user profile image
  reviewText: string
}

export function ReviewCard({ username, timeAgo, rating, sourceIcon, userImage, reviewText }: ReviewCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md shadow-gray-900/5 fade-in-item">
      <h4 className="font-semibold text-[16px] flex items-center">
        <div>{username}</div>
        <div className="ml-1.5 mt-[1px]">
          <Image
            alt="review source"
            loading="lazy"
            width={16}
            height={16}
            src={sourceIcon || "/placeholder.svg"}
            style={{ color: "transparent" }}
          />
        </div>
      </h4>
      <p className="text-sm text-foreground/70">{timeAgo}</p>
      <div className="-ml-1 mt-0.5">
        <StarRating rating={rating} />
      </div>
      <div className="mt-3">
        {userImage && (
          <button className="mb-2">
            <Image
              src={userImage || "/placeholder.svg"}
              className="w-10 h-10 rounded-md shadow-md"
              alt="User profile"
              width={40}
              height={40}
            />
          </button>
        )}
        <p>{reviewText}</p>
      </div>
    </div>
  )
}
