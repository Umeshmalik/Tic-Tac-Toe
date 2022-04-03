import styled from "@emotion/styled";

export const H2 = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
    text-align: center;
    text-decoration: underline;
`;

export const ThemeButton = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    align-items: center;
    background-color: ${ props => props.theme ? "#fafafa" : "#222" };
    border: none;
    color: ${props => props.theme ? "#333" : "#fafafa"};
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    text-align: center;
    text-decoration: none;
    margin: 1rem 1rem 0 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 0.5rem;
    &:hover {
        background-color: ${ props => props.theme ? "#222" : "#fafafa" };
        color: ${ props => props.theme ? "#fafafa" : "#333" };
    }
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.9);
    }
`;

export const Span = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
    @media (max-width: 600px) {
        transition: all 0.5s ease-in-out;
        font-size: 1.2rem;
    }
    @media (max-width: 500px) {
        transition: all 0.5s ease-in-out;
        display: none;
    }
`;