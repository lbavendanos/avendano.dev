import { config } from 'lib/utils/helpers'

export default function HomeOverview() {
  const appName = config('app.name')

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
        {appName}
      </h1>
      <h2 className="text-gray-700 dark:text-gray-200 mb-4">
        Software Developer
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        Hello! I am a Software Developer. I specialize in creating web
        applications, although on some occasions I also create mobile
        applications.
      </p>
    </div>
  )
}
