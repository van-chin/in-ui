<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners" @change="handleChange">
    <el-checkbox
      class="in-checkbox"
      :label="option[props.value]"
      :key="index"
      v-for="(option, index) in options"
      >{{ option[props.label] }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script>
export default {
  name: "InCheckboxGroup",
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
