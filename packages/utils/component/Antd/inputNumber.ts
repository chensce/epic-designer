import { ComponentConfigModel } from "../../pluginManager";
export default {
  component: () => import("ant-design-vue/lib/input-number"),
  defaultSchema: {
    label: "数字输入框",
    type: "number",
    icon: "icon-number",
    field: "number",
    isInput: true,
    componentProps: {
      style: { width: "100%" },
    },
  },
  config: {
    attribute: [
      {
        label: "字段名",
        type: "input",
        field: "field",
      },
      {
        label: "文字",
        type: "input",
        field: "label",
      },
    ],
    event: [
      {
        type: "input",
        describe: "输入值",
      },
      {
        type: "change",
        describe: "值修改",
      },
      {
        type: "pressEnter",
        describe: "按下回车的回调",
      },
      {
        type: "focus",
        describe: "获取焦点",
      },
      {
        type: "blur",
        describe: "失去焦点",
      },
    ],
    action: [
      {
        type: "focus",
        describe: "使 input 获取焦点",
      },
      {
        type: "blur",
        describe: "使 input 失去焦点",
      },
      {
        type: "select",
        describe: "选中 input 中的文字",
      },
    ],
  },
  bindModel: "value",
} as ComponentConfigModel;
