import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const SingleLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SingleLayout;
