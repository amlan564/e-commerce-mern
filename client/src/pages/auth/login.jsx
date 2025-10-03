import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
      } else {
        toast.error(data?.payload?.message);
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-lg space-y-8 px-14 py-10 max-sm:px-8 max-sm:mx-6 text-center bg-primary-foreground shadow-sm rounded-lg">
      <h1 className="text-3xl max-sm:text-2xl font-bold tracking-tight text-foreground">
        Sign in to your account
      </h1>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p>
        Don't have an account?
        <Link
          to="/auth/register"
          className="font-medium ml-2 text-primary hover:underline"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default AuthLogin;
