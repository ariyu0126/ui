'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Typography } from '@/components';

export const menuData = [
  {
    category: 'Foundation',
    items: [
      { href: '/playground/flex-grid', label: 'Flex/Grid' },
      { href: '/playground/color', label: 'Color' },
      { href: '/playground/typography', label: 'Typography' },
    ],
  },
  {
    category: 'Action',
    items: [{ href: '/playground/button', label: 'Button' }],
  },
  {
    category: 'Form',
    items: [
      { href: '/playground/input/inputText', label: 'Input' },
      { href: '/playground/input/textarea', label: 'Textarea' },
      { href: '/playground/input/radio', label: 'Radio' },
      { href: '/playground/input/checkbox', label: 'Checkbox' },
      { href: '/playground/select', label: 'Select' },
      { href: '/playground/toggle', label: 'Toggle' },
    ],
  },
  {
    category: 'Data Display',
    items: [{ href: '/playground/table', label: 'Table' }],
  },
];

const Sidebar = () => {
  const currentPath = usePathname();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentPath]);

  return (
    <aside className="layout__sidebar col-3" aria-label="주요메뉴">
      <nav className="layout__nav" role="navigation">
        {menuData.map((section) => (
          <div key={section.category}>
            <Typography.Title level={4} titleColor="gray600">
              {section.category}
            </Typography.Title>
            <ul>
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={currentPath === item.href ? 'is-active' : ''}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
