import { ProjectData } from '../index'

interface StepsCardProps {
  data: ProjectData[]
  indexProject: number
  setIndexProject: (index: any) => void
}

export function StepsCard({
  data,
  indexProject,
  setIndexProject,
}: StepsCardProps) {
  return (
    <div className="flex gap-2">
      {data.map((item) => {
        return (
          <button
            key={item.id}
            className={`
            w-[10px] 
            h-[10px] 
            rounded-full
            ${indexProject + 1 === item.id ? 'bg-zinc-200' : 'bg-zinc-150'}
          `}
            onClick={() => setIndexProject(item.id)}
          />
        )
      })}
    </div>
  )
}
