import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        window.localStorage.setItem("token", response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    console.log(data.email);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        window.localStorage.setItem("token", user.uid);
        navigate("/home");
        console.log("Registered with:", user.email);        
      })
      .catch((error: any) => alert(error.message));
  };

  return (
    <div className="container">
      <div className="container__sidebar">
        <div className="sidebar__text">
          <span> Dev Dashboard.</span>
          <h2>Managing and accessing essential development resources</h2>
        </div>
      </div>
      <div className="container__auth">
        <h2 className="container__auth-title">Register to Dev-Dashboard</h2>
        <button
          className="auth__google"
          onClick={() => signInWithGoogle()}
          disabled={authing}
        >
          <img
            src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"
            alt=""
          />
          Sign in with Google
        </button>
        <p className="separator">
          <span>or</span>
        </p>
        <div className="authForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field-group">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  {...register("fullname")}
                  className={`form-control ${
                    errors.fullname ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.fullname?.message}
                </div>
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  {...register("username")}
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.username?.message}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                {...register("email")}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword")}
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                {...register("acceptTerms")}
                className={`form-check-input ${
                  errors.acceptTerms ? "is-invalid" : ""
                }`}
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                I have read and agree to the Terms
              </label>
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <p>
                Already a member? <a href="/login">Sign In</a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
