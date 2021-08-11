const state = {
  test: {
    abc: "operate.operate"
  },
  tables: {
    border: false,
    // fit: true,
    // columnSetings: true,
    columns: [
      {
        type: "selection",
        label: "选择框",
        fixed: "left",
        show: true
      },
      {
        type: "index",
        label: "序号",
        fixed: "left",
        show: true
      },
      {
        label: "operate.name",
        prop: "name",
        show: true
      },
      {
        label: "标识",
        prop: "code",
        show: true
      },
      {
        label: "创建时间",
        key: "created_at",
        width: 150,
        show: true
      },
      {
        label: "更新时间",
        key: "updated_at",
        width: 150,
        show: true
      },
      {
        label: "operate.operate",
        key: "actions",
        show: true,
        // renderHeader: function () {
        //   return '操作';
        // },
        // header:"ddd",
        slot_name: "actions",
        fixed: "right"
      }
    ],
    data: [
      {
        id: 1,
        name: "测试数据1",
        created_at: "ddd"
      },
      {
        id: 2,
        name: "测试数据",
        created_at: "d22dd"
      }
    ]
  },
  inFormOptions: {
    attributes: {
      inline: true,
      labelPosition: "right",
      labelWidth: "80px",
      customClass: "admin-cu-form",
      ref: "cuForm",
      model: {
        deviceProp: {
          lightConnProp: undefined,
          lightSplit: {
            inNum: 1,
            outNum: ""
          },
          shelfSlotProp: undefined
        },
        cover: "",
        filess: [],
        category_ids: [],
        tag_ids: [],
        intro: "",
        video: "",
        content: "",
        title: "",
        status: true,
        remark: ""
      },
      rules: {
        category_ids: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个类别",
            trigger: "change"
          }
        ],
        title: [
          { required: true, message: "请输入案例标题", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur"
          }
        ],
        id_no: [
          { required: true, message: "请输入身份证", trigger: "blur" },
          {
            min: 1,
            max: 18,
            message: "长度在 1 到 18 个字符",
            trigger: "blur"
          }
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "请输入格式正确的邮箱",
            trigger: "blur"
          }
        ],
        password: [
          {
            type: "string",
            min: 4,
            max: 20,
            message: "长度在 4 到 20 个字符",
            trigger: "blur"
          }
        ],
        gender: [{ type: "number", message: "请选择性别", trigger: "change" }],
        node_ids: [{ type: "array", message: "请选择节点", trigger: "change" }],
        status: [{ required: true, message: "请选状态", trigger: "change" }]
      }
    },
    items: [
      {
        component: {
          name: "el-date-picker",
          attributes: {
            clearable: true,
            type: "datetimerange",
            valueFormat: "yyyy-MM-dd HH:mm:ss",
            format: "yyyy-MM-dd HH:mm:ss",
            startPlaceholder: "main.title",
            endPlaceholder: "historicalalarmHPage.endTime",
            style: {
              width: "335px"
            },
            pickerOptions: {
              shortcuts: [
                {
                  text: "最近一周",
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit("pick", [start, end]);
                  }
                },
                {
                  text: "最近一个月",
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit("pick", [start, end]);
                  }
                },
                {
                  text: "最近三个月",
                  onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit("pick", [start, end]);
                  }
                }
              ]
            },
            rangeSeparator: "-",
            size: "small",
            align: "right",
            model: "startTimes"
          },

          events: {
            _emit_component_name: "AlarmRecord",
            change: "startTimes"
          }
        },
        attributes: {
          label: "historicalalarmHPage.startTime"
          // prop: "intro"
        }
      },
      {
        component: {
          name: "el-input",
          attributes: {
            model: "deviceProp.lightSplit.outNum",
            size: "small",
            clearable: true,
            placeholder: "输出端口数"
          },
          events: {
            _emit_component_name: "HelloWorld",
            click: "dd"
          }
        },
        attributes: {
          label: "el.table.sumText",
          prop: "title"
        }
      },
      {
        component: {
          name: "in-button",
          attributes: {
            text: "aabc",
            hidden: false
          },
          events: {
            _emit_component_name: "HelloWorld",
            click: "dd"
          }
        },
        attributes: {
          label: "el.select.noData",
          prop: "title"
        }
      }
    ]
  }
};
// 外部可以通过提交mutation来修改state中的值
// this.$store.commit("SET_LANGUAGE")
const mutations = {
  SET_LANGUAGE: (state, language) => {
    // 修改state并将其保存在Cookies中，这样用户下次打开仍然是上次选择的国际化状态
    state.language = language;
    // Cookies.set('language', language)
  }
};

const getters = {
  test: state => state.test,
  inFormOptions: state => state.inFormOptions,
  tables: state => state.tables
};

const actions = {
  setLanguage({ commit }, language) {
    // debugger
    commit("SET_LANGUAGE", language);
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
