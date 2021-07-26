import { t } from "element-ui/lib/locale";

export default {
  methods: {
    t(...args) {
      console.info(args);
      try {
        let rs = t.apply(this, args);
        console.info("rs =>", rs);
        return rs;
      } catch (e) {
        console.info("e =>", e);
        return args[0];
      }
    }
  }
};
