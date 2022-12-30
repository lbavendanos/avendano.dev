import { cn } from '@/lib/utils/helpers'
import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'

interface BaseLayoutNavbarLinkProps extends LinkProps {
  children?: React.ReactNode
}

export default function BaseLayoutNavbarLink({
  href,
  ...props
}: BaseLayoutNavbarLinkProps) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link
      {...props}
      href="/"
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'px-3 py-2'
      )}
    />
  )
}
