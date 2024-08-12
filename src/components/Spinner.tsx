import { RefreshCwIcon } from "lucide-react";
const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <RefreshCwIcon className="h-8 w-8 animate-spin text-green-600" style={{ animationDuration: '1.5s' }} />
    </div>
  );
};

export default Spinner;
