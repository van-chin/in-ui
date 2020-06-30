<template>
  <el-dialog v-bind="$attrs" v-on="$listeners" append-to-body>
    <img width="100%" :src="$attrs.file.url" alt="" v-if="$attrs.file.type" />
    <iframe
      v-else
      :src="$attrs.file.url"
      width="100%"
      height="600"
      frameborder="no"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      allowtransparency="yes"
    >
    </iframe>
  </el-dialog>
</template>

<script>
export default {
  name: "InPreview"
};
</script>
