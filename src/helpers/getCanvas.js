import html2canvas from "html2canvas";

// Transform previewed poster in canvas
const getCanvas = async () => {
  const lastScroll = window.scrollY;
  window.scrollTo(0, 0);
  const ref = document.querySelector("#screensaver");
  ref.style.opacity = 1;
  const canvas = await html2canvas(ref, { scale: 3 });
  ref.style.opacity = 0;
  window.scroll(0, lastScroll);
  return canvas;
};

export default getCanvas;
