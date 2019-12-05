const TOGGLE_MODAL = 'TOGGLE_MODAL';

const initialState = {
  modal: {
    visible: false,
    confirmLoading: false,
  },
};

export const actionCreators = {
  toggleModal: () => ({
    type: TOGGLE_MODAL,
  }),
};

export const reducer = (state = initialState, action) => {
  if (action.type === TOGGLE_MODAL) {
    return {
      ...state,
      modal: {
        visible: !state.modal.visible,
      },
    };
  }
  return state;
};
