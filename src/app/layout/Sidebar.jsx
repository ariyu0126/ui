'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <aside className="layout__sidebar col-3" aria-label="주요메뉴">
      <nav className="layout__nav" role="navigation">
        <Link href="/playground/color" className={currentPath === '/playground/color' ? 'is-active' : ''}>Color</Link>
        <Link href="/playground/typography" className={currentPath === '/playground/typography' ? 'is-active' : ''}>Typography</Link>
        <Link href="/playground/button" className={currentPath === '/playground/button' ? 'is-active' : ''}>Button</Link>
        <Link href="/playground/input" className={currentPath === '/playground/input' ? 'is-active' : ''}>Input</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;