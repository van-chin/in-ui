<template>
  <el-button v-bind="$attrs" @click="handleClick">{{ text }} </el-button>
</template>

<script>
export default {
  name: "InButton",
  props: {
    text: String
  },
  created() {
    // console.info("InButton => ...");
  },
  mounted() {
    // console.info("InButton mounted => ...");
  },
  methods: {
    handleClick() {
      // console.info("in-button handleClick add prevent ");
      this.$emit("click");
    }
  }
};
</script>
