import React from 'react';
import { Card } from 'antd';
 
const { Meta } = Card;
 
interface Service {
  title: string;
  description: string;
}
 
interface UserServicesProps {
  services: Service[];
}
 
export const UserServices: React.FC<UserServicesProps> = ({ services }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {services.map((service, index) => (
        <Card
          key={index}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src='/mouse.jpg' />}
        >
          <Meta title={service.title} description={service.description} />
        </Card>
      ))}
    </div>
  );
};