<template>
  <div class="hello">
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
        <in-curd :tables="tables" :paginations="paginations" style="width:99%;">
          <template v-slot:header-left-filter>
            header-left-filter sss vv sdfsfsdf
          </template>
          <template #header-right-actions>
            header-right-actions dd
          </template>
          <template slot="footer-left-actions">footer-left-actions</template>
          <template #actions="{ scope }">
            <template slot="header">
              1232
            </template>
            <in-button text="编辑" type="text" />
            {{ scope.row.name }}
          </template>
        </in-curd>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
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
      tables: {
        border: false,
        // fit: true,
        columns: [
          {
            label: "123",
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
            label: "操作",
            key: "actions",
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
            name: "测试数据",
            created_at: "ddd"
          }
        ]
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
          label: "操作",
          slot_name: "action",
          fixed: "right"
        }
      ],
      inFormOptions: {
        attributes: {
          inline: false,
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
            gender: [
              { type: "number", message: "请选择性别", trigger: "change" }
            ],
            node_ids: [
              { type: "array", message: "请选择节点", trigger: "change" }
            ],
            status: [{ required: true, message: "请选状态", trigger: "change" }]
          }
        },
        items: [
          {
            component: {
              name: "in-button",
              attributes: {
                text: "aabc",
                hidden: true
              },
              events: {
                _emit_component_name: "HelloWorld",
                click: "dd"
              }
            },
            attributes: {
              label: "标题",
              prop: "title"
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
              label: "标题",
              prop: "title"
            }
          }
        ]
      }
    };
  },
  methods: {
    toggleExpand() {
      if (this.split === "0px" || this.split === 0) {
        this.split = this.defalutSplitWidth;
      } else {
        this.split = 0;
      }
    },
    handleDdClick() {
      console.info("handlTestClick");
    }
  }
};
</script>
