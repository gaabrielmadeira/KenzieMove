import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <RoutesMain />
    </>
  )
};
