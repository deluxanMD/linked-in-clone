import ErrorOutlined from "@mui/icons-material/ErrorOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { Box } from "@mui/material";

type HelperTextType = {
  error: any;
  helperText: any;
};

const HelperText = ({ error, helperText, ...rest }: HelperTextType) => {
  if (!!error) {
    return (
      <Box display="flex" alignItems="center" data-testid="HelperText.Error" {...rest}>
        <ErrorOutlined sx={{ mr: "4px", fontSize: "16px" }} />
        {error.message}
      </Box>
    );
  } else if (!!helperText) {
    return (
      <Box display="flex" alignItems="center" data-testid="HelperText.HelperText" {...rest}>
        <InfoOutlined sx={{ mr: "4px", fontSize: "16px" }} />
        {helperText}
      </Box>
    );
  } else {
    return null;
  }
};
export default HelperText;
