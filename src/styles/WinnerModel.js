import styled from "@emotion/styled";

//make a model to show info
export const WinnerModel = styled.div`
    display: ${ props => props.show ? "block" : "none" };
    position: fixed;
    width: 50%;
    height: 50%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fafafa;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem #ccc;
    transition: all 0.5s ease-in-out;
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(0.9);
    }
    &:hover {
        filter: drop-shadow(0 0 0.5rem #ccc);
    }
`;

export const Button = styled.button`
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.theme ? "#fafafa" : "#222" };
    border: none;
    color: ${props => props.theme ? "#333" : "#fafafa"};
    width: fit-content;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
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