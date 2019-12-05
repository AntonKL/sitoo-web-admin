import { FORM_ERROR } from 'final-form';
import axios from '../../../../../utils/axiosInstance';
import { SITE_ID } from '../../../../../config/constants';
import { actionCreators as actions } from '../../../../../store/Modal';
import { actionCreators as userActions } from '../../../../../store/Users';
import store from '../../../../../store/configurateStore';


const submitForm = (values, props) => {
  const {
    firstName,
    lastName,
    email,
    userId,
  } = values;
  const { reset } = props;
  const url = `/sites/${SITE_ID}/users/${userId}.json`;
  return axios.put(url, {
    ...firstName && { namefirst: firstName },
    ...lastName && { namelast: lastName },
    ...email && { email },
  }).then(() => {
    store.dispatch(userActions.getUsers());
    store.dispatch(actions.closeModal());
    setTimeout(reset);
  }).catch((error) => ({ [FORM_ERROR]: error.response.data.errortext }));
};

export default submitForm;
