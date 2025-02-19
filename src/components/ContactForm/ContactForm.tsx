import { useActionState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

enum FormState {
  IDLE,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
}

const SERVICE_ID = "service_ust1r2e";
const TEMPLATE_ID = "template_kmuutax";
const PUBLIC_KEY = "mPX5YT3YplkZqFoxO";

const FROM_NAME = "from_name";
const FROM_EMAIL = "from_email";
const MESSAGE = "message";

export const ContactForm = () => {
  /**
   * @returns Whether the form was successfully submitted.
   */
  async function sendEmail(_actionState: null | FormState, formData: FormData) {
    const templateParams = {
      from_name: formData.get(FROM_NAME),
      from_email: formData.get(FROM_EMAIL),
      message: formData.get(MESSAGE),
    };

    let didSucceed = true;

    await emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        console.log("form sent");
        didSucceed = true;
      })
      .catch((error) => {
        console.log(error);
        didSucceed = false;
      });

    // Doing this instead of storing a FormState directly to bypass TypeScript error
    return didSucceed ? FormState.SUBMIT_SUCCESS : FormState.SUBMIT_ERROR;
  }

  const [actionState, action, isPending] = useActionState(
    sendEmail,
    FormState.IDLE
  );

  return (
    <div className={styles["page-content"]}>
      <form action={action} className={styles["contact-form"]}>
        <label className={styles["form-label"]}>Name</label>
        <input
          type="text"
          placeholder="Your name"
          name={FROM_NAME}
          required
          className={styles["form-text-input"]}
        />
        <label className={styles["form-label"]}>Email</label>
        <input
          type="email"
          placeholder="example@mail.com"
          name={FROM_EMAIL}
          required
          className={styles["form-text-input"]}
        />
        <label className={styles["form-label"]}>Message</label>
        <textarea
          placeholder="A message..."
          name={MESSAGE}
          required
          className={styles["form-text-input"]}
        />
        <button className={styles["submit-button"]} disabled={isPending}>
          {isPending ? "Sending..." : "Send"}
        </button>
      </form>
      {actionState === FormState.SUBMIT_ERROR && (
        <p className={styles["submit-error-message"]}>
          An error occured while trying to submit the form.
        </p>
      )}
      {actionState === FormState.SUBMIT_SUCCESS && (
        <p className={styles["submit-success-message"]}>Message sent!</p>
      )}
    </div>
  );
};
