import styled from 'styled-components';

const Button = styled.button`
   margin: 5px; 
   background: ${props => props.theme.background};
   color: ${props => props.theme.color};
   padding: 3px;
   border-radius: 3px;   
`;



const ThemeSwitcher = ({ toggleTheme }) => (
    // <button onClick={toggleTheme}>Alterar tema</button>
    <Button onClick={toggleTheme}>Alterar tema</Button>
);

export default ThemeSwitcher;