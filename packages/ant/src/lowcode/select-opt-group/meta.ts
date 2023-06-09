/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASelectOptGroup',
  title: '选择器-分组',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASelectOptGroup'
  },
  props: [
    {
      title: 'key',
      name: 'key',
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      title: { label: 'title', tip: '组名' },
      name: 'title',
      propType: {
        type: 'oneOfType',
        value: ['string', 'node', 'func']
      }
    }
  ]
}
