export interface SkillProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function CardSkill({ title, description, icon }: SkillProps) {
  return (
    <div className="flex gap-3 items-center justify-center">
      <aside className="flex flex-col w-[100%] sm:w-[80%] lg:max-w-[350px] ">
        <h3 className="text-2xl text-green-500 font-bold">{title}</h3>
        <p className="text-sm h-36 overflow-y-auto custon-container-text-skills pr-1">
          {description}
        </p>
      </aside>
      {icon}
    </div>
  )
}
