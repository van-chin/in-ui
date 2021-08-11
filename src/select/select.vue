<template>
  <el-select
    v-bind="$attrs"
    v-on="$listeners"
    @change="handleChange"
    @visible-change="handleVisibleChange"
    @remove-tag="handleRemoveTag"
    @clear="handleClear"
    @blur="handleBlur"
    @focus="handleFocus"
    style="width: 100%;"
  >
    <template v-for="(option, index) in options">
      <el-option-group v-if="option.options" v-bind="option" :key="index">
        <el-option
          v-for="(item, idx) in option.options"
          v-bind="item"
          :value="option[props.value]"
          :label="$t(option[props.label])"
          :key="idx"
        ></el-option>
      </el-option-group>

      <el-option
        v-bind="option"
        :value="option[props.value]"
        :label="$t(option[props.label])"
        :key="index"
        v-else
      />
    </template>
  </el-select>
</template>

<script>
export default {
  name: "InSelect",
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
    },
    handleVisibleChange(visible) {
      this.$emit("visible-change", visible);
    },
    handleRemoveTag(value) {
      this.$emit("remove-tag", value);
    },
    handleClear() {
      this.$emit("clear");
    },
    handleBlur(event) {
      this.$emit("blur", event);
    },
    handleFocus(event) {
      this.$emit("focus", event);
    }
  }
};
</script>
