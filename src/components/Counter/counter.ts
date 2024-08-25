import { h, defineComponent, ref, type Component } from "vue-demi";
import counterStyles from "./counter.module.css";

export type CounterComponent = typeof Counter;

export const Counter = defineComponent({
  name: "Counter",
  props: {
    buttonLabel: { type: String, required: false },
  },
  emits: {
    counterUpdated: null,
  },
  setup(props, { emit }) {
    const counter = ref(0);

    function handleClickMe() {
      counter.value++;
      emit("counterUpdated", counter.value);
    }

    return () =>
      h("div", { class: counterStyles.counter_wrapper }, [
        h(
          "span",
          { class: counterStyles.counter_num },
          `counter: ${counter.value}`,
        ),
        h(
          "button",
          {
            onClick: handleClickMe,
            on: { click: handleClickMe },
            class: counterStyles.counter_btn,
          },
          props.buttonLabel || "Click me",
        ),
      ]);
  },
});
