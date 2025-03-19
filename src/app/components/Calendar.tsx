'use client';

import { ScheduleBlock } from '../types/schedule';

export default function Calendar({ schedule }: { schedule: ScheduleBlock[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-h-[500px]">
      <h2 className="text-2xl font-bold text-[#355238] mb-2">Weekly Schedule</h2>
      <div className="grid grid-cols-7 gap-2">
        {/* Add calendar grid here */}
      </div>
    </div>
  );
}
