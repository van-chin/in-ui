<template>
  <div class="ims-upload" v-bind="$attrs">
    <!-- {{ fileList }} -->
    <ul class="file-list">
      <draggable :list="fileList">
        <li class="item" :key="key" v-for="(file, key) in fileList">
          <img
            :src="file.url"
            v-if="isAssetTypeAnImage(getFileExtension(file.url))"
          />

          <i class="el-icon-edit el-upload-list__item-thumbnail" v-else></i>
          <!-- {{ file.name }} -->
          <span class="cover">
            <span
              class="action preview"
              @click="handlePictureCardPreview(file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <el-popconfirm
              title="确认要删除此文件么，删除后不可恢复？"
              iconColor="red"
              @onConfirm="handleRemove(file)"
            >
              <span class="action delete" slot="reference">
                <i class="el-icon-delete"></i>
              </span>
            </el-popconfirm>
          </span>
        </li>
      </draggable>

      <li class="item tigger" v-show="uploaderVisible">
        <el-upload
          v-bind="$attrs"
          v-on="$listeners"
          :show-file-list="false"
          ref="uploader"
          list-type="picture-card"
          :on-success="handleOnSuccess"
        >
          <template slot="default">
            <slot>
              <i class="el-icon-plus"></i>
            </slot>
          </template>

          <template slot="tip">
            <slot name="tip"></slot>
          </template>
        </el-upload>
      </li>
    </ul>

    <in-preview
      :visible.sync="previewing"
      title="预览"
      :file="currentFile"
    ></in-preview>
  </div>
</template>

<script>
import preview from "../preview";
import draggable from "vuedraggable";

export default {
  name: "InUpload",
  components: { "in-preview": preview, draggable },
  props: {
    props: {
      type: Object,
      default: () => {
        return {
          data: "data"
        };
      }
    },
    multifile: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  watch: {
    fileList: {
      handler(newv) {
        console.info("watch => fileList", newv);

        if (this.multifile) {
          this.uploaderVisible = true;
        } else {
          this.uploaderVisible = newv.length == 0;
        }
      },
      deep: true
      // }
    }
  },
  data() {
    return {
      currentPage: 1,
      uploaderVisible: true,
      pageCount: 0,
      disabled: false,
      previewing: false,
      currentFile: {
        type: true,
        url: "",
        name: ""
      }
    };
  },
  computed: {},
  mounted() {
    this.calcUploaderVisible();
  },
  methods: {
    calcUploaderVisible() {
      // console.info("calcUploaderVisible", this.fileList.length);
      if (this.multifile) {
        this.uploaderVisible = true;
      } else {
        this.uploaderVisible = this.fileList.length == 0;
      }
    },
    handleOnSuccess(response, file, fileList) {
      console.info(file);
      let tmpFile = {};
      tmpFile.name = file.name;
      tmpFile.url = response[this.props.data];
      tmpFile.uid = file.uid;
      this.fileList.push(tmpFile);
      this.calcUploaderVisible();
      this.$emit("on-success", response, file, fileList);
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

    getThumbnailUrl(file) {
      // console.info(file);
      let url = "../assets/svg/pdf.svg";
      if (this.isAssetTypeAnImage(this.getFileExtension(file.name))) {
        url = file.url;
      }
      return url;
    },

    getFileExtension(name) {
      const index = name.lastIndexOf(".");
      const extension = name.substr(index + 1);
      console.log(name, extension);
      return extension;
    },
    handleRemove(file) {
      /* eslint-disable */
      // const index = this.fileList.findIndex((item: InUploadFile) => {
      //   return file.url === item.url;
      // });

      const index = this.fileList.findIndex(item => {
        return file.url === item.url;
      });

      /* eslint-disable */

      this.fileList.splice(index, 1);
      this.calcUploaderVisible();
      this.$emit("on-remove", file);
    },
    handlePictureCardPreview(file) {
      this.currentFile.url = file.url;

      this.currentFile.type =
        this.getFileExtension(file.name) == "pdf" ? false : true;

      // window.open('httP://codeo.cn/', 'newwindow', 'height=100, width=400, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
      this.previewing = true;
    }
  }
};
</script>
