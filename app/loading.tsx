import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex justify-center text-3xl">
      <AiOutlineLoading3Quarters size={36} className="mr-5 animate-spin" />
      Loading...
    </div>
  );
};

export default Loading;
