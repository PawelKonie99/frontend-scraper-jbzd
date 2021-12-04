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
