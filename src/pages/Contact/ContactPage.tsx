import { ContactForm } from "@/components/ContactForm/ContactForm";
import pageStyles from "@/pages/Pages.module.css";

const ContactPage = () => {
  return (
    <>
      <h1 className={pageStyles["page-title"]}>Contact</h1>
      <ContactForm />
    </>
  );
};

export default ContactPage;
