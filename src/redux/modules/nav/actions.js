import types from '../../../constants/action-types';

export const setTitle = (title) => ({ type: types.NAVBER_SET_TITLE, title });
export const setBreadCrumb = (breadCrumb) => (
  { type: types.NAVBER_SET_BREADCRUMB_TITLE, breadCrumb }
);
