import { ReactElement, useActionState } from "react";
import emailjs from "@emailjs/browser";
import { createStyles } from "@/styles/Styling";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

enum FormState {
  IDLE,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
}

const styles = createStyles({
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    margin: "50px 50px",
    marginBottom: "100px",
    width: "100%",
  },
  contactForm: {
    justifyContent: "center",
    width: "60%",
  },
  formLabel: {
    fontSize: "1.5em",
    width: "140px",
    alignSelf: "left",
  },
  formTextInput: {
    color: "black",
    "& .MuiFilledInput-root": {
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: "white",
      },
      "&.Mui-focused": {
        backgroundColor: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "black",
      "&.Mui-focused": {
        color: "black",
      },
    },
  },
  textArea: {
    width: "400px",
    alignSelf: "right",
    padding: "10px",
    height: "8em",
  },
  submitButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    padding: "6px 20px",
    margin: "20px 0px",
    fontSize: "1.2em",
    border: "2px solid hsla(0, 0%, 0%, 0.8)",
    borderRadius: "4px",
    boxShadow: "2px 2px 5px hsl(0, 0%, 10%)",
  },
  submitSuccessText: {
    textAlign: "center",
    display: "block",
    color: "hsl(120, 100%, 37%)",
  },
  submitErrorText: {
    textAlign: "center",
    display: "block",
    color: "red",
  },
});

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

  const getTextFieldGridItem = (
    component: ReactElement,
    isLarge: boolean = false
  ) => {
    return <Grid size={{ sm: 12, md: isLarge ? 12 : 6 }}>{component}</Grid>;
  };

  const [actionState, action, isPending] = useActionState(
    sendEmail,
    FormState.IDLE
  );

  return (
    <Box sx={styles.contentContainer}>
      <Grid
        container
        component="form"
        action={action}
        columnSpacing={4}
        rowSpacing={4}
        style={styles.contactForm}
      >
        {getTextFieldGridItem(
          <TextField
            required
            fullWidth
            variant="filled"
            label="Name"
            placeholder="Your Name"
            name={FROM_NAME}
            sx={styles.formTextInput}
          />
        )}
        {getTextFieldGridItem(
          <TextField
            required
            fullWidth
            variant="filled"
            type="email"
            label="Email"
            placeholder="example@mail.com"
            name={FROM_EMAIL}
            sx={styles.formTextInput}
          />
        )}
        {getTextFieldGridItem(
          <TextField
            required
            multiline
            fullWidth
            rows={4}
            variant="filled"
            label="Message"
            placeholder="A message..."
            name={MESSAGE}
            sx={styles.formTextInput}
          />,
          true
        )}
        <Grid sx={styles.submitButtonContainer}>
          <Button
            type="submit"
            style={styles.submitButton}
            disabled={isPending}
          >
            {isPending ? "Sending..." : "Send"}
          </Button>
        </Grid>
      </Grid>

      {!isPending && actionState === FormState.SUBMIT_ERROR && (
        <Typography variant="body1" sx={styles.submitErrorText}>
          An error occured while trying to submit the form.
        </Typography>
      )}
      {!isPending && actionState === FormState.SUBMIT_SUCCESS && (
        <Typography variant="body1" sx={styles.submitSuccessText}>
          Message sent!
        </Typography>
      )}
    </Box>
  );
};
