<template>
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    :header-cell-style="headerCellStyle"
    style="width:100%"
  >
    <template v-for="(column, index) in draggableColumns">
      <el-table-column
        v-if="column.show && hasSlot(column)"
        :key="index"
        v-bind="column"
        :label="$t(column.label)"
      >
        <template slot-scope="scope">
          <slot :name="column.slot_name" :scope="scope"></slot>
        </template>

        <template #header v-if="column.key === 'actions'">
          <div class="actions-header" v-show="columnSetings === true">
            <div class="label">{{ $t(column.label) }}</div>
            <div class="column-setting">
              <el-dropdown :hide-on-click="false">
                <el-tooltip content="列设置" placement="top">
                  <span class="el-dropdown-link">
                    <i class="el-icon-s-tools"></i>
                  </span>
                </el-tooltip>
                <el-dropdown-menu slot="dropdown">
                  <draggable
                    v-model="draggableColumns"
                    group="people"
                    :move="onMove"
                    @start="drag = true"
                    @end="drag = false"
                  >
                    <el-dropdown-item
                      v-for="element in draggableColumns"
                      :key="element.prop"
                    >
                      <el-checkbox
                        v-model="element.show"
                        :disabled="
                          element.fixed === 'left' || element.fixed === 'right'
                        "
                        >{{ $t(element.label) }}</el-checkbox
                      >
                    </el-dropdown-item>
                  </draggable>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>

          <div class="no-column-setings" v-show="columnSetings !== true">
            {{ $t(column.label) }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-else-if="column.show"
        v-bind="column"
        :label="$t(column.label)"
        :key="index"
      />
    </template>
  </el-table>
</template>

<script>
import Locale from "../mixins/locale";
import table from "./mixins/table";

import draggable from "vuedraggable";

export default {
  name: "InTable",
  components: {
    draggable
  },
  mixins: [table, Locale],
  data() {
    return {
      draggableColumns: [],
      drag: false,
      myArray: [
        {
          id: 1,
          name: "黄金糕"
        },
        {
          id: 2,
          name: "螺蛳粉"
        },
        {
          id: 3,
          name: "蚵仔煎"
        }
      ]
    };
  },
  created() {
    console.info("created.this.columns =>", this.columns);
    this.draggableColumns = JSON.parse(JSON.stringify(this.columns));
    console.info("created.this.draggableColumns =>", this.draggableColumns);
  },
  mounted() {
    console.info("this.columns =>", this.columns);
    this.draggableColumns = JSON.parse(JSON.stringify(this.columns));
    console.info("this.draggableColumns =>", this.draggableColumns);
  },
  methods: {
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    hasSlot(column) {
      return Object.prototype.hasOwnProperty.call(column, "slot_name");
    }
  }
};
</script>

<style lang="scss" scoped>
.no-column-setings {
  text-align: center;
}
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
