import { service } from '.';

export default {
  getAll: (query) => service.get(`/variations?${query}`),
};
