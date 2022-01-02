import styled from "styled-components";
import { device } from "../../utils/sizeBreakpoints";
import { Itheme } from "../../utils/theme";

export const AdminPanelContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    background: ${({ theme }: { theme: Itheme }) => theme.colors.background};
    padding: 4rem 0;
`;

export const BackToMain = styled.a`
    text-decoration: none !important;
    font-size: 2rem;
    margin: 3rem;
    color: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};

    :hover {
        color: ${({ theme }: { theme: Itheme }) => theme.colors.white};
    }

    @media ${device.tablet} {
        margin: 1.3rem;
        font-size: 2rem;
    }

    @media ${device.mobileM} {
        margin: 1rem;
        font-size: 1.6rem;
    }

    @media ${device.mobileS} {
        margin: 1rem;
        font-size: 1.4rem;
    }
`;

export const UsersContainer = styled.div``;

export const UserContainer = styled.div`
    display: flex;
    margin-bottom: 1rem;
    border-bottom: 2px solid black;
    width: 100%;
`;

export const UserName = styled.p`
    padding-right: 2rem;
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

export const UserInfoContainer = styled.div`
    display: flex;
    margin-bottom: 0.3rem;
    align-items: center;
`;

export const IdContainer = styled.div`
    cursor: pointer;
`;

export const DeleteMemeButton = styled.button`
    margin-left: 1rem;
    border: none;
    background: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
    padding: 0.3rem;
    border-radius: 0.2rem;
    outline: inherit;
`;
