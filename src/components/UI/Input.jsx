import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 33px;
  background: rgba(165, 212, 238, 0.18);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
  padding: 7px 18px;
  margin-bottom: 11px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  flex: 0 1
    ${(props) => {
      switch (props.flex) {
        case 'half':
          return '49%';
        case 'two':
          return '67%';
        case 'one':
          return '31%';
        default:
          return '49%';
      }
    }};
`;
