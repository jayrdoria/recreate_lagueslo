import axios from "axios";

export default {
  setup() {
    return {
      title: "Subscribe To Our",
      subtitle: "Subscribe to our newsletter and stay updated.",
    };
  },
  data() {
    return {
      // Data for newsletter form
      email: "",
      isValidEmail: false,
      submitted: false,

      // Data for contact form
      contactName: "",
      contactEmail: "",
      contactMessage: "",
      isContactFormValid: false,
      contactFormSubmitted: false,
    };
  },
  methods: {
    noNullValues(val) {
      if (!this.contactFormSubmitted && !this.submitted) {
        return (val && val.trim() !== "") || "This field is required!";
      }
      return true;
    },
    validateEmail(val) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!this.submitted) {
        if (emailRegex.test(val)) {
          this.isValidEmail = true;
          return true;
        } else {
          this.isValidEmail = false;
          return "Invalid email address!";
        }
      }
      return true;
    },
    validateContactEmail(val) {
      if (!this.contactFormSubmitted) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(val) || "Invalid email address!";
      }
      return true;
    },
    async submit() {
      if (this.isValidEmail && this.email.trim() !== "") {
        try {
          const response = await axios.post(
            "http://localhost:3000/send-email",
            {
              email: this.email,
              type: "newsletter",
            }
          );

          if (response.data && response.status === 200) {
            console.log("Newsletter Email sent successfully via SES!");
            // Set the submitted flag
            this.submitted = true;

            // Reset the form
            this.email = "";
            this.isValidEmail = false;

            // Reset the submitted flag after a short delay to avoid immediate validation
            setTimeout(() => {
              this.submitted = false;
            }, 100);
          } else {
            console.error("Error sending email via SES:", response.data);
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    },
    async submitContactForm() {
      if (this.isContactFormValid) {
        try {
          const response = await axios.post(
            "http://localhost:3000/send-email",
            {
              name: this.contactName,
              email: this.contactEmail,
              message: this.contactMessage,
              type: "contact",
            }
          );

          if (response.data && response.status === 200) {
            console.log("Contact Email sent successfully via SES!");
            // Set the contactFormSubmitted flag
            this.contactFormSubmitted = true;

            // Reset the contact form
            this.contactName = "";
            this.contactEmail = "";
            this.contactMessage = "";
            this.isContactFormValid = false;

            // Reset the contactFormSubmitted flag after a short delay
            setTimeout(() => {
              this.contactFormSubmitted = false;
              this.checkContactFormValidity();
            }, 100);
          } else {
            console.error(
              "Error sending contact email via SES:",
              response.data
            );
          }
        } catch (error) {
          console.error("Error:", error.message);
        }
      }
    },
    checkContactFormValidity() {
      this.isContactFormValid =
        this.contactName.trim() !== "" &&
        this.contactEmail.trim() !== "" &&
        this.validateContactEmail(this.contactEmail) === true &&
        this.contactMessage.trim() !== "";
    },
  },
  watch: {
    contactName() {
      this.checkContactFormValidity();
    },
    contactEmail() {
      this.checkContactFormValidity();
    },
    contactMessage() {
      this.checkContactFormValidity();
    },
  },
  created() {
    this.checkContactFormValidity();
  },
};
