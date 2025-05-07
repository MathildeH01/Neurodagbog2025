import "clsx";
import { p as push, t as bind_props, n as pop, u as copy_payload, v as assign_payload } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/client.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Button($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<button class="btn btn-accent m-2">`;
  children($$payload);
  $$payload.out += `<!----></button>`;
}
function Input($$payload, $$props) {
  push();
  let { value = "", placeholder } = $$props;
  $$payload.out += `<input class="input m-2"${attr("value", value)}${attr("placeholder", placeholder)}>`;
  bind_props($$props, { value });
  pop();
}
function _page($$payload, $$props) {
  push();
  let userName = "";
  let password = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div>`;
    Input($$payload2, {
      placeholder: "Brugernavn",
      get value() {
        return userName;
      },
      set value($$value) {
        userName = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div>`;
    Input($$payload2, {
      placeholder: "Kodeord",
      get value() {
        return password;
      },
      set value($$value) {
        password = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div>`;
    Button($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Login`;
      }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
