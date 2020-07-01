<template>
  <div :class="wrapClasses">
    <viewer
      :images="list.images"
      :options="viewerOptions"
      :class="viewerClasses"
      ref="viewer"
    >
      <template slot-scope="scope">
        <img
          v-for="src in scope.images"
          :src="src"
          :class="imageClasses"
          :key="src"
        />
      </template>
    </viewer>
    <img
      v-for="(pdf, key) in list.pdfs"
      src=""
      @click="handlePreviewPdf(pdf)"
      :class="imageClasses"
      :key="key"
    />
    <in-preview :visible.sync="previewing" :file="currentFile"></in-preview>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer/src/component.vue";
const prefixCls = "in-viewer";
export default {
  name: "InViewer",
  components: {
    Viewer
  },
  watch: {
    fileList: {
      immediate: false,
      handler: function() {
        this.handlePsl();
      }
    }
  },
  props: {
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted() {
    this.handlePsl();
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}`];
    },
    viewerClasses() {
      return `${prefixCls}-files`;
    },
    imageClasses() {
      return `${prefixCls}-files-image`;
    },

    leftActionsClasses() {
      return `${prefixCls}-footer-left-actions`;
    },
    rightPaginationClasses() {
      // console.info("rightPaginationClasses", this.footerClasses);
      return `${prefixCls}-footer-right-pagination`;
    },
    inPaginationClasses() {
      return `${prefixCls}-footer-right-pagination-paginations`;
    }
  },
  data() {
    return {
      list: {},
      viewerOptions: {
        zIndex: 9999
      },
      currentFile: {},
      previewing: false
    };
  },
  methods: {
    handlePreviewPdf(pdf) {
      this.currentFile = {
        type: false,
        url: pdf
      };
      this.previewing = true;
    },
    isAssetTypeAnImage(extension) {
      return (
        [
          "png",
          "jpg",
          "jpeg",
          "bmp",
          "gif",
          "webp",
          "psd",
          "svg",
          "tiff"
        ].indexOf(extension.toLowerCase()) !== -1
      );
    },

    getFileExtension(name) {
      const index = name.lastIndexOf(".");
      const extension = name.substr(index + 1);
      return extension;
    },

    handlePsl() {
      const list = {
        images: [],
        pdfs: []
      };

      this.fileList.forEach(file => {
        console.info(file);
        if (this.isAssetTypeAnImage(this.getFileExtension(file.url))) {
          list.images.push(file.url);
        } else {
          list.pdfs.push(file.url);
        }
      });
      this.list = list;
    }
  }
};
</script>
