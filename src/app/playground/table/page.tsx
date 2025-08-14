'use client';

import { useState } from 'react';
import { generateCode } from '@/lib/utils/generateCode';
import { SourceCodeViewer, Checkbox, Typography, Button, Table } from '@/components';
import '@/styles/pages/playground.scss';

const TablePage = () => {
  const [page, setPage] = useState(1);
  // table1 데이터
  const table1Columns = [
    // {
    //   title: 'Check',
    //   dataIndex: 'check',
    //   key: 'check',
    //   render: (value: unknown, row: any, i: any) => <Checkbox />,
    // },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: 100,
    },
    {
      title: 'Hobby',
      dataIndex: 'hobby',
      key: 'hobby',
    },
    // {
    //   title: 'Date',
    //   key: 'date',
    //   render: (value: unknown, row: any, i: any) => row.operationRender?.(value, row, i) ?? null,
    // },
  ];
  const table1DataSource = [
    {
      key: '1',
      check: true,
      name: 'Harry',
      age: 32,
      hobby: 'Drawing, Dancing, Swimming, Running, Reading, Cooking, Singing, etc.',
      // operationRender: () => <a href="#none">2025.05.05</a>,
      isRowHeader: true,
    },
    {
      key: '2',
      name: 'Ron',
      age: 22,
      hobby: 'Reading',
      // operationRender: () => <a href="#none">2025.05.05</a>,
    },
    {
      key: '3',
      name: 'Hermione',
      age: 42,
      hobby: 'Swimming',
      // operationRender: () => <a href="#none">2025.05.05</a>,
    },
    {
      key: '4',
      name: 'Malfoy',
      age: 22,
      hobby: 'Running',
      // operationRender: () => <a href="#none">2025.05.05</a>,
    },
  ];

  return (
    <div className="playground">
      <Typography.Title>Table</Typography.Title>
      <Typography.Title level={2}>1. Table 속성</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>- bordered: true, false</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>true</Typography.Text>
          <Table columns={table1Columns} dataSource={table1DataSource} bordered={true} />
          <br />
          <Typography.Text>false</Typography.Text>
          <Table columns={table1Columns} dataSource={table1DataSource} bordered={false} />
        </div>
        <Typography.Title level={3}>- scroll: true, false</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>true</Typography.Text>
          <Table columns={table1Columns} dataSource={table1DataSource} scroll={true} />
          <br />
          <Typography.Text>false</Typography.Text>
          <Table columns={table1Columns} dataSource={table1DataSource} scroll={false} />
        </div>
        <Typography.Title level={3}>- footer content</Typography.Title>
        <div className="playground__inner-box">
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            footerContent="footer content"
          />
        </div>
        <Typography.Title level={3}>- pagination ellipsis: true, false</Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>true</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="bottomCenter"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: true,
            }}
          />
          <Typography.Text>false</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="bottomCenter"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
        </div>
        <Typography.Title level={3}>
          - pagination position: topLeft, topRight, topCenter, bottomLeft, bottomRight,
          bottomCenter, none
        </Typography.Title>
        <div className="playground__inner-box">
          <Typography.Text>topLeft</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="topLeft"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
          <br />
          <Typography.Text>topRight</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="topRight"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
          <br />
          <Typography.Text>topCenter</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="topCenter"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: true,
            }}
          />
          <br />
          <Typography.Text>bottomLeft</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="bottomLeft"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
          <br />
          <Typography.Text>bottomRight</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="bottomRight"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
          <br />
          <Typography.Text>bottomCenter</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="bottomCenter"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
          <br />
          <Typography.Text>none</Typography.Text>
          <Table
            columns={table1Columns}
            dataSource={table1DataSource}
            pagination="none"
            paginationProps={{
              total: 100,
              pageSize: 10,
              current: page,
              onChange: setPage,
              ellipsis: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TablePage;
