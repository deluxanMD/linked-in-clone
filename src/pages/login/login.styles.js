import styled from "styled-components";
import { Paper } from "@mui/material";

export const PageContainer = styled(Paper)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginFormContainer = styled(Paper)`
  width: 320px;
  padding: 15px;
`;

export const Logo = styled("img")`
  width: 100px;
  position: absolute;
  top: 20px;
  left: 40px;
`;
