import styled from 'styled-components';

const List = styled.ul`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: sans-serif;
    font-size: 18px;
    margin: 0 5px;

    li {
        line-height: 36px;
        margin-left: 25px;
    }
`;

// const TodoList = () => (
//     <List>
//         <li>Fazer café</li>
//         <li>Entrar na comunidade da Rocktseat</li>
//         <li>Estudar ReactJS</li>
//     </List>
// );

// export default TodoList;

export default function TodoList() {
    return (
        <List>
            <li>Fazer café</li>
            <li>Entrar na comunidade da Rocktseat</li>
            <li>Estudar ReactJS</li>
        </List>
    );
}