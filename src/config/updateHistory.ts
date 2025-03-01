export interface UpdateRecord {
  id: string;
  date: string;
  version: string;
  content: string[];
}

export const updateHistory: UpdateRecord[] = [
  {
    id: '1',
    date: '2025-03-01',
    version: '0.0.1',
    content: [
      '初始版本发布',
      '实现婚礼准备清单基本表格展示',
      '支持任务完成状态标记'
    ]
  }
]; 