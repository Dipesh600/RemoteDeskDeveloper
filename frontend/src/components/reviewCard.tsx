interface ReviewCardProps {
  clientName: string;
  clientTitle: string;
  reviewText: string;
  rating: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  clientName,
  clientTitle,
  reviewText,
  rating,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Washi Tape Above the Card */}
      <div className="absolute top-[-4rem] left-[-4rem] z-20">
        <img
          src="/tape.png"
          alt="tape"
          className="w-40 h-40 transform rotate-[-25deg]"
        />
      </div>
      <div className="absolute top-[-4rem] right-[-4rem] z-20">
        <img
          src="/tape.png"
          alt="tape"
          className="w-40 h-40 transform rotate-[240deg]"
        />
      </div>
      <div className="absolute bottom-[-4rem] left-[-4rem] z-20">
        <img
          src="/tape.png"
          alt="tape"
          className="w-40 h-40 transform rotate-[70deg]"
        />
      </div>
      <div className="absolute bottom-[-4rem] right-[-4rem] z-20">
        <img
          src="/tape.png"
          alt="tape"
          className="w-40 h-40 transform rotate-[160deg]"
        />
      </div>

      {/* The Card Itself */}
      <div className="relative z-10 border-2  w-96 h-96 p-6 rounded-lg shadow-lg bg-white overflow-hidden">
        {/* Client Info */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{clientName}</h3>
          <p className="text-sm text-gray-500">{clientTitle}</p>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 text-base mb-4">{reviewText}</p>

        {/* Rating Stars */}
        <div className="flex items-center mt-64">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                index < rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.45 4.465a1 1 0 00.95.69h4.764c.969 0 1.371 1.24.588 1.81l-3.857 2.795a1 1 0 00-.364 1.118l1.45 4.465c.3.921-.755 1.688-1.538 1.118L10 15.347l-3.857 2.795c-.783.57-1.838-.197-1.538-1.118l1.45-4.465a1 1 0 00-.364-1.118L1.834 9.892c-.783-.57-.38-1.81.588-1.81h4.764a1 1 0 00.95-.69l1.45-4.465z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
