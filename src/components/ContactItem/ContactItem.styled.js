import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const DeleteButton = styled.button`
  font-family: 'Death Note Font', sans-serif;
  --green: #8e8d8d;
  font-size: 15px;
  padding: 8px 15px;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(142, 141, 141, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(142, 141, 141, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(142, 141, 141, 0.4),
    0 0 9px 3px rgba(142, 141, 141, 0.1);

  :hover {
    color: #82ffc9;
    box-shadow: inset 0 0 10px rgba(142, 141, 141, 0.6),
      0 0 9px 3px rgba(142, 141, 141, 0.2);
  }

  :before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(142, 141, 141, 0.1) 40%,
      rgba(142, 141, 141, 0.1) 60%,
      transparent 100%
    );
  }

  :hover:before {
    transform: translateX(15em);
  }
`;

// export const DeleteButton = styled.button`
//   font-family: 'Death Note Font', sans-serif;
//   border: none;
//   cursor: pointer;
//   outline: none;
//   padding: 6px 20px;

//   font-size: ${p => p.theme.fontSizes.m};
//   font-weight: ${p => p.theme.fontWeights.bold};
//   color: ${p => p.theme.colors.white};
//   background-color: ${p => p.theme.colors.blue};
//   border-radius: ${p => p.theme.radii.sm};

//   :hover {
//     background-color: ${p => p.theme.colors.green};
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
//     scale: 1.1;
//   }
// `;
