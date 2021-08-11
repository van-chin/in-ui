<template>
  <el-form v-bind="options.attributes" :model="tmpModel">
    <template v-if="options.attributes.inline">
      <el-form-item
        v-for="(item, idx) in options.items"
        :key="idx"
        v-bind="item.attributes"
        :label="$t(item.attributes.label)"
        v-show="!item.component.attributes.hidden"
      >
        <slot :name="item.component.slot" v-if="item.component.slot"></slot>
        <component
          :is="item.component.name"
          v-model="options.attributes.model[item.component.attributes.model]"
          v-bind="item.component.attributes"
          v-events="item.component.events"
          :placeholder="$t(item.component.attributes.placeholder)"
          v-else
        ></component>
      </el-form-item>
    </template>
    <template v-else>
      <template v-for="(item, idx) in options.items">
        <el-row
          :key="idx"
          v-if="Object.prototype.toString.call(item) == '[object Object]'"
        >
          <el-col>
            <el-form-item
              v-bind="item.attributes"
              v-show="!item.component.attributes.hidden"
              :label="$t(item.attributes.label)"
            >
              <slot :name="item.component.slot" v-if="item.component.slot" />

              <component
                :is="item.component.name"
                v-model="
                  options.attributes.model[item.component.attributes.model]
                "
                v-bind="item.component.attributes"
                :startPlaceholder="
                  $t(item.component.attributes.startPlaceholder)
                "
                :endPlaceholder="$t(item.component.attributes.endPlaceholder)"
                v-events="item.component.events"
                :placeholder="$t(item.component.attributes.placeholder)"
                v-else
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-else :gutter="20" :key="idx">
          <el-col v-for="(item, indexs) in item" :span="12" :key="indexs">
            <el-form-item
              v-bind="item.attributes"
              :label="$t(item.attributes.label)"
              v-show="!item.component.attributes.hidden"
            >
              <slot :name="item.component.slot" v-if="item.component.slot" />
              <component
                :is="item.component.name"
                v-model="
                  options.attributes.model[item.component.attributes.model]
                "
                v-bind="item.component.attributes"
                v-events="item.component.events"
                :placeholder="$t(item.component.attributes.placeholder)"
                v-else
              />
            </el-form-item>
          </el-col>
        </el-row>
      </template>
    </template>
  </el-form>
</template>

<script>
// import events from "../directives/events";
import events from "../directives/events.js";
import InSelect from "../select";
import CheckboxGroup from "../checkbox-group";
import Button from "../button";
import Upload from "../upload";

// import Locale from "../mixins/locale";

export default {
  name: "InForm",
  // mixins: [Locale],
  components: {
    "in-button": Button,
    "in-select": InSelect,
    "in-checkbox-group": CheckboxGroup,
    "in-upload": Upload
  },
  directives: {
    events: events
  },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      tmpModel: {}
    };
  },
  created() {
    console.info("options", this.options);
  },
  mounted() {
    this.tmpModel = this.options.attributes.model;
    console.log("mounted: ");
  },
  methods: {}
};
</script>
