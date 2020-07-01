export default {
  name: "TableMixin",
  props: {
    tables: {
      type: Object,
      default: () => {
        return {};
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
      // console.info("handleSelect", selection, row);
      this.$emit("table-select", selection, row);
    },
    async handleTreeTableLoad(row, treeNode, resolve) {
      console.info(row, treeNode, resolve);
      // await this.$store
      //   .dispatch(this.tables.action, {
      //     pid: row.id,
      //     // eslint-disable-next-line @typescript-eslint/camelcase
      //     has_children: 1,
      //     // eslint-disable-next-line @typescript-eslint/camelcase
      //     is_commit: false,
      //     // eslint-disable-next-line @typescript-eslint/camelcase
      //     per_page: 50
      //   })
      //   .then((rsp: any) => {
      //     resolve(rsp);
      //   });
      // this.$emit("tree-table-load");
    }
  }
};
