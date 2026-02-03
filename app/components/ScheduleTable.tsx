const ScheduleTable = () => {
  const days = [
    { date: "8/15 (Sat)", color: "text-red-500" },
    { date: "8/16 (Sun)", color: "text-red-500" },
    { date: "8/17 (Mon)", color: "text-red-500" },
    { date: "8/18 (Tue)", color: "text-gray-800" },
    { date: "8/19 (Wed)", color: "text-gray-800" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Dates */}
            <div className="grid grid-cols-5 border-b border-gray-200 bg-gray-100">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`py-4 text-center font-bold text-lg border-r last:border-r-0 ${day.color}`}
                >
                  {day.date}
                </div>
              ))}
            </div>

            {/* Schedule Grid */}
            <div className="grid grid-cols-5 min-h-[800px]">
              {/* Day 1: 8/15 */}
              <div className="border-r border-gray-200 flex flex-col">
                <TimeSlot
                  time="08:00-08:30"
                  title="Welli Hilli → KMLA"
                  type="transport"
                />
                <TimeSlot
                  time="09:00-10:00"
                  title="Opening Ceremony"
                  location="Auditorium"
                />
                <TimeSlot
                  time="10:00-11:00"
                  title="Quiz"
                  location="Auditorium"
                />
                <TimeSlot time="11:00-12:30" title="Campus Tour" />
                <LunchSlot />
                <TimeSlot
                  time="13:30-17:30"
                  title="Stage 1"
                  location="Auditorium / Conf. room"
                  isLong
                />
                <TimeSlot
                  time="17:30-19:00"
                  title="Cultural moment"
                  location="Auditorium"
                />
                <TimeSlot
                  time="19:00-20:30"
                  title="Dinner"
                  location="Traditional Korean food"
                  type="meal"
                />
                <TimeSlot
                  time="20:30-21:00"
                  title="KMLA → Welli Hilli"
                  type="transport"
                />
              </div>

              {/* Day 2: 8/16 */}
              <div className="border-r border-gray-200 flex flex-col">
                <TimeSlot
                  time="08:00-08:30"
                  title="Welli Hilli → KMLA"
                  type="transport"
                />
                <TimeSlot
                  time="08:30-12:30"
                  title="Stage 2"
                  location="Auditorium / Conf. room"
                  isLong
                />
                <LunchSlot />
                <TimeSlot
                  time="13:30-14:00"
                  title="KMLA → Welli Hilli"
                  type="transport"
                />
                <div className="flex-grow min-h-[120px] p-3 bg-blue-50 m-2 rounded-lg border border-blue-100">
                  <span className="text-xs font-bold text-blue-600">
                    14:00-17:30
                  </span>
                  <p className="font-bold text-blue-900 mt-1">Excursion 1</p>
                  <p className="text-sm text-blue-700">
                    Water Planet, Welli Hilli Park
                  </p>
                </div>
              </div>

              {/* Day 3: 8/17 */}
              <div className="border-r border-gray-200 flex flex-col">
                <TimeSlot
                  time="08:00-08:30"
                  title="Welli Hilli → KMLA"
                  type="transport"
                />
                <TimeSlot
                  time="08:30-12:30"
                  title="Stage 3"
                  location="Auditorium / Conf. room"
                  isLong
                />
                <LunchSlot />
                <TimeSlot
                  time="13:30-17:30"
                  title="Stage 4"
                  location="Auditorium / Conf. room"
                  isLong
                />
                <TimeSlot
                  time="17:30-18:00"
                  title="KMLA → Welli Hilli"
                  type="transport"
                  className="flex-grow"
                />
              </div>

              {/* Day 4: 8/18 */}
              <div className="border-r border-gray-200 flex flex-col">
                <TimeSlot
                  time="08:00-08:30"
                  title="Welli Hilli → KMLA"
                  type="transport"
                />
                <TimeSlot
                  time="08:30-12:30"
                  title="Final"
                  location="Auditorium"
                  isLong
                />
                <LunchSlot />
                <div className="p-3 bg-green-50 m-2 rounded-lg border border-green-100">
                  <span className="text-xs font-bold text-green-600">
                    13:30-16:30
                  </span>
                  <p className="font-bold text-green-900 mt-1">Excursion 2</p>
                  <p className="text-xs text-green-700 leading-tight">
                    Calligraphy, Gayageum, Korean Archery
                  </p>
                </div>
                <TimeSlot
                  time="16:30-17:30"
                  title="Closing Ceremony"
                  location="Auditorium"
                />
                <TimeSlot
                  time="17:30-19:00"
                  title="Dinner"
                  location="School cafeteria"
                  type="meal"
                />
                <TimeSlot
                  time="19:00-21:00"
                  title="Farewell Party & Musical Performance"
                  location="Gymnasium"
                  highlight
                />
                <TimeSlot
                  time="21:00-21:30"
                  title="KMLA → Welli Hilli"
                  type="transport"
                />
              </div>

              {/* Day 5: 8/19 */}
              <div className="flex flex-col">
                <TimeSlot
                  time="08:30-10:30"
                  title="Welli Hilli → Seoul"
                  type="transport"
                />
                <div className="flex-grow p-4 bg-orange-50 m-2 rounded-lg border border-orange-100 flex flex-col justify-center text-center">
                  <span className="text-sm font-bold text-orange-600">
                    10:30-17:00
                  </span>
                  <p className="font-black text-lg text-orange-900 mt-2">
                    Excursion 3
                  </p>
                  <p className="text-md text-orange-800 font-medium">
                    Lotte World Adventure
                  </p>
                </div>
                <TimeSlot
                  time="17:00~"
                  title="Seoul → Incheon Airport"
                  type="transport"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeSlot = ({
  time,
  title,
  location,
  type,
  isLong,
  highlight,
  className,
}: {
  time: string;
  title: string;
  type?: string;
  location?: string;
  isLong?: boolean;
  highlight?: boolean;
  className?: string;
}) => {
  const getStyles = () => {
    if (type === "transport") return "bg-gray-50 border-gray-200 text-gray-600";
    if (type === "meal")
      return "bg-yellow-50 border-yellow-100 text-yellow-900";
    if (highlight)
      return "bg-purple-100 border-purple-200 text-purple-900 ring-1 ring-purple-300";
    return "bg-white border-gray-200 text-gray-800";
  };

  return (
    <div
      className={`m-2 p-3 rounded-lg border ${getStyles()} ${isLong ? "h-[278px] sm:h-[260px]" : ""} ${className}`}
    >
      <div className="text-[10px] font-bold uppercase tracking-wider opacity-70">
        {time}
      </div>
      <div
        className={`font-bold mt-1 leading-tight ${highlight ? "text-lg" : "text-sm"}`}
      >
        {title}
      </div>
      {location && (
        <div className="text-[11px] mt-1 text-gray-500 font-medium">
          📍 {location}
        </div>
      )}
    </div>
  );
};

const LunchSlot = () => (
  <div className="bg-indigo-50 py-2 px-4 border-y border-indigo-100 text-center my-1">
    <span className="text-[10px] font-black text-indigo-400">
      12:30-13:30 LUNCH
    </span>
  </div>
);

export default ScheduleTable;
