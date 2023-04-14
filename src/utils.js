export const elements = [];

/**
 *
 * @param {string} selector
 * @param {string} element_type
 */
export function activateBehaviorByClassname(selector, element_type) {
    if (typeof selector !== "string") return;
    const els = document.querySelectorAll(`.${selector}`);
    switch (element_type) {
        case "input":
            if (els.length) inputBehavior(els);
        default:
            return;
    }
}

/**
 *
 * @param {array} elements
 * @returns
 */
const inputBehavior = (elements) => {
    if (typeof elements !== "object") return;

    const inputs = elements;
    if (!inputs.length) return;

    inputs.forEach((input) => {
        const children = [...input.children];
        if (!children.length) return;
        input.addEventListener("click", () => eventModule(children));
        input.addEventListener("focusin", () => eventModule(children));
    });

    const eventModule = (arr) => {
        arr.forEach((child) => {
            if (child.nodeName == "INPUT") {
                child.focus();
                child.addEventListener("blur", (e) => eventModuleTrigger(e));
                child.addEventListener("change", (e) => {
                    eventModuleTrigger(e);
                    req(e)
                });
                child.parentElement.classList.add("active");
            }
        });

        const eventModuleTrigger = (e) => {
            if (!e.target.value) return e.target.parentElement.classList.contains("active") && e.target.parentElement.classList.remove("active");
            e.target.parentElement.classList.add("active");
        };

        const req = (e) => {
            // console.log(e.target.parentElement.getAttributeNames());
            if (e.target.parentElement.getAttribute("required")) {
                if (e.target.value) return e.target.parentElement.classList.contains("required") && e.target.parentElement.classList.remove("required");
                e.target.parentElement.classList.add("required");
            }
        };
    };
};

/**
 *
 * @param {string} scope
 * @returns
 */
export const setRequired = (scope) => {
    if (!scope) return "must not left empty";
    return scope;
};
