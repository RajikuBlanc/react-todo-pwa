import React from 'react';
import { styled } from '@mui/system';
const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};

// --------------- Styled ---------------
const ContainerStyle = styled('div')({
  maxWidth: '500px',
  margin: '2rem auto'
});
export default Container;
