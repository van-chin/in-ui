export default {
  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  methods: {
    handleFilterChange(filters) {
      this.$emit("table-filter-change", filters);
    },
    /**
     * @description 每页条数改变
     */
    handleSelect(selection, row) {
      console.info("handleSelect", selection, row);
      this.$emit("table-select", selection, row);
    },
    handleTreeTableLoad(row, treeNode, resolve) {
      this.$emit("tree-table-load", row, treeNode, resolve);
      // await this.$store
      //   .dispatch(this.tables.action, {
      //     pid: row.id,
      //     has_children: 1,
      //     is_commit: false,
      //     per_page: 50
      //   })
      //   .then(rsp => {
      //     resolve(rsp);
      //   });
    }
  }
};
