import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import SignupForm from "../components/signupform";

const SignUp = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const toast = useRef(null);

  useImperativeHandle(ref, () => ({
    toggleModal() {
      setVisible(!visible);
    },
  }));

  const toggleModal = () => {
    setVisible(!visible);
  };

  const showToats = (severity, msg, life) => {
    toast.current.show({ severity: severity, summary: msg, life: life });
  };

  return (
    <div>
      <Toast ref={toast} />
      <Dialog
        contentStyle={{ backgroundColor: "#F8F6F4" }}
        headerStyle={{ backgroundColor: "#EEE2CA", textAlign: "center" }}
        header="Sign Up"
        visible={visible}
        style={{ width: "40vw" }}
        breakpoints={{ "641px": "40vw" }}
        onHide={() => setVisible(false)}
      >
        <SignupForm toggleModal={toggleModal} showToats={showToats} />
      </Dialog>
    </div>
  );
});

export default SignUp;
