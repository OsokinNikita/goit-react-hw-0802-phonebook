import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[5]}px;
  height: 100%;
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  color: white;
`;

export const SecondTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: white;
`;
