import recursionComponent from "../utils/recursionComponent";
import camel from "../utils/camel";
import {
  EMIT_COMPONENT_NAME,
  METHOD_PREFIX
} from "../enums/recursionComponentType";

export default {
  bind(el, binding, vnode) {
    let events = binding.value || {};
    if (
      // eslint-disable-next-line no-prototype-builtins
      events.hasOwnProperty(EMIT_COMPONENT_NAME) &&
      Object.keys(events).length >= 2
    ) {
      let emitComponentName = events[EMIT_COMPONENT_NAME];
      delete events[EMIT_COMPONENT_NAME];
      let emitComponent = recursionComponent(
        vnode.componentInstance.$parent,
        emitComponentName
      );
      if (emitComponent) {
        Object.keys(events).forEach(key => {
          let eventMethod = camel(`${METHOD_PREFIX}-${events[key]}-${key}`);

          console.info(emitComponentName, events, eventMethod, key);

          if (
            Object.prototype.hasOwnProperty.call(emitComponent, eventMethod)
          ) {
            // console.info("=====");
            vnode.componentInstance.$on(key, emitComponent[eventMethod]);
          }
        });
      } else {
        console.error(`Not Found Emit Component: ${emitComponentName}`);
      }
    } else {
      // console.warn('v-events directive arguments error',events);
    }
  }
};
