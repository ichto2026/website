function ImageBox({
  imageUrl,
  imageAlt,
  reverse,
}: {
  imageUrl: string;
  imageAlt: string;
  reverse: boolean;
}) {
  return (
    <img
      src={imageUrl}
      alt={imageAlt}
      className={`mb-16 ${!reverse ? "mr-12 float-left" : "ml-12 float-right"} rounded-md hidden md:block w-48 lg:w-96`}
    />
  );
}

export default function ImageNText({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
  revTextColor = false,
  lgMy = 36,
}: {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  revTextColor?: boolean;
  lgMy?: number;
}) {
  return (
    <div
      className={`container mx-auto px-8 lg:px-24 relative z-10 md:w-320 my-8 lg:my-${lgMy.toString()}`}
    >
      <ImageBox imageUrl={imageUrl!} imageAlt={imageAlt!} reverse={reverse} />

      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${!subtitle ? "md:mb-14" : "md:mb-4"} ${revTextColor ? "text-gray-200" : "text-gray-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <h3
          className={`text-lg md:text-xl font-semibold mb-4 md:mb-10 ${revTextColor ? "text-gray-200" : "text-gray-800"}`}
        >
          {subtitle}
        </h3>
      )}
      <p
        className={`whitespace-pre-wrap text-base md:text-lg leading-relaxed mb-6 md:mb-10 ${revTextColor ? "text-gray-300" : "text-gray-700"}`}
      >
        {description}
      </p>
    </div>
  );
}

