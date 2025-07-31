'use client'
import Link from 'next/link'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const currentPath = usePathname();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPath]);

  return (
    <aside className="layout__sidebar col-3" aria-label="주요메뉴">
      <nav className="layout__nav" role="navigation">
        <Link href="/playground/flex-grid" className={currentPath === '/playground/flex-grid' ? 'is-active' : ''}>Flex Grid</Link>
        <Link href="/playground/color" className={currentPath === '/playground/color' ? 'is-active' : ''}>Color</Link>
        <Link href="/playground/typography" className={currentPath === '/playground/typography' ? 'is-active' : ''}>Typography</Link>
        <Link href="/playground/button" className={currentPath === '/playground/button' ? 'is-active' : ''}>Button</Link>
        <Link href="/playground/input/inputText" className={currentPath === '/playground/input/inputText' ? 'is-active' : ''}>Input text</Link>
        <Link href="/playground/input/inputRadio" className={currentPath === '/playground/input/inputRadio' ? 'is-active' : ''}>Input radio</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;