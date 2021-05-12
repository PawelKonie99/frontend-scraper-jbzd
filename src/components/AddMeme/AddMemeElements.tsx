import styled from "styled-components";
import { device } from "../../utils/sizeBreakpoints";
import { Itheme } from "../../utils/theme";

// @media ${device.tablet} {
//   font-size: 1.4rem;
// }

// @media ${device.mobileM} {
//   font-size: 1.3rem;
// }

// @media ${device.mobileS} {
//   padding: 0rem;
// }

export const AddMemeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  background: ${({ theme }: { theme: Itheme }) => theme.colors.background};
  padding: 4rem 0;
`;

export const InputFile = styled.input`
  padding: 0.4rem 1rem;
  margin: 0.3rem;
  border-radius: 3px;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
  background: ${(props) =>
    props.color
      ? props.color
      : ({ theme }: { theme: Itheme }) => theme.colors.darkerBackground};
  border: none;
  font-size: 1rem;
  font-weight: 600;
`;

export const AddMemeForm = styled.form`
  display: flex;
  flex-direction: column;

  min-width: 600px;

  @media ${device.tablet} {
    min-width: 400px;
    max-width: 400px;
  }

  @media ${device.mobileM} {
    min-width: 320px;
    max-width: 320px;
  }

  @media ${device.mobileS} {
    min-width: 280px;
    max-width: 280px;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 3px;
`;

export const MissingValueError = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.error};
  margin: 0.5rem;
`;

export const Success = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }: { theme: Itheme }) => theme.colors.success};
  margin: 0.5rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
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
