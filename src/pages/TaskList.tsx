import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { TaskTable } from '../components/TaskTable';
import { Task } from '../types/Task';
import { weddingTasks } from '../config/weddingTasks';

type SortField = 'date' | 'completed';
type SortOrder = 'asc' | 'desc';

export const TaskList = () => {
  // 从配置加载初始任务，但使用 localStorage 保存完成状态
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('weddingTasksStatus');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      // 合并配置的任务和保存的状态
      return weddingTasks.map(configTask => {
        const savedTask = parsedTasks.find((t: Task) => t.id === configTask.id);
        return savedTask ? { ...configTask, completed: savedTask.completed } : configTask;
      });
    }
    return weddingTasks;
  });
  
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    // 只保存任务的 ID 和完成状态
    const tasksToSave = tasks.map(task => ({
      id: task.id,
      completed: task.completed
    }));
    localStorage.setItem('weddingTasksStatus', JSON.stringify(tasksToSave));
  }, [tasks]);

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
    } else if (sortField === 'completed') {
      return sortOrder === 'asc' 
        ? (a.completed === b.completed ? 0 : a.completed ? 1 : -1)
        : (a.completed === b.completed ? 0 : a.completed ? -1 : 1);
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">婚礼准备清单</h1>
        <Link 
          href="/history" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          查看更新记录
        </Link>
      </div>
      
      <div className="mb-4 flex space-x-4">
        <button 
          onClick={() => handleSort('date')}
          className={`px-3 py-1 rounded ${sortField === 'date' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          按日期排序 {sortField === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button 
          onClick={() => handleSort('completed')}
          className={`px-3 py-1 rounded ${sortField === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          按完成状态排序 {sortField === 'completed' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
      </div>
      
      <TaskTable 
        tasks={sortedTasks} 
        onTaskUpdate={handleTaskUpdate} 
      />
    </div>
  );
}; 