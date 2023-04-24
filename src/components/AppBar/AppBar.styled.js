import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
  box-shadow: ${p => p.theme.sectionShadow};
  border-radius: 15px;
  background-color: rgba(12, 14, 18, 0.7);
`;
