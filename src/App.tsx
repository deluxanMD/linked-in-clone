import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AuthRouter from "components/routers/auth-router.component";

const App = () => {
  return (
    <Box data-testid="App.Container">
      <BrowserRouter>
        <AuthRouter />
      </BrowserRouter>
    </Box>
  );
};

export default App;
