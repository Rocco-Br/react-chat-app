import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    // notification is from react-toastify library
    <div className="">
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;
