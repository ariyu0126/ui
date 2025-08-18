import { cx } from '../../lib/cx';
import { useId } from 'react';
import Pagination from '../Pagination';

const Table = ({
  caption,
  bordered = false,
  scroll = false,
  dataSource,
  columns,
  footerContent,
  pagination = 'none',
  paginationProps,
}: {
  caption?: string;
  bordered?: boolean;
  scroll?: boolean;
  dataSource: any[];
  columns: any[];
  footerContent?: string;
  pagination?:
    | 'topLeft'
    | 'topRight'
    | 'topCenter'
    | 'bottomLeft'
    | 'bottomRight'
    | 'bottomCenter'
    | 'none';
  paginationProps?: {
    total: number;
    pageSize: number;
    current: number;
    onChange: (page: number) => void;
    ellipsis?: boolean;
  };
}) => {
  const uid = useId();
  const descId = footerContent ? `table-desc-${uid}` : undefined;

  return (
    <div className={cx('table', scroll && 'table__scroll', bordered && 'table__borderd')}>
      {(pagination === 'topLeft' || pagination === 'topRight' || pagination === 'topCenter') &&
        paginationProps && (
          <Pagination
            total={paginationProps.total}
            pageSize={paginationProps.pageSize}
            current={paginationProps.current}
            onChange={paginationProps.onChange}
            ellipsis={paginationProps.ellipsis}
            paginationPosition={pagination}
          />
        )}
      <table {...(descId ? { 'aria-describedby': descId } : {})}>
        {caption && <caption>{caption || '데이터 표'}</caption>}
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} title={column.title} style={{ width: column.width }}>
                <span>{column.title}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((row, rowIndex) => (
            <tr key={row.key}>
              {columns.map((col, idx) => {
                const onCell =
                  typeof col.onCell === 'function' ? col.onCell(row, rowIndex) || {} : {};
                const rowSpan = onCell.rowSpan ?? undefined;
                const colSpan = onCell.colSpan ?? undefined;
                const isMergedOut = rowSpan === 0 || colSpan === 0;
                if (isMergedOut) return null;

                const isRowHeaderCell = Boolean(
                  onCell.isRowHeader || col.isRowHeader || (row.isRowHeader && idx === 0),
                );
                const CellTag: any = isRowHeaderCell ? 'th' : 'td';
                const content =
                  typeof col.render === 'function'
                    ? col.render(row[col.dataIndex], row, rowIndex)
                    : row[col.dataIndex];

                return (
                  <CellTag
                    key={col.key}
                    {...(rowSpan ? { rowSpan } : {})}
                    {...(colSpan ? { colSpan } : {})}
                    {...(isRowHeaderCell ? { scope: 'row', title: col.title } : {})}
                  >
                    {content}
                  </CellTag>
                );
              })}
            </tr>
          ))}
        </tbody>
        {footerContent !== undefined && (
          <tfoot>
            <tr>
              <th colSpan={columns.length}>{footerContent}</th>
            </tr>
          </tfoot>
        )}
      </table>
      {footerContent && !caption && (
        <p id={descId} className="sr-only">
          {footerContent}
        </p>
      )}
      {(pagination === 'bottomLeft' ||
        pagination === 'bottomRight' ||
        pagination === 'bottomCenter') &&
        paginationProps && (
          <Pagination
            total={paginationProps.total}
            pageSize={paginationProps.pageSize}
            current={paginationProps.current}
            onChange={paginationProps.onChange}
            ellipsis={paginationProps.ellipsis}
            paginationPosition={pagination}
          />
        )}
    </div>
  );
};

export default Table;
