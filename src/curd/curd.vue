<template>
  <div :class="wrapClasses">
    <el-row :gutter="16" style="margin-bottom: 10px;">
      <el-col :span="12">
        <slot name="header-left-filter"></slot>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <slot name="header-right-actions"></slot>
      </el-col>
    </el-row>

    <in-table v-bind="tables">
      <!-- 插槽代理 作用域插槽代理数据 -->
      <template
        v-slot:[column.slot_name]="{ scope }"
        v-for="column in slotColumns"
      >
        <slot :name="column.slot_name" :scope="scope"></slot>
      </template>
    </in-table>

    <div :class="footerClasses">
      <div :class="leftActionsClasses">
        <slot name="footer-left-actions"></slot>
      </div>
      <div :class="rightPaginationClasses">
        <el-pagination
          :class="inPaginationClasses"
          v-if="paginations && paginations.total"
          v-bind="paginations"
          @size-change="handlePaginationSizeChange"
          @current-change="handlePaginationCurrentChange"
          @prev-click="handlePaginationPrevClick"
          @next-click="handlePaginationNextClick"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationMixmin from "./mixins/pagination";
import TableMixmin from "./mixins/table";
import InTable from "../table";
const prefixCls = "in-curd";
export default {
  name: "InCurd",
  components: { InTable },
  mixins: [PaginationMixmin, TableMixmin],
  props: {
    tables: Object,
    default: () => {
      return {
        columns: []
      };
    }
  },
  data() {
    return {
      slotColumns: [],
      headerCellStyle: {
        backgroundColor: "#DCDFE6",
        color: "#606266"
      }
    };
  },
  computed: {
    wrapClasses() {
      return [`${prefixCls}`];
    },
    footerClasses() {
      return `${prefixCls}-footer`;
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
  created() {
    // console.info();
    // this.cols = this.tables.columns;
    this.getSlotColumns();
  },
  methods: {
    getSlotColumns() {
      let slotColumns = [];
      slotColumns = this.tables.columns.filter(column => {
        return Object.prototype.hasOwnProperty.call(column, "slot_name");
      });
      this.slotColumns = slotColumns;
    }
  }
};
</script>
