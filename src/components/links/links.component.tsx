import { Typography } from "@mui/material";
import * as S from "./links.styles";

type LinksType = {
  text: string;
  color?: string;
  path: string;
};

const Links = ({ text, color = "primary", path }: LinksType) => {
  return (
    <S.Links to={path} data-testid="Links">
      <Typography color={color}>{text}</Typography>
    </S.Links>
  );
};

export default Links;
