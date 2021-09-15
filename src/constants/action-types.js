import auth from './actions/auth';
import orders from './actions/orders';
import others from './actions/others';
import * as table from './actions/table';

export default {
  ...table,
  ...auth,
  ...orders,
  ...others
};
