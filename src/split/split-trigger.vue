<template>
  <div :class="classes">
    <div :class="barConClasses" @click="toggleExpand">
      <!--      <i class="el-icon-caret-left" style="cursor: pointer;font-size: 48px;"></i>-->
      <i
        :class="`${prefix}-bar`"
        v-once
        v-for="i in 8"
        :key="`trigger-${i}`"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplitTrigger",
  props: {
    mode: String
  },
  data() {
    return {
      prefix: "ivu-split-trigger",
      initOffset: 0
    };
  },
  computed: {
    isVertical() {
      return this.mode === "vertical";
    },
    classes() {
      return [
        this.prefix,
        this.isVertical
          ? `${this.prefix}-vertical`
          : `${this.prefix}-horizontal`
      ];
    },
    barConClasses() {
      return [
        `${this.prefix}-bar-con`,
        this.isVertical ? "vertical" : "horizontal"
      ];
    }
  },
  methods: {
    toggleExpand() {
      this.$emit("toggle-expand");
    }
  }
};
</script>
