
export default function ProjectsPanel({projects}:{projects:any}){
  return (
    <div className="space-y-4">
      <div className="card p-4">
        <h3 className="font-semibold">Mini Projects</h3>
        <ul className="mt-2 space-y-2">{projects.mini_projects.map((p:any)=>(<li key={p.id}><div className="font-medium">{p.name}</div><div className="muted">{p.description}</div></li>))}</ul>
      </div>
      <div className="card p-4">
        <h3 className="font-semibold">Capstones</h3>
        <ul className="mt-2">{projects.capstones.map((c:any)=>(<li key={c.id}><div className="font-medium">{c.name}</div><div className="muted">{c.description}</div></li>))}</ul>
      </div>
    </div>
  )
}
