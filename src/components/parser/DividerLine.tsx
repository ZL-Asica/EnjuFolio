import { SakuraIcon } from '.'

const DividerLine = () => {
  return (
    <div className="relative my-12 flex items-center justify-center group">
      {/* Left line */}
      <hr
        className={`transition-all duration-500 ease-out
        h-0.5 w-2/5
        bg-gradient-to-r
          from-transparent
          via-primary-500 dark:via-primary-300
          to-transparent
        group-hover:w-1/2 group-hover:opacity-100`}
      />

      {/* Sakura icon with rotate on hover */}
      <div
        className="relative mx-4 h-8 w-8 flex items-center justify-center
        text-primary dark:text-primary-dark
        transition-transform duration-700 ease-in-out
        group-hover:rotate-180"
        aria-hidden="true"
      >
        <SakuraIcon />
      </div>

      {/* Right line */}
      <hr
        className={`transition-all duration-500 ease-out
        h-0.5 w-2/5
        bg-gradient-to-l
          from-transparent
          via-primary-500 dark:via-primary-300
          to-transparent
        group-hover:w-1/2 group-hover:opacity-100`}
      />
    </div>

  )
}

export default DividerLine
