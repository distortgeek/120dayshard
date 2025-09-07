
import fs from 'fs'; import path from 'path'; import DayCard from '../components/DayCard'; import ProjectsPanel from '../components/ProjectsPanel';
export default function Home({curriculum,projects}:{curriculum:any,projects:any}){
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">120-Day Learning Roadmap</h1>
      <div className="grid grid-cols-12 gap-6">
        <main className="col-span-8 space-y-4">
          {curriculum.map((d:any)=>(<DayCard key={d.day} day={d} />))}
        </main>
        <aside className="col-span-4 flex flex-col gap-4">
          <ProjectsPanel projects={projects} />
        </aside>
      </div>
    </div>
  )
}
export async function getStaticProps(){
  const dataDir = path.join(process.cwd(),'public','data');
  const curriculum = JSON.parse(fs.readFileSync(path.join(dataDir,'curriculum.json'),'utf8'));
  const projects = JSON.parse(fs.readFileSync(path.join(dataDir,'projects.json'),'utf8'));
  return {props:{curriculum,projects}}
}
