import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/socialLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";


const Login = () => {
    const { Login } = useAuth();
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
      Login(data.email, data.password);
      // console.log(data);
      toast.success("Login Successfully")
      navigate("/");

    };
  return (
    <div className='shadow-lg py-10   '>
      <div className='w-full  flex'>
        <div className='w-full lg:w-1/2 mx-auto bg-white   p-3 rounded-lg lg:rounded-l-none border border-gray-300'>
          <div className=' p-5 '>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-3 w-full '>
              <div className='flex justify-between mb-5'>
                <div className='size-40 flex justify-center items-center'>
                  <img
                    className='w-full'
                    src='https://i.ibb.co.com/yyWhj9M/logo.png'
                    alt=''
                  />
                </div>
                <div className='ml-8 divider lg:divider-horizontal'></div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='backdrop-blur-sm text-4xl  text-center pb-5'>
                    Login Form
                  </h1>
                  <p className='pb-10 text-center text-gray-400'>
                    Sign in with your authorized email and password
                  </p>
                </div>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-black/60 '>Email</legend>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter authorized Email'
                    className='px-4 py-1 w-full  focus:outline-0'
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className='text-red-600'>Email is required</p>
                  )}
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-black/60 '>
                    Password
                  </legend>
                  <input
                    type='password'
                    name='password'
                    placeholder='Enter verified Password'
                    className='px-4 py-1 w-full  focus:outline-0'
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                      validate: {
                        hasUppercase: (value) =>
                          /[A-Z]/.test(value) ||
                          "Password must include an uppercase letter",
                        hasLowercase: (value) =>
                          /[a-z]/.test(value) ||
                          "Password must include a lowercase letter",
                        hasNumber: (value) =>
                          /\d/.test(value) || "Password must include a number",
                        hasSpecialChar: (value) =>
                          /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                          "Password must include a special character",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className='text-red-600'>{errors.password.message}</p>
                  )}
                  {errors.password?.type === "validate" && (
                    <p className='text-red-600'>{errors.password.message}</p>
                  )}
                </fieldset>
              </div>

              <button
                type='submit'
                className='mt-6  border border-gray-800   w-full   bg-white px-3 py-4  before:bottom-0  text-gray-700   rounded-md'>
                <span className='z-50 relative'>Login</span>
              </button>
            </form>

            <GoogleLogin></GoogleLogin>
            <p className='text-sm text-center sm:px-6 text-gray-600 '>
              Don&#x27;t have an account?
              <Link
                to='/register'
                className='ml-2 text-blue-800 dark:text-blue-500 hover:underline underline-offset-4'>
                Click to Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login