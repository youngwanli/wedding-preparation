import { Task } from '../types/Task';

interface TaskTableProps {
  tasks: Task[];
  onTaskUpdate: (updatedTask: Task) => void;
}

export const TaskTable = ({ tasks, onTaskUpdate }: TaskTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              时间
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              事项
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              是否已做
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              备注
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
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
    </div>
  );
}; 