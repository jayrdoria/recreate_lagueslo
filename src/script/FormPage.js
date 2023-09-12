import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

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
      contactFormSubmitted: false, // Added flag
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
      try {
        console.log("Submitting newsletter...");

        const response = await axios.post("../../backend/send_email.php", {
          email: this.email,
          type: "newsletter",
        });

        console.log("Data to be sent:", {
          email: this.email,
          type: "newsletter",
        });

        console.log("Response received:", response.data);

        if (response.data && response.data.success) {
          console.log("Newsletter Email sent successfully!");
        } else {
          console.error("Error from server:", response.data.message);
        }
        // Set the submitted flag
        this.submitted = true;

        // Reset the form
        this.email = "";
        this.isValidEmail = false;

        // Reset the submitted flag after a short delay to avoid immediate validation
        setTimeout(() => {
          this.submitted = false;
        }, 100);
      } catch (error) {
        console.error("Caught an error during submit:", error.message);
      }
    },

    async submitContactForm() {
      try {
        console.log("Submitting contact form...");

        const response = await axios.post("../../backend/send_email.php", {
          name: this.contactName,
          email: this.contactEmail,
          message: this.contactMessage,
          type: "contact",
        });

        console.log("Data to be sent:", {
          name: this.contactName,
          email: this.contactEmail,
          message: this.contactMessage,
          type: "contact",
        });

        console.log("Response received:", response.data);

        if (response.data && response.data.success) {
          console.log("Contact Form Email sent successfully!");
        } else {
          console.error("Error from server:", response.data.message);
        }
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
      } catch (error) {
        console.error(
          "Caught an error during submitContactForm:",
          error.message
        );
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
