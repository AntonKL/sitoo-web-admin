const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSED = 'MODAL_CLOSED';
const initialState = { visible: false, name: '', data: {} };

export const actionCreators = {
  openModal: (name, data) => ({ type: MODAL_OPEN, payload: { name, data } }),
  closeModal: () => ({ type: MODAL_CLOSED }),
};

export const reducer = (state = initialState, action) => {
  if (action.type === MODAL_OPEN) {
    return {
      ...state,
      visible: true,
      name: action.payload.name,
      data: action.payload.data,
    };
  }

  if (action.type === MODAL_CLOSED) {
    return {
      ...state,
      visible: false,
    };
  }

  return state;
};
