import type { ReactNode } from 'react';
import Sidebar from '../layout/Sidebar';

const ComponentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout__block row">
      <Sidebar />
      <section className="layout__content col-9" role="content" aria-labelledby="본문">
        {children}
      </section>
    </div>
  );
}

export default ComponentsLayout;
