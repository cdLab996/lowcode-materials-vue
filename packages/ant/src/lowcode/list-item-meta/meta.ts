export default {
  group: 'Antd',
  componentName: 'AListItemMeta',
  title: '列表项内容',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'AListItemMeta'
  },
  props: [
    {
      name: 'avatar',
      title: {
        label: '列表元素图标',
        tip: '列表元素的图标'
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] }
    },
    {
      name: 'title',
      title: {
        label: '列表元素标题',
        tip: '列表元素的标题'
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] }
    },
    {
      name: 'avatar',
      title: {
        label: '列表元素描述内容',
        tip: '列表元素的描述内容'
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] }
    }
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: {
        parentWhitelist: ['AList', 'AListItem']
      }
    },
    supports: {
      style: true
    }
  }
}
