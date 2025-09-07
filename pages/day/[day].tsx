
import fs from 'fs'; import path from 'path'; import Link from 'next/link';
export default function Day({day}:{day:any}){
  if(!day) return <div className="p-8">Not found</div>;
  return (<div className="p-8"><Link href="/"><a className="text-blue-400">← Back</a></Link><h1 className="text-2xl font-bold mt-4">Day {day.day}: {day.title}</h1><div className="mt-3 card p-4"><h3 className="font-semibold">Subtasks</h3><ul className="mt-2">{day.subtasks.map((s:any,i:number)=>(<li key={i}><strong>{s.title}:</strong> {s.time} • {s.difficulty}</li>))}</ul></div><div className="mt-4 card p-4"><h3 className='font-semibold'>Resources</h3><ul className='mt-2'>{day.resources.map((r:any,i:number)=>(<li key={i}><strong>{r.lang.toUpperCase()}</strong>: <a href={r.url} target='_blank' rel='noreferrer' className='text-blue-300'>{r.title}</a></li>))}</ul></div></div>)
}
export async function getStaticPaths(){
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'public','data','curriculum.json'),'utf8'));
  return {paths: data.map((d:any)=>({params:{day:String(d.day)}})), fallback:false}
}
export async function getStaticProps({params}:{params:any}){
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'public','data','curriculum.json'),'utf8'));
  const day = data.find((x:any)=>String(x.day)===params.day) || null;
  return {props:{day}}
}
