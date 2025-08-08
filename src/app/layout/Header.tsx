import Link from 'next/link';

const Header = () => {
  return (
    <header className="layout__header" role="header">
      <div className="layout__block row">
        <div className="layout__header-content col-3">
          <Link href="/">
            UI 컴포넌트
          </Link>
        </div>
        <div className="layout__header-menu col-9">
          <div>
            <Link href="https://github.com/ariyu0126/ui" target="_blank">
              Github
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
