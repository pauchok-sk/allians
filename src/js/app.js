import "../scss/style.scss";
import burger from "./files/burger.js";
import inputmask from "./files/inputmask.js";
import map from "./files/map.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
burger();
map();
sliders();
inputmask();
mediaAdaptive();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{src: "#modal-connect", type: "inline"}])
