<template>
  <EBuilder ref="ebRef" :pageSchema="pageSchema" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EBuilder, PageSchema } from "@epic-designer/core";

const ebRef = ref<InstanceType<typeof EBuilder>>();
const pageSchema = ref<PageSchema>({
  schemas: [
    {
      type: "page",
      id: "root",
      label: "页面",
      children: [
        {
          label: "表单",
          type: "form",
          icon: "epic-icon-daibanshixiang",
          componentProps: {
            layout: "horizontal",
            name: "default",
            labelWidth: 100,
            labelLayout: "fixed",
            labelCol: {
              span: 5,
            },
            wrapperCol: {
              span: 19,
            },
            hideRequiredMark: false,
            colon: true,
            labelAlign: "right",
            size: "middle",
            style: {
              width: "600px",
            },
          },
          children: [
            {
              label: "栅格布局",
              type: "row",
              icon: "epic-icon-zhage",
              children: [
                {
                  type: "col",
                  children: [
                    {
                      label: "姓名",
                      type: "input",
                      field: "input_2drzm924",
                      icon: "epic-icon-write",
                      input: true,
                      componentProps: {
                        bordered: true,
                        placeholder: "请输入",
                      },
                      id: "input_2drzm924",
                    },
                  ],
                  componentProps: {
                    span: 12,
                  },
                  id: "col_m17ttkgz",
                },
                {
                  type: "col",
                  children: [
                    {
                      label: "年龄",
                      type: "number",
                      icon: "epic-icon-number",
                      field: "number_x4t431jb",
                      input: true,
                      componentProps: {
                        style: {
                          width: "100%",
                        },
                        placeholder: "请输入",
                      },
                      id: "number_x4t431jb",
                    },
                  ],
                  componentProps: {
                    span: 12,
                  },
                  id: "col_6uvxdrme",
                },
              ],
              id: "row_fpuoo21a",
            },
            {
              label: "性别",
              type: "radio",
              icon: "epic-icon-danxuan-cuxiantiao",
              field: "radio_shndnr9b",
              input: true,
              componentProps: {
                options: [
                  {
                    label: "男",
                    value: "男",
                  },
                  {
                    label: "女",
                    value: "女",
                  },
                ],
                optionType: "default",
                defaultValue: "男",
              },
              id: "radio_shndnr9b",
            },
            {
              label: "兴趣",
              type: "checkbox",
              icon: "epic-icon-duoxuan1",
              field: "checkbox_1l91io8k",
              input: true,
              componentProps: {
                options: [
                  {
                    label: "唱",
                    value: "唱",
                  },
                  {
                    label: "跳",
                    value: "跳",
                  },
                  {
                    label: "rap",
                    value: "rap",
                  },
                  {
                    label: "篮球",
                    value: "篮球",
                  },
                ],
              },
              id: "checkbox_1l91io8k",
            },
            {
              label: "个人简介",
              type: "textarea",
              field: "textarea_1ihmowjl",
              icon: "epic-icon-edit",
              input: true,
              componentProps: {
                placeholder: "请输入",
                autoSize: {
                  minRows: 4,
                },
              },
              id: "textarea_1ihmowjl",
            },
          ],
          id: "form_eifo73no",
        },
      ],
      componentProps: {
        style: {
          padding: "16px",
        },
      },
    },
  ],
  script:
    "const { defineExpose, find } = epic;\n\nfunction test (){\n    console.log('test')\n}\n\n// 通过defineExpose暴露的函数或者属性\ndefineExpose({\n test \n})",
});
</script>
