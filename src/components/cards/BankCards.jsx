import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { useContext } from 'react';
import { CardStyle } from '../../context/createContext';



const StyledCard = styled(Card)`
  width: 150px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const CardLogo = styled(Box)`
  width: 60px;
  height: 40px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const CardBank = styled(Typography)`
  font-size: .8rem !important;
  color: #000;
  background-color: whiteSmoke;
  padding: 5px 10px;
  border-radius: 4px;
`;

const CardNumber = styled(Typography)`
  font-size: .7rem !important;
  font-weight: bold;
  color: #000;
`;

const CardExpiration = styled(Typography)`
  font-size: .5rem !important;
  color: #888;
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

const UserName = styled(Typography)`
  font-size: .5rem !important;
  color: #888;
  position: absolute;
  bottom: 10px;
  left: 15px;
`;


const BankCard = ({ number, bank, expiration, userName, color, index }) => {
  const { isActive } = useContext(CardStyle);
  return (
    <StyledCard sx={{
      backgroundColor: isActive === index ? color : '',
    }}>
      <CardLogo />
      <CardBank>{bank}</CardBank>
      <CardContent>
        <CardNumber>{number}</CardNumber>
      </CardContent>
      <CardExpiration sx={{
        color: isActive === index ? 'black' : ''
      }}>انقضا: {expiration}</CardExpiration>
      <UserName sx={{
        color: isActive === index ? 'black' : ''
      }}>{userName}</UserName>
    </StyledCard>
  );
};

export default BankCard;
