<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners" @change="handleChange">
    <el-radio
      v-for="(item, idx) in options"
      v-bind="item"
      :label="item[props.value]"
      :key="idx"
      >{{ item[props.label] }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  name: "InRadioGroup",
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      }
    },
    props: {
      type: Object,
      default() {
        return {
          value: "value",
          label: "label"
        };
      }
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    }
  }
};
</script>
