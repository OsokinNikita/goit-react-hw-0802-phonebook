import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 22px;
width: 90%;
padding: 30px;
border-radius: 15px;
box-shadow: ${p => p.theme.insideShadow};
background-color: ${p => p.theme.colors.backgroundColors};
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0 auto;
`;
