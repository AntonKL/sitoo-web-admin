import axios from '../../../../../utils/axiosInstance';
import { SITE_ID } from '../../../../../config/constants';
// eslint-disable-next-line import/no-cycle
import { actionCreators as actions } from '../../../../../store/Modal';
import { actionCreators as userActions } from '../../../../../store/Users';
import store from '../../../../../store/configurateStore';
import handleError from '../../../../../utils/handleError';

const url = `/sites/${SITE_ID}/users.json`;

const submitForm = (values, props) => {
  const { firstName, lastName, email } = values;
  const { reset } = props;
  return axios.post(url, {
    ...firstName && { namefirst: firstName },
    ...lastName && { namelast: lastName },
    ...email && { email },
  }).then(() => {
    store.dispatch(userActions.getUsers());
    store.dispatch(actions.closeModal());
    setTimeout(reset);
  }).catch((error) => handleError(error));
};

export default submitForm;
