<template>
  <div class="hello">
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
                text: "aabc"
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
              name: "in-checkbox-group",
              attributes: {
                model: "category_ids",
                min: 1,
                max: 10,
                options: [
                  {
                    value: 1,
                    label: "眼部"
                  },
                  {
                    value: 2,
                    label: "鼻部"
                  },
                  {
                    value: 3,
                    label: "皮肤管理"
                  },
                  {
                    value: 4,
                    label: "玻尿酸"
                  },
                  {
                    value: 5,
                    label: "肉毒素"
                  },
                  {
                    value: 6,
                    label: "脂肪"
                  },
                  {
                    value: 7,
                    label: "抗衰除皱"
                  },
                  {
                    value: 8,
                    label: "面部轮廓"
                  },
                  {
                    value: 9,
                    label: "胸部"
                  },
                  {
                    value: 10,
                    label: "牙齿"
                  },
                  {
                    value: 11,
                    label: "毛发"
                  },
                  {
                    value: 12,
                    label: "其他"
                  }
                ]
              },
              events: {}
            },
            attributes: {
              label: "类别",
              prop: "category_ids"
            }
          },
          {
            component: {
              name: "el-input",
              attributes: {
                model: "title",
                clearable: true,
                placeholder: "请输入案例标题"
              },
              events: {}
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
                clearable: true,
                placeholder: "请输入简介",
                type: "textarea",
                rows: "4",
                model: "intro"
              },
              events: {}
            },
            attributes: {
              label: "简介"
              // prop: "intro"
            }
          },

          {
            component: {
              name: "el-input",
              attributes: {
                model: "video",
                clearable: true,
                placeholder: "请输入腾讯视频码"
              },
              events: {}
            },
            attributes: {
              label: "视频",
              prop: "video"
            }
          },

          {
            component: {
              // name: "in-upload",
              slot: "cover-uploader",
              attributes: {
                model: "cover",
                "file-list": []
                // action: `${process.env.VUE_APP_API_BASE_URL}files`
              },
              events: {}
            },
            attributes: {
              label: "封面",
              prop: "cover"
            }
          },

          {
            component: {
              name: "el-input",
              attributes: {
                clearable: true,
                placeholder: "请输入内容",
                type: "textarea",
                rows: "4",
                model: "content"
              },
              events: {}
            },
            attributes: {
              label: "内容",
              prop: "content"
            }
          },

          [
            {
              component: {
                name: "el-input-number",
                attributes: {
                  clearable: true,
                  placeholder: "排序值越小越靠前",
                  model: "sort"
                },
                events: {}
              },
              attributes: {
                label: "排序",
                prop: "sort"
              }
            },
            {
              component: {
                name: "el-switch",
                attributes: {
                  model: "status"
                },
                events: {}
              },
              attributes: {
                label: "状态",
                prop: "status"
              }
            }
          ],

          {
            component: {
              name: "in-checkbox-group",
              attributes: {
                model: "tag_ids",
                options: [
                  {
                    value: 1,
                    label: "推荐"
                  }
                ]
              },
              events: {}
            },
            attributes: {
              label: "标签",
              prop: "tag_ids"
            }
          },
          {
            component: {
              name: "el-input",
              attributes: {
                clearable: true,
                placeholder: "请输入备注",
                type: "textarea",
                rows: "4",
                model: "remark"
              },
              events: {}
            },
            attributes: {
              label: "备注",
              prop: "remark"
            }
          },
          {
            component: {
              name: "el-input",
              attributes: {
                clearable: true,
                placeholder: "请输入案例医生",

                model: "doctor"
              },
              events: {}
            },
            attributes: {
              label: "案例医生",
              prop: "doctor"
            }
          },
          {
            component: {
              name: "el-input",
              attributes: {
                clearable: true,
                placeholder: "请输入案例医院",

                model: "hospital"
              },
              events: {}
            },
            attributes: {
              label: "案例医院",
              prop: "hospital"
            }
          },
          {
            component: {
              name: "el-input",
              attributes: {
                clearable: true,
                placeholder: "请输入案例项目",

                model: "item"
              },
              events: {}
            },
            attributes: {
              label: "案例项目",
              prop: "item"
            }
          }
        ]
      }
    };
  },
  methods: {
    handleDdClick() {
      console.info("handlTestClick");
    }
  }
};
</script>
