import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const LoadingSpinner = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  }}>
    <Flex align="center" justify="center">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 200, color: '#14ebb5' }} spin />} />
    </Flex>
  </div>
);

export default LoadingSpinner;