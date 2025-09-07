
'use client';
import Link from 'next/link';
export default function DayCard({day}:{day:any}){
  return (
    <div className="card p-4">
      <div className="flex justify-between">
        <div>
          <div className="text-lg font-semibold">Day {day.day}: {day.title}</div>
          <div className="muted">Month {day.month}</div>
        </div>
        <div className="flex flex-col items-end">
          <Link href={`/day/${day.day}`}><a className="px-3 py-1 bg-slate-700 rounded">Open</a></Link>
          <div className="mt-2 text-sm muted">{day.subtasks[0].time} • {day.subtasks[0].difficulty}</div>
        </div>
      </div>
    </div>
  )
}
