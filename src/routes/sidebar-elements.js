import OrdersList from '../views/Orders/List';
import OrdersWithSearch from '../views/OrderswithSearch/List';

export const childRoutes = [
  {
    path: '/',
    component: OrdersList,
    icon: 'Orders',
    title: 'Products',
  },
  {
    path: '/order-search',
    component: OrdersWithSearch,
    icon: 'Orders',
    title: 'Products with Search',
  },
];
