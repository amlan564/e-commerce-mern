import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl max-sm:text-2xl font-bold text-green-600 mb-6 text-center">
        Order Placed Successfully
      </h1>
      <Button onClick={() => navigate("/shop/account")} className="p-6">
        View Orders
      </Button>
    </div>
  );
};

export default OrderPlaced;
