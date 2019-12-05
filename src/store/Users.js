import axios from '../utils/axiosInstance';
import { SITE_ID } from '../config/constants';

const GET_USERS = 'GET_USERS';
const GET_USERS_PENDING = 'GET_USERS_PENDING';
const GET_USERS_REJECTED = 'GET_USERS_REJECTED';
const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';

const DELETE_USER = 'DELETE_USER';
const DELETE_USER_PENDING = 'DELETE_USER_PENDING';
const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED';
const DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED';

const CHANGE_PAGE = 'CHANGE_PAGE';

const initialState = { isLoading: false, items: [], pagination: { current: 1, pageSize: 5 } };

export const actionCreators = {
  getUsers: (pagination = { current: 1, pageSize: 5 }) => async (dispatch) => {
    const url = `/sites/${SITE_ID}/users.json`;

    dispatch({
      type: CHANGE_PAGE,
      payload: {
        page: pagination.current,
      },
    });

    dispatch({
      type: GET_USERS,
      payload: {
        promise: axios.get(url, {
          params: {
            start: pagination.current * pagination.pageSize - pagination.pageSize,
            num: pagination.pageSize,
          },
        }),
      },
    });
  },
  deleteUser: (userId) => async (dispatch) => {
    const url = `/sites/${SITE_ID}/users/${userId}.json`;

    dispatch({
      type: DELETE_USER,
      payload: {
        promise: axios.delete(url),
      },
    }).then(() => dispatch(actionCreators.getUsers()));
  },
};

export const reducer = (state = initialState, action) => {
  if (action.type === GET_USERS_PENDING) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      hasError: true,
      isLoading: false,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      ...action.payload.data,
      isLoading: false,
    };
  }
  if (action.type === DELETE_USER_PENDING) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === DELETE_USER_REJECTED) {
    return {
      ...state,
      errorMessage: action.payload.errortext,
      errorCode: action.payload.response.status,
      isLoading: false,
    };
  }
  if (action.type === DELETE_USER_FULFILLED) {
    return {
      ...state,
      ...action.payload.data,
      isLoading: false,
    };
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        current: action.payload.page,
      },
    };
  }
  return state;
};
