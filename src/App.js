import styled from 'styled-components';

import { MainForm } from './components/MainForm';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropDownContainer = styled('div')`
  width: 100%;
`;

export const DropDownHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  cursor: pointer;
  width: 100%;
`;

export const DropDownList = styled('ul')`
  background: rgba(165, 212, 238, 0.18);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  position: absolute;
  width: 339px;
  z-index: 2;
`;

export const ListItem = styled('li')`
  line-height: 18px;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.8);
  padding: 7px 18px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #5c97b0;
  }
`;

function App() {
  return (
    <main>
      <MainForm />
    </main>
  );
}

export default App;
