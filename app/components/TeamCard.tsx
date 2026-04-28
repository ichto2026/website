export default function TeamCard({
  name,
  nation,
}: {
  name: string;
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
      <p>
        <span className="text-black text-xl md:text-xl font-bold">{name}</span>
        <br />
        <span className="text-gray-600 text-md md:text-lg">{nation}</span>
      </p>
    </div>
  );
}
