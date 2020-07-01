export default {
  name: "PaginationMixin",
  props: {
    paginations: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    handlePaginationSizeChange(pageSize) {
      this.paginations.pageSize = pageSize;
      this.$emit("pagination-size-change", pageSize);
    },
    handlePaginationCurrentChange(currentPage) {
      this.$emit("pagination-current-change", currentPage);
    },
    handlePaginationPrevClick(currentPage) {
      this.$emit("pagination-prev-click", currentPage);
    },

    handlePaginationNextClick(currentPage) {
      this.$emit("pagination-next-click", currentPage);
    }
  }
};
