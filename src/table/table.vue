<template>
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    :header-cell-style="headerCellStyle"
    style="width:100%"
  >
    <template v-for="(column, index) in columns">
      <el-table-column v-if="hasSlot(column)" :key="index" v-bind="column">
        <template slot-scope="scope">
          <slot :name="column.slot_name" :scope="scope"></slot>
        </template>

        <template #header v-if="column.key === 'actions'">
          <div class="actions-header">
            <div class="label">{{ column.label }}</div>
            <div class="column-setting">
              <i class="el-icon-s-tools"></i>
            </div>
          </div>
        </template>

        <!--        123-->
      </el-table-column>
      <el-table-column v-else v-bind="column" :key="index" />
    </template>
  </el-table>
</template>

<script>
import table from "./mixins/table";
export default {
  name: "InTable",
  components: {},
  mixins: [table],
  data() {
    return {};
  },
  methods: {
    hasSlot(column) {
      return Object.prototype.hasOwnProperty.call(column, "slot_name");
    }
  }
};
</script>

<style lang="scss" scoped>
.actions-header {
  display: flex;
  justify-content: space-between;

  .column-setting {
    .el-icon-s-tools {
      cursor: pointer;
    }
  }
}
</style>
