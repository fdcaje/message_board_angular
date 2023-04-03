export const elements = [];

/**
 *
 * @param {string} element_classname
 * @param {string} element_behavior_for
 */
export function activateBehaviorByClassname(element_classname, element_behavior_for) {
    const els = document.querySelectorAll(`.${element_classname}`);
    switch (element_behavior_for) {
        case "input":
            if (els.length) inputBehavior(els);
        default:
            return;
    }
}

const inputBehavior = (input_arr) => {
    const inputs = input_arr;
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
                child.addEventListener("focusin", (e) => eventModuleTrigger(e));
                child.addEventListener("blur", (e) => eventModuleTrigger(e));
                // child.addEventListener("keyup", (e) => eventModuleTrigger(e));
                child.addEventListener("change", (e) => eventModuleTrigger(e));
                child.parentElement.classList.add("active");
            }
        });

        const eventModuleTrigger = (e) => {
            if (!e.target.value) return e.target.parentElement.classList.contains("active") && e.target.parentElement.classList.remove("active");

            e.target.parentElement.classList.add("active");
        };
    };
};
