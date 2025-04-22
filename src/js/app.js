import "../scss/style.scss";
import burger from "./files/burger.js";
import fileToggle from "./files/fileToggle.js";
import headerScroll from "./files/headerScroll.js";
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
fileToggle();
headerScroll();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});
// Fancybox.show([{src: "#modal-connect", type: "inline"}])
