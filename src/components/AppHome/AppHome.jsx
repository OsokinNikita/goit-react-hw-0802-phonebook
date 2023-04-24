import { useAuth } from 'hooks';
import { Wrapper, Title, Text, NavItem } from './AppHome.styled';

export const AppHome = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Wrapper>
      <Title>Contact manager📗</Title>

      {!isLoggedIn && (
        <Text>
          To use the application you need to 
          <NavItem to="/register">Register</NavItem>
        </Text>
      )}
    </Wrapper>
  );
};
