import { h, defineComponent, ref, isVue2, isVue3 } from "vue-demi";
import vueVersionStyles from "./vue-version.module.css";

export type VueVersion = typeof VueVersion;

export const VueVersion = defineComponent({
  name: "VueVersion",
  setup() {
    const vueVersion = ref(0);

    if (isVue2) {
      vueVersion.value = 2;
    } else if (isVue3) {
      vueVersion.value = 3;
    }

    return () =>
      h(
        "div",
        { class: (vueVersionStyles as any)["vue-version_wrapper"] },
        `Vue Version: ${vueVersion.value}`,
      );
  },
});
