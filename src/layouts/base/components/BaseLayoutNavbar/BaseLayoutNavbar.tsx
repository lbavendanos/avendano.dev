import BaseLayoutNavbarLink from '../BaseLayoutNavbarLink'

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
      <button>Theme</button>
    </nav>
  )
}
