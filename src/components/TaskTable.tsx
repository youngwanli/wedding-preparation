import { Task } from '../types/Task';

interface TaskTableProps {
  tasks: Task[];
  onTaskUpdate: (updatedTask: Task) => void;
}

export const TaskTable = ({ tasks, onTaskUpdate }: TaskTableProps) => {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden shadow-sm sm:rounded-lg">
          {/* 桌面端表格视图 */}
          <table className="hidden sm:table min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  时间
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  事项
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  是否已做
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  备注
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map((task) => (
                <tr key={task.id} className={task.completed ? "bg-green-50" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.task}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input
                      type="checkbox"
                      name="completed"
                      checked={task.completed}
                      onChange={() => onTaskUpdate({ ...task, completed: !task.completed })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 移动端卡片视图 */}
          <div className="sm:hidden">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`bg-white border-b border-gray-200 p-4 ${task.completed ? "bg-green-50" : ""}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">时间</span>
                  <span className="text-sm text-gray-900">{task.date}</span>
                </div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-gray-500">事项</span>
                  <p className="text-sm text-gray-900 mt-1">{task.task}</p>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-500">是否已做</span>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onTaskUpdate({ ...task, completed: !task.completed })}
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                {task.notes && (
                  <div className="mb-2">
                    <span className="text-sm font-medium text-gray-500">备注</span>
                    <p className="text-sm text-gray-900 mt-1">{task.notes}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 