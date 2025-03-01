import { Link } from 'wouter';
import { updateHistory } from '../config/updateHistory';

export const UpdateHistory = () => {
  return (
    <div className="container mx-auto px-5 py-6 sm:py-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-0 text-center sm:text-left text-pink-600 drop-shadow-md">
          更新记录
        </h1>
        <Link 
          href="/" 
          className="px-5 py-2.5 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors duration-300 text-center sm:text-left shadow-md hover:shadow-lg flex items-center justify-center"
        >
          返回首页
        </Link>
      </div>

      <div className="space-y-6">
        {updateHistory.map((record) => (
          <div key={record.id} className="border border-pink-100 rounded-xl p-5 sm:p-6 bg-white bg-opacity-90 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0 text-pink-500">版本 {record.version}</h2>
              <span className="text-sm sm:text-base text-gray-500 bg-pink-50 px-3 py-1 rounded-full">{record.date}</span>
            </div>
            <ul className="list-disc list-inside space-y-3 pl-0 sm:pl-2 text-gray-700">
              {record.content.map((item, index) => (
                <li key={index} className="text-sm sm:text-base hover:text-pink-700 transition-colors pl-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}; 