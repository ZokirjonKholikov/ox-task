import { createSelector } from 'reselect';

export default createSelector(
  (state) => ({
    auth: state.authReducer,
    modal: state.modalReducer,
  }),
  ({ auth, modal }) => ({
    token: auth.token,
    showModal: modal.blured.show,
  })
);
