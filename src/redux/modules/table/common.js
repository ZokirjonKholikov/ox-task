import types from '../../../constants/action-types';

export const ordersHeader = [
  {
    id: 1,
    Header: 'ID',
    accessor: 'id',
    disableSortBy: true,
    show: true,
  },
  {
    id: 2,
    Header: 'Name',
    accessor: 'name',
    disableSortBy: true,
    show: true,
  },
  {
    id: 3,
    Header: 'Supplies',
    accessor: 'supplier',
    disableSortBy: true,
    show: true,
  },
  {
    id: 4,
    Header: 'Bar Code',
    accessor: 'barcode',
    disableSortBy: true,
    show: true,
  },
  {
    id: 5,
    Header: 'SKU',
    accessor: 'sku',
    disableSortBy: true,
    show: true,
  },
  {
    id: 6,
    Header: 'Zone',
    accessor: 'zone',
    disableSortBy: true,
    show: true,
  },

  {
    id: 7,
    Header: 'Unit',
    accessor: 'unit',
    disableSortBy: true,
    show: true,
  },
  {
    id: 8,
    Header: 'Last updated time',
    accessor: 'lastUpdateTime',
    disableSortBy: true,
    show: true,
  },
];
export const genericTypes = [
  {
    key: types.ORDERS,
    headerName: 'ordersHeader',
  },
];
