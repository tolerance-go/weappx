import connect from './connect';
import { setStore, getStore } from './store';
import { mapState, mapActions } from './helpers';

const connector = {
  connect,
  setStore,
  getStore,
  mapState,
  mapActions,
};

export default connector;
