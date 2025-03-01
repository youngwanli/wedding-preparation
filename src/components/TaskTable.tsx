import { Task } from '../types/Task';

interface TaskTableProps {
  tasks: Task[];
  onTaskUpdate: (updatedTask: Task) => void;
}

export const TaskTable = ({ tasks, onTaskUpdate }: TaskTableProps) => {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden sm:rounded-lg">
          {/* 桌面端表格视图 */}
          <table className="hidden sm:table min-w-full divide-y divide-pink-200">
            <thead className="bg-pink-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-pink-600 uppercase tracking-wider">
                  公历日期
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-pink-600 uppercase tracking-wider">
                  农历日期
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-pink-600 uppercase tracking-wider">
                  事项
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-pink-600 uppercase tracking-wider">
                  是否已做
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-pink-600 uppercase tracking-wider">
                  备注
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-pink-100">
              {tasks.map((task) => (
                <tr 
                  key={task.id} 
                  className={`${task.completed ? "bg-pink-50" : ""} hover:bg-pink-50 transition-colors`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {task.lunarDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {task.task}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <input
                      type="checkbox"
                      name="completed"
                      checked={task.completed}
                      onChange={() => !task.completed && onTaskUpdate({ ...task, completed: true })}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                      disabled={task.completed}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {task.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* 移动端卡片视图 */}
          <div className="sm:hidden space-y-5 px-4">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`rounded-xl border ${task.completed ? "bg-pink-50 border-pink-200" : "bg-white border-pink-100"} p-5 shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-pink-600">公历日期</span>
                  <span className="text-sm text-gray-900 font-medium">{task.date}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-pink-600">农历日期</span>
                  <span className="text-sm text-gray-900 font-medium">{task.lunarDate}</span>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-pink-600 mb-1 block">事项</span>
                  <p className="text-base text-gray-900 mt-1 font-medium">{task.task}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-pink-600">是否已做</span>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => !task.completed && onTaskUpdate({ ...task, completed: true })}
                    className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    disabled={task.completed}
                  />
                </div>
                {task.notes && (
                  <div className="pt-2 border-t border-pink-100">
                    <span className="text-sm font-medium text-pink-600 block mb-1">备注</span>
                    <p className="text-sm text-gray-700 mt-1">{task.notes}</p>
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