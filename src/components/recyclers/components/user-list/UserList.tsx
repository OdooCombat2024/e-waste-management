// UserList.js
import React, { useState } from 'react';
import { Table } from 'antd';
import './UserList.css';
import UserDetailModal from '../user-detail/UserDetailModal';

const UserList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date and Time',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    {
      key: '1',
      username: 'john_doe',
      name: 'John Doe',
      dateTime: '2023-06-29 12:34',
      address: '123 Main St, Anytown, USA',
      status: 'Active',
    },
    {
      key: '2',
      username: 'jane_smith',
      name: 'Jane Smith',
      dateTime: '2023-06-28 09:22',
      address: '456 Elm St, Othertown, USA',
      status: 'Inactive',
    },
    // Add more user data here
  ];

  const showModal = (record:any) => {
    setSelectedUser(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="user-list-container">
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => ({
          onClick: () => {
            showModal(record);
          },
        })}
      />
      <UserDetailModal
        visible={isModalVisible}
        user={selectedUser}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default UserList;

