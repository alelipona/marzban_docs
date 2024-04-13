import "svg-pan-zoom-gesture/css/SvgPanZoomUi.css";
import { SvgPanZoomUi } from "svg-pan-zoom-gesture";

document
  .querySelectorAll(
    ".sl-markdown-content svg:not(.icon):not(.tree-icon), .sl-markdown-content img[src$='.svg' i]"
  )
  .forEach((element) => {
    const container = document.createElement("div");
    container.className = "svg-pan-zoom";
    element.replaceWith(container);
    container.append(element);
    // @ts-expect-error
    new SvgPanZoomUi({ element, container }).on();
  });