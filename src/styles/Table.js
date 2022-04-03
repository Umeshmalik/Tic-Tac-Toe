import styled from "@emotion/styled";

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    margin: auto;
`;

export const TR = styled.tr`
    border-bottom: 1px solid #ccc;
`;

export const TD = styled.td`
    height: 5ch;
    width: 5ch;
    min-width: 5ch;
    max-width: 5ch;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    margin: 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
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

export const TBody = styled.tbody`
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;