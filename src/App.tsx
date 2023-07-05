import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/globalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <ToastContainer />
      <RoutesMain />
    </>
  )
};
