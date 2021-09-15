import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Table from '../../../components/TableV2';
import Header from '../../../components/Headers/OrderHeader';
import TableError from '../../../components/TableV2/Error';
import {
  ContentBodyContainer,
  ContentContainer
} from '../../../components/Styles';
import { headerToolTips, toolTips } from './helper';
import { headerMaker } from '../../../components/TableV2/helpers';
import { fetchData } from '../../../redux/modules/orders/actions';
import { ordersHeader } from '../../../redux/modules/table/common';
import { useQuery } from '../../useQuery';

const Orders = () => {
  const {
    handleOnTableChange,
    setSort,
    query
  } = useQuery({ headers: ordersHeader, fetchData });

  const {
    loading, data, total, error
  } = useSelector((state) => state.ordersReducer);

  const headerData = useSelector(({ tableReducer }) => tableReducer.ordersHeader);
  const headers = useMemo(() => headerMaker(headerData), [headerData]);

  return (
    <ContentContainer>
      <ContentBodyContainer>
        <Header
        />
        {!loading && error ? (
          <TableError message={error} />
        ) : (
          <Table
            headers={headers}
            data={data}
            toolTips={toolTips}
            headerToolTips={headerToolTips}
            onChange={handleOnTableChange}
            setSort={setSort}
            total={total}
            query={query}
            loading={loading}
          />
        )}
      </ContentBodyContainer>
    </ContentContainer>
  );
};

export default Orders;
