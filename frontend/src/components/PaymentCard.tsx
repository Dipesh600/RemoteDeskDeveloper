import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: { feature: string; available: boolean }[];
  buttonLabel: string;
  onClick: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  buttonLabel,
  onClick,
}) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4 border-b pb-2">
          {plan}
        </h2>
        <div className="my-4">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-600">
            {price}
          </p>
          <p className="text-sm text-gray-500 text-center">per project</p>
        </div>

        <ul className="mb-6 space-y-4">
          {features.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-3 p-2 rounded-md ${
                item.available ? 'text-green-600' : 'text-red-400'
              }`}
            >
              {item.available ? (
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span className={item.available ? 'text-gray-700' : 'line-through'}>
                {item.feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
          onClick={onClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

// Example usage
const ExamplePricing = () => {
  const features = [
    { feature: '5 Projects', available: true },
    { feature: '10GB Storage', available: true },
    { feature: '24/7 Support', available: false },
    { feature: 'Custom Domain', available: false },
  ];

  const handleButtonClick = () => {
    alert('Plan selected!');
  };

  return (
    <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
      <PricingCard
        plan="Basic Plan"
        price="$29"
        features={features}
        buttonLabel="Choose Plan"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default ExamplePricing;
