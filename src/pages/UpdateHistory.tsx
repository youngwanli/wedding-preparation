import { Link } from 'wouter';
import { updateHistory } from '../config/updateHistory';

export const UpdateHistory = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0 text-center sm:text-left">更新记录</h1>
        <Link 
          href="/" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-center sm:text-left"
        >
          返回首页
        </Link>
      </div>

      <div className="space-y-6">
        {updateHistory.map((record) => (
          <div key={record.id} className="border border-gray-200 rounded-lg p-4 sm:p-6 bg-white shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">版本 {record.version}</h2>
              <span className="text-sm sm:text-base text-gray-500">{record.date}</span>
            </div>
            <ul className="list-disc list-inside space-y-2 pl-0 sm:pl-2">
              {record.content.map((item, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 