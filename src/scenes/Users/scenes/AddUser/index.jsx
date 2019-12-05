import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-final-form';
import { Modal, Button, Alert } from 'antd';
import AddUserForm from '../../components/Form';
import { actionCreators as actions } from '../../../../store/Modal';
import submitForm from './helpers/submitForm';
import validate from '../../helpers/validate';
import { modalNames } from '../../../../utils/constants';

const AddUser = () => {
  const content = useSelector((state) => state.modalData);
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="primary" onClick={() => dispatch(actions.openModal(modalNames.ADD_USER))}>
        Add user
      </Button>
      <Form
        onSubmit={submitForm}
        validate={validate}
        render={({ handleSubmit, submitting, submitError }) => (
          <form onSubmit={handleSubmit} id="addUserForm">
            <Modal
              title="Add user"
              visible={content.visible && content.name === modalNames.ADD_USER}
              onCancel={() => dispatch(actions.closeModal())}
              footer={[
                <Button key="back" htmlType="button" onClick={() => dispatch(actions.closeModal())}>
                  Cancel
                </Button>,
                <Button key="submit" form="addUserForm" type="primary" htmlType="submit" loading={submitting}>
                  Add user
                </Button>,
              ]}
            >
              <AddUserForm />
              {submitError && <Alert message={submitError} type="error" />}
            </Modal>
          </form>
        )}
      />
    </div>
  );
};

export default AddUser;
