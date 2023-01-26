import BaseNavbarLink from '../BaseNavbarLink'
import BaseNavbarThemeButton from '../BaseNavbarThemeButton'

export default function BaseNavbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <ul className="flex -ml-3">
        <li>
          <BaseNavbarLink href="/">Home</BaseNavbarLink>
        </li>
        <li>
          <BaseNavbarLink href="/blog">Blog</BaseNavbarLink>
        </li>
      </ul>
      <BaseNavbarThemeButton />
    </nav>
  )
}
