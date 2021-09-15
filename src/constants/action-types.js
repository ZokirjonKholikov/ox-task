import application from './actions/application';
import auth from './actions/auth';
import card from './actions/card';
import charts from './actions/charts';
import chat from './actions/chat';
import home from './actions/home';
import notification from './actions/notification';
import orders from './actions/orders';
import branch from './actions/branch';
import regions from './actions/regions';
import boxes from './actions/boxes';
import pickup from './actions/pickup';
import deliveries from './actions/deliveries';
import sidebar from './actions/sidebar';
import params from './actions/params';
import others from './actions/others';
import * as table from './actions/table';
import users from './actions/users';

export default {
  ...table,
  ...application,
  ...auth,
  ...card,
  ...charts,
  ...boxes,
  ...chat,
  ...home,
  ...regions,
  ...notification,
  ...orders,
  ...branch,
  ...pickup,
  ...params,
  ...deliveries,
  ...sidebar,
  ...others,
  ...users,
};
