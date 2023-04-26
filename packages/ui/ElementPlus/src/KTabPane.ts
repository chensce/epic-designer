import { defineComponent, h, renderSlot, PropType } from "vue";
import { ElTabPane } from "element-plus";
import { NodeItem } from "../../../types/kDesigner";
export default defineComponent({
  props: {
    record: {
      type: Object as PropType<NodeItem>,
      require: true,
    },
    children: {
      type: Array,
    },
  },
  setup(props, { attrs, slots }) {
    return {
      attrs,
      slots,
      props,
    };
  },
  render() {
    const record = {
      ...this.props.record,
      name: this.props.record!.id,
    } as any;
    const children = record.children;
    delete record.children;
    return h(ElTabPane, record, {
      default: () =>
        renderSlot(this.slots, "edit-node", {}, () =>
          children!.map((record: any) =>
            renderSlot(this.slots, "node", { record })
          )
        ),
    });
  },
});
