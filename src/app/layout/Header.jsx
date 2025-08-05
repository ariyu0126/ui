const Header = () => {
  return (
    <header className="layout__header" role="header">
      <div className="layout__block row">
        <div className="layout__header-content col-3">
          <a href="https://ari-ui.netlify.app/">UI 컴포넌트</a>
        </div>
        <div className="layout__header-menu col-9">
          {/* <ul aria-label="메뉴">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Components</a>
            </li>
          </ul> */}
          <div>
            <a href="https://github.com/ariyu0126/ui" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
