import styled from '@emotion/styled';

export const App = styled.div`
    background-color: ${ props => props.theme ? "#fafafa" : "#222" };
    color: ${props => props.theme ? "#333" : "#fafafa"};
    transition: all 0.5s ease-in-out;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    text-align: center;
`;