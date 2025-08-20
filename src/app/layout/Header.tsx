import Link from 'next/link';
import { Button } from '@/components';

const Header = () => {
  return (
    <header className="layout__header" role="header">
      <div className="layout__block row">
        <div className="layout__header-content col-3">
          <Link href="/">UI Components</Link>
        </div>
        <div className="layout__header-menu col-9">
          <div className="layout__header-menu-item">
            <Button.Link href="/install" style="text">가이드</Button.Link>
            <Button.Link href="/playground/flex-grid" style="text">컴포넌트</Button.Link>
          </div>
          <div className="flex flex--gap-md">
            <Button.Link href="https://github.com/ure0126/ui" target="_blank" icon="new">
              Github
            </Button.Link>
            {/* <Button.Link
              href="https://www.npmjs.com/package/@ure0126/basic-ui-components"
              target="_blank"
              icon="new"
            >
              NPM
            </Button.Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
