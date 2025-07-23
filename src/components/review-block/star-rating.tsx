import { StarIcon } from './star-icon';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  fillColorClass?: string; // New prop for fill color
}

export function StarRating({
  rating,
  totalStars = 5,
  className = 'h-5 w-5',
  fillColorClass = 'fill-[#FFC107]', // Default to the specific yellow/orange
}: StarRatingProps) {
  return (
    <div className='-space-x-[1px] flex'>
      {[...Array(totalStars)].map((_, i) => (
        <StarIcon
          key={i}
          className={`${className} ${
            i < rating ? fillColorClass : 'fill-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
