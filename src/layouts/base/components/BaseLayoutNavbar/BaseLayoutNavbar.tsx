import BaseLayoutNavbarLink from '../BaseLayoutNavbarLink'
import BaseLayoutNavbarThemeButton from '../BaseLayoutNavbarThemeButton'

export default function BaseLayoutNavbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <ul className="flex">
        <li>
          <BaseLayoutNavbarLink href="/">Home</BaseLayoutNavbarLink>
        </li>
        <li>
          <BaseLayoutNavbarLink href="/blog">Blog</BaseLayoutNavbarLink>
        </li>
      </ul>
      <BaseLayoutNavbarThemeButton />
    </nav>
  )
}
