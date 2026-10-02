import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/UseAuth";
import SocialLogin from "../SocialLogin";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { loginUser } = useAuth();
    const onSubmit = (data) => {
        console.log(data);
        loginUser(data.email, data.password).then((result) => {
            const user = result.user;
            console.log(user);
        });
    };
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-extrabold">Welcome Back </h1>
                <p>Login with Profast</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="input w-full"
                            placeholder="Email"
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                            })}
                            className="input w-full"
                            placeholder="Password"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-xl text-red-500">
                                password is required
                            </p>
                        )}
                        ,
                        {errors.password?.type === "minLength" && (
                            <p className="text-xl text-red-500">
                                Password must be 6 charecture
                            </p>
                        )}
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn  bg-primary mt-4">Login</button>
                    </fieldset>

                    <p>
                        Don’t have any account?{" "}
                        <Link
                            className="text-blue-600 underline"
                            to="/register"
                        >
                            Register
                        </Link>
                    </p>
                    <div className="divider">OR</div>
                    
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
