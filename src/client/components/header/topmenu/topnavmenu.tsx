import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  TopMenuContainer,
  TonMenuItem,
  TopMenuLink,
} from './topnavmenu.styled';
import { TAppState } from '../../../state/store';

const TopNavigationMenu: React.FC = () => {
  const currentshell = useSelector(
    (state: TAppState) => state.condition.appcondition.currentshell
  );
  const { pathname } = useLocation();
  return (
    <TopMenuContainer>
      <TonMenuItem flag={pathname === '/psone'}>
        <TopMenuLink
          className="TopMenuLink"
          to={`/psone?shell=${currentshell}`}
        >
          {'${.} Prompt'}
        </TopMenuLink>
      </TonMenuItem>
      <TonMenuItem flag={pathname === '/result'}>
        <TopMenuLink
          className="TopMenuLink"
          to={`/result?shell=${currentshell}`}
        >
          {'<.> Result'}
        </TopMenuLink>
      </TonMenuItem>
    </TopMenuContainer>
  );
};

export default TopNavigationMenu;
