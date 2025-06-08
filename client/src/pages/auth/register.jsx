import CommonForm from "@/components/common/form";
import { Toaster } from "@/components/ui/sonner";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const AuthRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Create an account
      </h1>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-2">
        Already have an account?
        <Link
          to="/auth/login"
          className="font-medium ml-2 text-primary hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default AuthRegister;
