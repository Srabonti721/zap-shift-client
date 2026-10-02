import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hooks/UseAuth";

const Register = () => {
    const { createUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleOnSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-4xl font-extrabold">Create an Account </h1>
                <p>Register with Profast</p>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input"
                            placeholder="Name"
                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-500">Name is Required</p>
                        )}
                        {/* email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="input"
                            placeholder="Email"
                        />
                        {errors.email?.type === "required" && (
                            <p className="text-red-500">email is required </p>
                        )}
                        {/* password */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                            })}
                            className="input"
                            placeholder="Password"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red-500">
                                password is required{" "}
                            </p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red-500">
                                password must be at least 6 characters or longer
                            </p>
                        )}
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn bg-primary mt-4">
                            Register
                        </button>
                    </fieldset>
                    <p>
                        Already have an account?{" "}
                        <Link className="text-blue-600 underline" to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
