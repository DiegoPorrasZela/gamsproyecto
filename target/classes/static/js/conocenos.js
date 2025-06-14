
(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert(
            "¡Gracias por tu interés! Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto."
          );
          form.reset();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  document
    .getElementById("distribuidorForm")
    .addEventListener("submit", function (event) {
      const checkboxes = [
        document.getElementById("ropaHombre"),
        document.getElementById("ropaNino"),
        document.getElementById("coleccionAnime"),
        document.getElementById("coleccionDeporte"),
      ];

      const alMenosUnoMarcado = checkboxes.some((cb) => cb.checked);

      if (!alMenosUnoMarcado) {
        event.preventDefault();
        event.stopPropagation();
        const checkboxContainer = document.querySelector(
          ".col-md-12:nth-of-type(9)"
        );
        const invalidFeedback =
          checkboxContainer.querySelector(".invalid-feedback");
        invalidFeedback.style.display = "block";
      }
    });
})();
