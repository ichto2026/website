export default function JuryCard({
  name,
  institute,
  nation,
}: {
  name: string;
  institute: string;
  nation: string;
}) {
  const flagFilename = nation.toLowerCase().replaceAll(" ", "-");
  return (
    <div className="flex p-4 bg-gray-100 rounded-lg space-x-4">
      <img
        src={`/flags/${flagFilename}.svg`}
        alt={nation}
        loading="lazy"
        className="min-w-24 w-24 min-h-16 h-16"
      />
      <p className="leading-none">
        <span className="text-black text-lg md:text-xl font-bold">{name}</span>
        <br />
        <span className="text-gray-700 text-sm md:text-md">{institute}</span>
        <br />
        <span className="text-gray-500 text-sm md:text-md">{nation}</span>
      </p>
    </div>
  );
}
