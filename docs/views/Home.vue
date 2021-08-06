<template>
  <div class="hello">
    {{ lang }}
    -- {{ $t(test.abc) }}
    <el-input :placeholder="$t(test.abc)" />
    <in-button
      text="fff"
      v-events="{
        _emit_component_name: 'HelloWorld',
        click: 'batchEdit'
      }"
      >dd</in-button
    >
    <el-button @click="changeL('zh_CN')">zh_CN</el-button>
    <el-button @click="changeL('en_US')">en_US</el-button>
    <in-split
      v-model="split"
      :min="0"
      :max="split"
      @toggle-expand="toggleExpand"
      style="height:400px;"
    >
      <div slot="left" class="split-pane-left">
        <div style="width: 150px;border: 1px solid red;">sdfs</div>
      </div>
      <div slot="right" class="split-pane-right">
        {{ inFormOptions.attributes.model }}
        <in-form :options="inFormOptions">
          <template #filter-btn>
            <in-button text="搜索" type="primary" />
          </template>

          <template #rest-btn>
            <in-button text="重置" />
          </template>
        </in-form>

        <in-curd
          :tables="tables"
          :paginations="paginations"
          style="width:99%;"
          @select="tableSelect"
          @selection-change="tableSelectionChange"
        >
          <template v-slot:header-left-filter>
            header-left-filter sss vv sdfsfsdf
          </template>
          <template #header-right-actions>
            header-right-actions dd
          </template>
          <template slot="footer-left-actions">footer-left-actions</template>
          <template #actions="{ scope }">
            <template slot="header">
              1232sdfsdfs
            </template>
            <in-button text="编辑11" type="text" />
            {{ scope.row.name }}
          </template>
        </in-curd>
      </div>
    </in-split>

    ddd
    <in-upload
      action="http://192.168.0.90:8151/merchant/fileupload/upload"
      :file-list="vfileList"
      :multifile="false"
      :multiple="false"
      :props="{ data: 'tdata' }"
    >
    </in-upload>
    <el-divider content-position="left">Curd</el-divider>
    <div class="layout">
      <div class="left">
        leftdddddd
      </div>
      <div class="right">
        <in-table
          :columns="tables.columns"
          :data="tables.data"
          :columnSetings="true"
          @select="tableSelect"
        ></in-table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      inFormOptions: `systems/inFormOptions`,
      tables: `systems/tables`,
      test: `systems/test`
    })
  },
  watch: {
    "$i18n.locale": function(newVal, oldVal) {
      console.info("oldVal", oldVal);
      console.info("newVal", newVal);

      // this.$store.dispatch('resourceSegments/abc');
      //
      // console.info(this.$store.getters['resourceSegments/filterFmOptions'].items[0]);

      // debugger

      // debugger
    }
  },
  data() {
    return {
      lang: "zh_CN",
      defalutSplitWidth: "200px",
      split: "200px",
      vfileList: [
        {
          name: "dd",
          url:
            "http://qcwbo.oss-cn-chengdu.aliyuncs.com/qcwbo//qita/202008261147016763.png"
        }
      ],
      paginations: {
        background: true,
        total: 100,
        layout: "total, sizes,jumper, prev, pager, next"
      },

      tdata: [
        {
          name: "1",
          created_at: "ddd"
        }
      ],
      columns: [
        {
          label: "ddd",
          prop: "name"
        },
        {
          label: "标识",
          prop: "code"
        },

        {
          label: "创建时间",
          key: "created_at",
          width: 150
        },
        {
          label: "更新时间",
          key: "updated_at",
          width: 150
        },
        {
          label: "操作11",
          slot_name: "action",
          fixed: "right"
        }
      ]
    };
  },
  methods: {
    handleBatchEditClick() {
      console.info("handleBatchEditClick");
    },
    changeL(lang) {
      this.lang = lang;
      this.$i18n.locale = lang;
    },
    toggleExpand() {
      if (this.split === "0px" || this.split === 0) {
        this.split = this.defalutSplitWidth;
      } else {
        this.split = 0;
      }
    },
    tableSelectionChange(selection) {
      console.info("selection", selection);
    },
    tableSelect(selection, row) {
      console.info("selection =>", selection);
      console.info("row =>", row);
    },
    handleDdClick() {
      console.info("handlTestClick");
    }
  }
};
</script>
