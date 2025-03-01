import { useState } from 'react';
import { Link } from 'wouter';
import { TaskTable } from '../components/TaskTable';
import { Task } from '../types/Task';
import { weddingTasks } from '../config/weddingTasks';

type SortField = 'date' | 'lunarDate' | 'completed';
type SortOrder = 'asc' | 'desc';

export const TaskList = () => {
  // 从配置加载初始任务
  const [tasks, setTasks] = useState<Task[]>(weddingTasks);
  
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };
  
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      // 如果已经按照这个字段排序，则切换排序顺序
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // 如果是新的排序字段，则设置为升序
      setSortField(field);
      setSortOrder('asc');
    }
  };
  
  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortField === 'date') {
      return sortOrder === 'asc' 
        ? a.date.localeCompare(b.date) 
        : b.date.localeCompare(a.date);
    } else if (sortField === 'lunarDate') {
      return sortOrder === 'asc' 
        ? a.lunarDate.localeCompare(b.lunarDate) 
        : b.lunarDate.localeCompare(a.lunarDate);
    } else if (sortField === 'completed') {
      return sortOrder === 'asc' 
        ? (a.completed === b.completed ? 0 : a.completed ? 1 : -1)
        : (a.completed === b.completed ? 0 : a.completed ? -1 : 1);
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-5 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center sm:text-left text-pink-600 drop-shadow-md">
          关键事项
        </h1>
        <Link 
          href="/history" 
          className="px-5 py-2.5 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors duration-300 text-center sm:text-left shadow-md hover:shadow-lg flex items-center justify-center"
        >
          查看更新记录
        </Link>
      </div>
      
      <div className="mb-5 flex flex-wrap gap-2 justify-center sm:justify-start">
        <button 
          onClick={() => handleSort('date')}
          className={`px-4 py-1.5 rounded-xl text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300 ${sortField === 'date' ? 'bg-pink-500 text-white' : 'bg-white hover:bg-pink-50'}`}
        >
          按公历日期排序 {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          onClick={() => handleSort('lunarDate')}
          className={`px-4 py-1.5 rounded-xl text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300 ${sortField === 'lunarDate' ? 'bg-pink-500 text-white' : 'bg-white hover:bg-pink-50'}`}
        >
          按农历日期排序 {sortField === 'lunarDate' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          onClick={() => handleSort('completed')}
          className={`px-4 py-1.5 rounded-xl text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300 ${sortField === 'completed' ? 'bg-pink-500 text-white' : 'bg-white hover:bg-pink-50'}`}
        >
          按完成状态排序 {sortField === 'completed' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
      </div>
      
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4 sm:p-6 border border-pink-50">
        <TaskTable 
          tasks={sortedTasks} 
          onTaskUpdate={handleTaskUpdate} 
        />
      </div>
    </div>
  );
}; 