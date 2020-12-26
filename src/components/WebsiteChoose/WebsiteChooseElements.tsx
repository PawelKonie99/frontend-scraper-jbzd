import styled from "styled-components";
import {device} from '../../utils/sizeBreakpoints'

export const WebsiteChooseContainer = styled.div`
  display: flex;
  padding: 2rem;
  margin-bottom: 2rem;

  @media ${device.mobileM} { 
    padding: 1.4rem;
}


@media ${device.mobileS} { 
  padding: 0rem;
}
`;

export const ChooseTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.7rem;
  margin: 4rem 0 2rem 0;
  text-align: center;

  @media ${device.tablet} { 
    font-size: 1.4rem;
  }

  @media ${device.mobileM} { 
    font-size: 1.3rem;
  }
`;

export const ImageContainer = styled.div<{show:any}>`
  border-bottom: ${(props) =>
    props.show === "active" ? `3px solid #f1eeee` : ""};
`;

export const WebsiteToChoose = styled.img<{show:any}>`
  src: ${(props) => props.src};
  cursor: pointer;
  width: 150px;
  height: 65px;
  margin: 1rem 1rem 1rem 1rem;
  border-radius: 3px;
  box-shadow: ${(props) =>
    props.show === "active"
      ? "0px 0px 3px 3px rgba(223, 223, 223, 0.1)"
      : "0px 0px 3px 3px rgba(0, 0, 0, 0.1)"};

  display: inline-block;
  position: relative;


  @media ${device.tablet} { 
  width: 120px;
  height: 50px
}

@media ${device.mobileM} { 
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}
`
;
