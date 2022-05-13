import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Auth.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ProfileCard, Sidebar } from "../../components";
import { useAuth } from "../../contexts/auth-context";
import toast from "react-hot-toast";
import { ACTION_TYPE } from "../../utils";

export const Login = () => {

    // Formdata state here
    const [loginFormData, setloginFormData] = useState({
        email: "",
        password: "",
        passType: "password"
    })
    const [rememberMe, setRememberMe] = useState(false);
    const { login, authState: { error }, validateEmailAndPass, authDispatch } = useAuth();
    const { SET_ERROR } = ACTION_TYPE;
    const navigate = useNavigate();

    // On submit handler 
    const loginHandler = async (event) => {
        event.preventDefault();
        if (validateEmailAndPass(loginFormData.email, loginFormData.password)) {
            authDispatch({
                type: SET_ERROR,
                payload: {
                    passwordError: "",
                    emailError: "",
                },
            });
            try {
                await login(loginFormData.email, loginFormData.password);
                navigate("/");
                toast.success("Login successful");
            } catch (error) {
                switch (error.message.split("auth/")[1]) {
                    case "wrong-password).":
                        toast.error("Wrong password.")
                        break
                    case "user-not-found).":
                        toast.error("Email is not registerd.")
                        break
                    default:
                        toast.error("Some error occured, Try later.")
                }
            }
        }
    }
    // To fill test data 
    const testCredentialHandler = () => {
        setloginFormData({
            email: "sudo123@gmail.com",
            password: "sudo123",
            passType: "password",
        })
    }

    // password visibilty handler here 
    const passVisibiltyHandler = () => {
        return loginFormData.passType === "password" ? setloginFormData({ ...loginFormData, passType: "text" }) : setloginFormData({ ...loginFormData, passType: "password" });
    }


    return (
        <div className="container__main">
            <Sidebar />
            <div className="center__flex">

                {/* Validation form here */}
                <div className="login__handler center__flex flex__dir-col">
                    <form onSubmit={(event) => loginHandler(event)} className="container__main-login center__flex flex__dir-col">
                        <h4 className="margin-1rem h3">Login</h4>

                        {/* Email section here */}
                        <div className="margin-1rem main__login-inputs center__flex">
                            <MdEmail className="icons" />
                            <input type="email" className="margin__lr-8px" placeholder="Enter email" required value={loginFormData.email} onChange={(event) => setloginFormData({ ...loginFormData, email: `${event.target.value}` })} />
                            {error?.emailError && <p className="validation-error txt-sml">{error?.emailError}</p>}
                        </div>

                        {/* Password section here */}
                        <div className="margin-1rem main__login-inputs center__flex">
                            <RiLockPasswordFill className="icons" />
                            <input type={loginFormData.passType} className="margin__lr-8px" placeholder="Enter password" required value={loginFormData.password} onChange={(event) => setloginFormData({ ...loginFormData, password: `${event.target.value}` })} />
                            {
                                loginFormData.passType === "password" ?
                                    <AiFillEyeInvisible className="icons toggle-pass" onClick={passVisibiltyHandler} />
                                    :
                                    <AiFillEye className="toggle-pass" onClick={passVisibiltyHandler} />
                            }
                            {error?.passwordError && <p className="validation-error txt-sml">{error?.passwordError}.</p>}
                        </div>

                        {/* Submit section here */}
                        <div className="margin-1rem login__remember-sec center__flex">
                            <input type="checkbox" id="remember__btn" required />
                            <label htmlFor="remember__btn" className=" margin__lr-8px txt-mid" value={rememberMe} onClick={() => setRememberMe((prevState) => !prevState)}>Remember Me</label>
                        </div>
                        <button className="btns btn__primary btn-login border__rad-4px">Login</button>
                        <p className="btns btn__link" onClick={testCredentialHandler}>Use test credentials</p>
                    </form>

                    {/* Other section */}
                    <div className="center__flex flex__dir-col margin-1rem">
                        <p>Don't have an account? <Link to={"/signup"} className="btns btn__link">Sign up</Link></p>
                        <Link to={"/forgot"} className="btns btn__link">Forgot password?</Link>
                    </div>
                </div>
            </div>
            <ProfileCard />
        </div>
    )
}