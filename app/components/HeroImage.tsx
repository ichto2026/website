export default function HeroImage(props: { title: string, imageUrl: string }) {
  return (
    <div 
      className="flex items-center justify-center relative bg-cover bg-center mb-4 md:mb-12 lg:mb-24 h-[20vh] lg:h-[42vh]"
      style={{
        backgroundImage: `url('${props.imageUrl}')`,
        // backgroundAttachment: 'fixed',
        // height: '42vh'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl lg:text-6xl font-bold mb-4">
          {props.title}
        </h1>
      </div>
      {/* Gradient overlay to transition to gray background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
    </div>
  );
}