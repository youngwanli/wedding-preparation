export interface UpdateRecord {
  id: string;
  date: string;
  version: string;
  content: string[];
}

export const updateHistory: UpdateRecord[] = [
  {
    id: '1',
    date: '2024-03-01',
    version: '1.0.0',
    content: [
      '初始版本发布',
      '实现婚礼准备清单基本功能',
      '支持任务完成状态标记'
    ]
  },
  {
    id: '2',
    date: '2024-03-10',
    version: '1.1.0',
    content: [
      '添加任务排序功能',
      '优化界面样式',
      '修复已知问题'
    ]
  },
  {
    id: '3',
    date: '2024-03-15',
    version: '1.2.0',
    content: [
      '添加本地存储功能',
      '优化移动端显示',
      '提高应用性能'
    ]
  },
  {
    id: '4',
    date: '2024-03-20',
    version: '1.3.0',
    content: [
      '添加更新记录页面',
      '实现路由功能',
      '优化代码结构'
    ]
  }
]; 