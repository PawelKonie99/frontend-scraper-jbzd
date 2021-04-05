import React from "react";
import Layout from "../layout/Layout";
import { Itheme } from "../utils/theme";
import styled from "styled-components";

const InterfaceContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  background: ${({ theme }: { theme: Itheme }) => theme.colors.background};
  padding: 4rem 0;
`;

const AddMemePage = () => {
  return (
    <Layout>
      <InterfaceContainer>elo</InterfaceContainer>
    </Layout>
  );
};

export default AddMemePage;
