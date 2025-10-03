function ImageBox({ imageUrl, imageAlt, imageMaxHeight }: { imageUrl: string; imageAlt: string; imageMaxHeight: number }) {
  return (
    <div className="text-center flex-3 hidden md:block">
      <img 
        src={imageUrl}
        alt={imageAlt}
        className="max-w-full h-auto mx-auto"
        style={{ maxHeight: imageMaxHeight }}
      />
    </div>
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
  imageMaxHeight = 300,
  lgMy = 36,
}: {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  revTextColor?: boolean;
  imageMaxHeight?: number;
  lgMy?: number;
}) {
  return (
    <div className={`container mx-auto px-4 relative z-10 md:w-320 my-8 lg:my-${lgMy.toString()}`}>
      <div className={`flex space-x-12 flex-1 items-center`}>
        {!reverse && (<ImageBox imageUrl={imageUrl} imageAlt={imageAlt} imageMaxHeight={imageMaxHeight} />)}
        <div className="flex-4">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${!subtitle ? "md:mb-14" : "md:mb-4"} ${revTextColor ? "text-gray-200" : "text-gray-900"}`}>
            {title}
          </h2>
          {subtitle && (
            <h3 className={`text-lg md:text-xl font-semibold mb-4 md:mb-10 ${revTextColor ? "text-gray-200" : "text-gray-800"}`}>
              {subtitle}
            </h3>
          )}
          <p className={`text-base md:text-lg leading-relaxed mb-6 md:mb-10 ${revTextColor ? "text-gray-300" : "text-gray-700"}`}>
            {description}
          </p>
        </div>
        {reverse && (<ImageBox imageUrl={imageUrl} imageAlt={imageAlt} imageMaxHeight={imageMaxHeight} />)}
      </div>
    </div>
  );
}