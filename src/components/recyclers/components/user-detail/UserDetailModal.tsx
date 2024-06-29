// UserDetailModal.js
import React from 'react';
import { Modal } from 'antd';

const UserDetailModal = ({ visible, user, onOk, onCancel } : { visible :any, user : any, onOk : any, onCancel:any}) => {
  return (
    <Modal
      title="User Details"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      {user && (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Date and Time:</strong> {user.dateTime}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Status:</strong> {user.status}</p>
        </div>
      )}
    </Modal>
  );
};

export default UserDetailModal;
