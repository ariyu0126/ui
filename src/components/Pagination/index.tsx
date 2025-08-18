import { cx } from '../../lib/cx';
import { Icon } from '../Icon';

const Pagination = ({
  total,
  pageSize,
  current,
  onChange,
  ellipsis = true,
  paginationPosition,
}: {
  total: number;
  pageSize: number;
  current: number;
  onChange: (page: number) => void;
  ellipsis?: boolean;
  paginationPosition?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter';
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const clamp = (n: number) => Math.min(Math.max(n, 1), totalPages);
  const goTo = (page: number) => {
    const next = clamp(page);
    if (next !== current) onChange(next);
  };

  const getPages = (): (number | 'ellipsis')[] => {
    // ellipsis가 false이면 전체 페이지 노출 (1 ~ totalPages)
    if (!ellipsis) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | 'ellipsis')[] = [];
    pages.push(1);
    const start = Math.max(2, current - 1);
    const end = Math.min(totalPages - 1, current + 1);
    if (start > 2) pages.push('ellipsis');
    for (let p = start; p <= end; p += 1) pages.push(p);
    if (end < totalPages - 1) pages.push('ellipsis');
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  const isFirstDisabled = current <= 1;
  const isLastDisabled = current >= totalPages;

  let area: 'top' | 'bottom' | undefined;
  if (paginationPosition?.startsWith('top')) {
    area = 'top';
  } else if (paginationPosition?.startsWith('bottom')) {
    area = 'bottom';
  } else {
    area = undefined;
  }

  let side: 'left' | 'right' | 'center' | undefined;
  if (paginationPosition?.endsWith('Left')) {
    side = 'left';
  } else if (paginationPosition?.endsWith('Right')) {
    side = 'right';
  } else if (paginationPosition?.endsWith('Center')) {
    side = 'center';
  } else {
    side = undefined;
  }

  return (
    <div
      className={cx(
        'pagination',
        side === 'left' && 'pagination--left',
        side === 'center' && 'pagination--center',
        side === 'right' && 'pagination--right',
        area === 'top' && 'pagination--top',
        area === 'bottom' && 'pagination--bottom',
      )}
      role="navigation"
      aria-label="pagination"
    >
      <div className={cx('pagination__inner', ellipsis && 'pagination__inner--ellipsis')}>
        {!isFirstDisabled && (
          <button
            type="button"
            className="pagination__button pagination__button-first"
            onClick={() => goTo(1)}
            aria-label="First page"
          >
            <Icon.arrowLeftDouble />
          </button>
        )}
        {!isFirstDisabled && (
          <button
            type="button"
            className="pagination__button pagination__button-prev"
            onClick={() => goTo(current - 1)}
            aria-label="Previous page"
          >
            <Icon.arrowLeft />
          </button>
        )}
        <div className="pagination__number">
          {getPages().map((item, idx) =>
            item === 'ellipsis' ? (
              <span key={`e-${idx}`} className="pagination__ellipsis" aria-hidden>
                …
              </span>
            ) : (
              <button
                key={item}
                type="button"
                className={`pagination__number-page ${current === item ? 'is-active' : ''}`}
                aria-current={current === item ? 'page' : undefined}
                onClick={() => goTo(item)}
              >
                {item}
              </button>
            ),
          )}
        </div>
        {!isLastDisabled && (
          <button
            type="button"
            className="pagination__button pagination__button-next"
            onClick={() => goTo(current + 1)}
            aria-label="Next page"
          >
            <Icon.arrowRight />
          </button>
        )}
        {!isLastDisabled && (
          <button
            type="button"
            className="pagination__button pagination__button-last"
            onClick={() => goTo(totalPages)}
            aria-label="Last page"
          >
            <Icon.arrowRightDouble />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
