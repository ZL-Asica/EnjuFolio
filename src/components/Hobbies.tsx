import { SectionUnderline } from '@/components/common'

interface HobbiesProps {
  hobbies: Hobby[]
}

const Hobbies = ({ hobbies }: HobbiesProps) => {
  return (
    <section
      className="max-w-3xl mx-auto text-left motion-safe:animate-blur-in-glow"
      aria-labelledby="hobbies-section"
    >
      <div className="flex items-baseline gap-3">
        <h2 id="hobbies-section" className="text-2xl font-semibold tracking-tight">
          Hobbies
        </h2>
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          outside the lab
        </span>
      </div>

      <SectionUnderline />

      <p className="my-6 text-base leading-relaxed tracking-wide">
        Outside of research, I enjoy:
      </p>

      <ul className="space-y-2 list-disc list-inside text-base leading-relaxed">
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            className="
              pl-1
              marker:text-primary-400 dark:marker:text-primary-300
              marker:font-medium
            "
          >
            {hobby.emoji !== undefined && (
              <span className="mr-1.5 align-[0.03em]" aria-hidden="true">
                {hobby.emoji}
              </span>
            )}

            <span className="font-semibold tracking-wide">
              {hobby.name}
            </span>

            {hobby.description && (
              <>
                <span className="mx-0.5">
                  {' — '}
                </span>
                <span>
                  {hobby.description}
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>

  )
}

export default Hobbies
