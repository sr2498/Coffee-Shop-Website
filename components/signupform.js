import { InputText } from "primereact/inputtext";
import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import styles from "./signupform.module.css";
import EmailValidator from "email-validator";
import { Toast } from "primereact/toast";

const SignupForm = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const toast = useRef(null);

  const show = (severity, msg, life) => {
    toast.current.show({ severity: severity, summary: msg, life: life });
  };

  const handleFormSubmit = (e) => {
    if (!EmailValidator.validate(emailValue) || !emailChecked) {
      if (!EmailValidator.validate(emailValue)) {
        show("error", "Invalid email address", 5000);
      }

      if (!emailChecked) {
        show("error", "Please Mark Checkbox for Email", 5000);
      }

      e.preventDefault();
      return false;
    }

    props.showToats(
      "success",
      "Congratualtions! Please check your email",
      10000
    );
    props.toggleModal();
    return true;
  };

  const handleCheckBox = (e) => {
    setEmailChecked(e.target.checked);
  };

  return (
    <div>
      <Toast ref={toast} style={{ zIndex: "10000000" }} />
      <form
        action="https://gmail.us17.list-manage.com/subscribe/post?u=d0ca157696d358a8f575473a8&amp;id=64cfd1917c&amp;v_id=4302&amp;f_id=000162e0f0"
        method="post"
        target="_blank"
        onSubmit={(e) => handleFormSubmit(e)}
        className="pt-3"
      >
        <label htmlFor="email" className={`${styles.textSub} block pb-2`}>
          Email Address
        </label>
        <InputText
          id="email"
          name="EMAIL"
          value={emailValue}
          className="w-full"
          onChange={(e) => setEmailValue(e.target.value)}
        />

        <p>
          Please select all the ways you would like to hear from Journey Beans
        </p>

        <input
          type="checkbox"
          id="gdpr_92046"
          name="gdpr[92046]"
          onChange={handleCheckBox}
          className="gdpr"
          value="Y"
          style={{ transform: "scale(1.5, 1.5)" }}
        />
        <span className="pl-2">Email</span>

        <input
          type="text"
          name="b_d0ca157696d358a8f575473a8_64cfd1917c"
          style={{ display: "none" }}
          tabIndex="-1"
          value=""
        />
        <p className={`${styles.textSub}`}>
          You can unsubscribe at any time by clicking the link in the footer of
          our emails. For information about our privacy practices, please visit
          our website.
        </p>
        <p className={`${styles.textSub}`}>
          We use Mailchimp as our marketing platform. By clicking below to
          subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing.
          <a href="https://mailchimp.com/legal/terms" target="_blank">
            {" "}
            Learn more
          </a>{" "}
          about Mailchimp's privacy practices.
        </p>
        {/* <input type='submit' name='subscribe' id='mc-embedded-subscribe' className='button' value='Subscribe' /> */}
        <div className="flex flex-row-reverse">
          <Button label="Submit" type="submit" className="p-button-warning" />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
