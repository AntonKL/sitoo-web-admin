/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-final-form';
import { Modal, Button, Alert } from 'antd';
import UserForm from '../../components/Form';
import { actionCreators as actions } from '../../../../store/Modal';
import submitForm from './helpers/submitForm';
import { modalNames } from '../../../../utils/constants';
import validate from '../../helpers/validate';

const UpdateUser = ({
  user: {
    namefirst, namelast, email, key, userid,
  },
}) => {
  const content = useSelector((state) => state.modalData);
  const dispatch = useDispatch();
  return (
    <>
      <a href="#" onClick={() => dispatch(actions.openModal(`${modalNames.UPDATE_USER}-${key}`))}>
        Modify user
      </a>
      <Form
        onSubmit={submitForm}
        userid={userid}
        validate={validate}
        initialValues={{
          firstName: namefirst,
          lastName: namelast,
          userId: userid,
          email,
        }}
        render={({ handleSubmit, submitting, submitError }) => (
          <form onSubmit={handleSubmit} id="modifyUserForm">
            <Modal
              title="Change user data"
              visible={content.visible && content.name === `${modalNames.UPDATE_USER}-${key}`}
              onCancel={() => dispatch(actions.closeModal())}
              footer={[
                <Button key="back" htmlType="button" onClick={() => dispatch(actions.closeModal())}>
                  Cancel
                </Button>,
                <Button key="submit" form="modifyUserForm" type="primary" htmlType="submit" loading={submitting}>
                  Save user
                </Button>,
              ]}
            >
              <UserForm />
              {submitError && <Alert message={submitError} type="error" />}
            </Modal>
          </form>
        )}
      />
    </>
  );
};

export default UpdateUser;

UpdateUser.propTypes = {
  user: PropTypes.shape({
    namefirst: PropTypes.string,
    namelast: PropTypes.string,
    email: PropTypes.string,
    key: PropTypes.string,
    userid: PropTypes.string,
  }).isRequired,
};
