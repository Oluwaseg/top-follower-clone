interface ProgressBarProps {
  progress: number // Percentage from 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-36 sm:w-44 bg-gray-200 rounded-full h-2">
      <div
        className="bg-gradient-to-br from-yellow-400 to-orange-400 h-2 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
