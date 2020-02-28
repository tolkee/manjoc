import React from 'react';
import styled from "styled-components";

import Switch from '@material-ui/core/Switch';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface ToggleWithIconsProps {
  checked: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

function ToggleWithIcons(props: ToggleWithIconsProps) {
  return (
    <ToggleWrapper>
      {!props.checked && <Brightness2Icon color="disabled" />}
      <Switch
        checked={props.checked}
        onChange={props.onChange}
        color="primary"
      />
      {props.checked && <Brightness4Icon color="primary" />}
    </ToggleWrapper>
  )
};

export default ToggleWithIcons;
