import { Spin } from 'antd';

function Loading() {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-gray-100">
      <Spin spinning />
    </div>
  );
}

export default Loading;
