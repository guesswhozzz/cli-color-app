import React from 'react';
import styled from 'styled-components';
import {
  ControllWrapper,
  AnimatedIcon,
  LeftDivider,
  RightDivider,
} from './controls';
const DropDownMain = styled.div`
  font-family: 'JetBrains', monospace;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: relative;
`;
const DropDownWrapper = styled.div`
  font-size: 1.3rem;
  transition: max-height 0.3s, opacity 0.3s, margin-top 0.3s;
  width: 100%;
  visibility: ${(props: any) => (props.open ? 'hidden' : 'visible')};
  opacity: ${(props: any) => (props.open ? '0' : '1')};
  max-height: ${(props: any) => (props.open ? '0' : '130px')};
  background: transparent;
  color: #e9e9e9;
  overflow-y: auto;
  margin-top: ${(props: any) => (props.open ? '0' : '6px')};
`;
const DropDownTitle = styled.div`
  font-weight: 500;
  transition: padding-bottom 0.3s;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props: any) => (props.open ? '0' : '4px')};
`;
const DropDownMenu = ({
  children,
  selectedItem,
  preview = null,
  flag = true,
  accessory,
  handler,
}: any) => {
  return (
    <DropDownMain open={flag}>
      <DropDownTitle open={flag}>
        {preview}
        {selectedItem}
        <ControllWrapper open={flag} onClick={() => handler(accessory)}>
          <LeftDivider open={flag}>{'['}</LeftDivider>
          <AnimatedIcon open={flag}>{'❯'}</AnimatedIcon>
          <RightDivider open={flag}>{']'}</RightDivider>
        </ControllWrapper>
      </DropDownTitle>
      <DropDownWrapper open={flag}>{children}</DropDownWrapper>
    </DropDownMain>
  );
};

export default DropDownMenu;