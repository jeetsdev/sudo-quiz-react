import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileCard, Sidebar } from "../../components";
import { useAuth } from "../../contexts/auth-context";
import { ACTION_TYPE } from "../../utils";
import toast from "react-hot-toast";
import { loader } from "../../assets";

export const SignUp = () => {

  const [signupFormData, setsignupFormData] = useState({
    userName: "",
    email: "",
    password: "",
    passType: "password",
  })

  const { signUp, authState: { error, loading }, validateEmailAndPass, authDispatch } = useAuth();
  const { SET_ERROR, SET_LOADING } = ACTION_TYPE;
  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    event.preventDefault();
    if (validateEmailAndPass(signupFormData.email, signupFormData.password)) {
      authDispatch({
        type: SET_ERROR,
        payload: {
          passwordError: "",
          emailError: "",
        },
      });
      try {
        authDispatch({
          type: SET_LOADING,
          payload: true,
        })
        await signUp(signupFormData.email, signupFormData.password);
        navigate("/");
        authDispatch({
          type: SET_LOADING,
          payload: false,
        })
        toast.success("Sign up successfully.");
      } catch (error) {
        switch (error.message.split("auth/")[1]) {
          case "email-already-in-use).":
            toast.error("Email is already registerd.")
            break
          default:
            toast.error("Some error occured, Try later.")
        }
      }
    }
  };

  // password visibilty handler here 
  const passVisibiltyHandler = () => {
    return signupFormData.passType === "password" ? setsignupFormData({ ...signupFormData, passType: "text" }) : setsignupFormData({ ...signupFormData, passType: "password" });
  }


  return (
    <div className="container__main">
      <Sidebar pageTitle={"Sign Up"}/>

      {/* Validation form here */}
      <div className="signup__handler center__flex flex__dir-col">
        <form onSubmit={(event) => signUpHandler(event)} className="container__main-login center__flex flex__dir-col loader__container">
          {loading && <div className="loader__img center__flex">
            <img src={loader} alt="loader here" />
          </div>}
          <h4 className="margin-1rem h3">Sign Up</h4>
          <div className="margin-1rem main__login-inputs center__flex">
            <FaUserCircle className="icons" />
            <input type="text" className="margin__lr-8px" placeholder="Enter Name" required value={signupFormData.name} onChange={(event) => setsignupFormData({ ...signupFormData, userName: `${event.target.value}` })} />
          </div>

          {/* Email section here */}
          <div className="margin-1rem main__login-inputs center__flex">
            <MdEmail className="icons" />
            <input type="email" className="margin__lr-8px" placeholder="Enter email" required value={signupFormData.email} onChange={(event) => setsignupFormData({ ...signupFormData, email: `${event.target.value}` })} />
            {error.emailError && <p className="validation-error txt-sml">{error.emailError}</p>}
          </div>

          {/* Password section here */}
          <div className="margin-1rem main__login-inputs center__flex">
            <RiLockPasswordFill className="icons" />
            <input type={signupFormData.passType} className="margin__lr-8px" placeholder="Enter password" required value={signupFormData.password} onChange={(event) => setsignupFormData({ ...signupFormData, password: `${event.target.value}` })} />
            {
              signupFormData.passType === "password" ?
                <AiFillEyeInvisible className="icons toggle-pass" onClick={passVisibiltyHandler} />
                :
                <AiFillEye className="toggle-pass" onClick={passVisibiltyHandler} />
            }
            {error.passwordError && <p className="validation-error txt-sml">{error.passwordError}</p>}
          </div>

          {/* Other section here */}
          <div className="margin-1rem login__remember-sec center__flex">
            <input type="checkbox" id="tac__btn" required />
            <label htmlFor="tac__btn" className=" margin__lr-8px">I agree to all the Terms & Conditions</label>
          </div>
          <button className="btns btn__primary margin-1rem border__rad-4px" disabled={loading}>Sign Up</button>
        </form>
        <div className="center__flex flex__dir-col margin-1rem">
          <p>Already have an account? <Link to={"/login"} className="btns btn__link">Login</Link></p>
        </div>
      </div>
      <ProfileCard />
    </div>
  )
}
