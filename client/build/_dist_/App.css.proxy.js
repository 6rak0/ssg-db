
const code = ".app.svelte-t8533u{max-width:90%;margin:0 auto}.container.svelte-t8533u{display:flex;justify-content:space-evenly}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);