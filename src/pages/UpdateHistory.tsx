import { Link } from 'wouter';
import { updateHistory } from '../config/updateHistory';

export const UpdateHistory = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">更新记录</h1>
        <Link 
          href="/" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          返回首页
        </Link>
      </div>

      <div className="space-y-8">
        {updateHistory.map((record) => (
          <div key={record.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">版本 {record.version}</h2>
              <span className="text-gray-500">{record.date}</span>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {record.content.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 