import { Fragment, useState } from 'react';
import styled from 'styled-components';

import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  ListItem,
} from '../../App';

export const Select = ({ title, options, required }) => {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const Arrow = styled.div`
    width: 15px;
    height: 15px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: ${selectIsOpen ? 'rotate(-45deg)' : 'rotate(135deg)'};
    margin-bottom: ${selectIsOpen ? '-10px' : '10px'};
  `;

  const selectToggleHandler = () => {
    setSelectIsOpen(!selectIsOpen);
  };

  const onOptionClickHandler = (value) => () => {
    setSelectedOption(value);
    setSelectIsOpen(false);
  };

  return (
    <Fragment>
      <DropDownContainer>
        <DropDownHeader onClick={selectToggleHandler}>
          <div>{selectedOption || title}</div>
          <Arrow></Arrow>
        </DropDownHeader>
        {selectIsOpen && (
          <DropDownList>
            {options.map((option) => (
              <ListItem
                key={Math.random()}
                onClick={onOptionClickHandler(option)}
              >
                {option}
              </ListItem>
            ))}
          </DropDownList>
        )}
      </DropDownContainer>
    </Fragment>
  );
};
