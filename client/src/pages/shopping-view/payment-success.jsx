import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">Payment is Successfull</CardTitle>
      </CardHeader>
      <Button onClick={() => navigate("/shop/account")}>View Orders</Button>
    </Card>
  );
};

export default PaymentSuccess;
