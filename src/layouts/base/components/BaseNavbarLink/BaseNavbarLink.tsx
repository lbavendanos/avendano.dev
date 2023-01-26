import { cn } from 'lib/utils/helpers'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'

interface BaseNavbarLinkProps extends LinkProps {
  children?: React.ReactNode
}

export default function BaseNavbarLink({
  href,
  ...props
}: BaseNavbarLinkProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link
      {...props}
      href={href}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'px-3 py-2',
        'rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
    />
  )
}
