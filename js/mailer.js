const email_form = document.querySelector(".email-form");
const submit_button_container = document.querySelector(".submit_button");

const sendMail = () => {
  if (
    email_form.name.value !== "" &&
    email_form.email.value !== "" &&
    email_form.message.value !== ""
  ) {
    const submit_button = `
          <a href= "mailto:jumashafara@gmail.com?subject=Can we connect?&body=${
            email_form.message.value +
            " From " +
            email_form.name.value +
            ", " +
            email_form.email.value
          }" class= "rounded p-3 text-white text-center font-medium m-auto bg-[#228b24] hover:bg-green-500"
          >Confirm and Submit Message</a>
          `;

    submit_button_container.innerHTML = submit_button;
  }
};
