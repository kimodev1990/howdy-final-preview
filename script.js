const upperTitle = document.getElementById("upper-title");
const lowerTitle = document.getElementById("lower-title");
const partnersButton = document.getElementById("partnerships-button");
const mediaButton = document.getElementById("media-button");
const partnershipsPopup = document.getElementById("partnerships-popup");
const connectPopup = document.getElementById("connect-popup");
const closeSignPartner = document.getElementById("close-sign-label-partner");
const closeSignLabelMedia = document.getElementById("close-sign-label-media");
const logoTitle = document.getElementById("logo-title");
const bodyBG = document.getElementById("body-bg");
const formPartners = document.getElementById("first-form");
const email = document.getElementById("email-form-partners");
const invalidLabel = document.getElementById("invalid");
const notes = document.getElementById("notes-form-partners");
const noBlank = document.getElementById("noblank");

const formMedia = document.getElementById("second-form");
const emailMedia = document.getElementById("email-form-media");
const invalidMedia = document.getElementById("invalid-media");
const notesMedia = document.getElementById("notes-form-media");
const noBlankMedia = document.getElementById("noblank-media");

function sendEmail() {
  const bodySubject = `Details: <br> <br> Email Address: ${email.value} <br> Notes: ${notes.value}`;

  Email.send({
    SecureToken: "400cb0da-0119-4637-99f1-264853788997",
    To: "team@howdypays.com",
    From: "team@howdypays.com",
    Subject: "New Message from Client",
    Body: bodySubject,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thank You",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  });
}

function sendEmailMEdia() {
  const bodySubjectMedia = `Details: <br> <br> Email Address: ${emailMedia.value} <br> Notes: ${notesMedia.value}`;

  Email.send({
    SecureToken: "400cb0da-0119-4637-99f1-264853788997",
    To: "team@howdypays.com",
    From: "team@howdypays.com",
    Subject: "New Message from Client",
    Body: bodySubjectMedia,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Thank You",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  if (email.value == "") {
    invalidLabel.classList.remove("hidden");
  }
  email.addEventListener("keyup", () => {
    if (email.value != "") {
      invalidLabel.classList.add("hidden");
    } else {
      invalidLabel.classList.remove("hidden");
    }
  });

  if (notes.value == "") {
    noBlank.classList.remove("hidden");
  }
  notes.addEventListener("keyup", () => {
    if (notes.value != "") {
      noBlank.classList.add("hidden");
    } else {
      noBlank.classList.remove("hidden");
    }
  });
}

formPartners.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  if (validateEmail(email.value.trim()) === true) {
    invalidLabel.classList.remove("hidden");
  } else {
    invalidLabel.classList.add("hidden");
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  if (
    invalidLabel.classList.contains("hidden") &&
    noBlank.classList.contains("hidden")
  ) {
    sendEmail();

    formPartners.reset();
    return false;
  }
});

function checkInputsMedia() {
  if (emailMedia.value == "") {
    invalidMedia.classList.remove("hidden");
  }
  emailMedia.addEventListener("keyup", () => {
    if (emailMedia.value != "") {
      invalidMedia.classList.add("hidden");
    } else {
      invalidMedia.classList.remove("hidden");
    }
  });

  if (notesMedia.value == "") {
    noBlankMedia.classList.remove("hidden");
  }
  notesMedia.addEventListener("keyup", () => {
    if (notesMedia.value != "") {
      noBlankMedia.classList.add("hidden");
    } else {
      noBlankMedia.classList.remove("hidden");
    }
  });
}

formMedia.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputsMedia();

  if (validateEmail(emailMedia.value.trim()) === true) {
    invalidMedia.classList.remove("hidden");
  } else {
    invalidMedia.classList.add("hidden");
  }

  function validateEmail(inputText) {
    const mailForm = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailForm)) {
      return false;
    }
    return true;
  }

  if (
    invalidMedia.classList.contains("hidden") &&
    noBlankMedia.classList.contains("hidden")
  ) {
    sendEmailMEdia();

    formMedia.reset();
    return false;
  }
});

function upperHeadTitle(x) {
  if (x.matches) {
    upperTitle.innerHTML = "LIVE LIFE IN FLOW";
    lowerTitle.innerHTML = "coming soon";
  } else {
    upperTitle.innerHTML = "coming soon";
    lowerTitle.innerHTML = "LIVE LIFE IN FLOW";
  }
}

var x = window.matchMedia("(min-width:768px)");
upperHeadTitle(x);
x.addEventListener("change", () => {
  upperHeadTitle(x);
});

partnersButton.addEventListener("click", () => {
  partnershipsPopup.classList.remove("hidden");
  connectPopup.classList.add("hidden");
  upperTitle.classList.add("title-opacity");
  lowerTitle.classList.add("title-opacity");
  logoTitle.classList.add("title-opacity");
  bodyBG.classList.add("change-bg");
});

mediaButton.addEventListener("click", () => {
  connectPopup.classList.remove("hidden");
  partnershipsPopup.classList.add("hidden");
  upperTitle.classList.add("title-opacity");
  lowerTitle.classList.add("title-opacity");
  logoTitle.classList.add("title-opacity");
  bodyBG.classList.add("change-bg");
});

closeSignPartner.addEventListener("click", () => {
  partnershipsPopup.classList.add("hidden");
  upperTitle.classList.remove("title-opacity");
  lowerTitle.classList.remove("title-opacity");
  logoTitle.classList.remove("title-opacity");
  bodyBG.classList.remove("change-bg");
});

closeSignLabelMedia.addEventListener("click", () => {
  connectPopup.classList.add("hidden");
  upperTitle.classList.remove("title-opacity");
  lowerTitle.classList.remove("title-opacity");
  logoTitle.classList.remove("title-opacity");
  bodyBG.classList.remove("change-bg");
});
