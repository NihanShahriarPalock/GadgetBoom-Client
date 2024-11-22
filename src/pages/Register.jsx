import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import GoogleLogin from "../components/socialLogin/GoogleLogin";



const Register = () => {
  const { CreateUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const role = data.role;
    const photoURL = data.photoURL;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];
    const cartlist = [];
    const userData = { name, email, role, photoURL, status, wishlist, cartlist };

    try {
      // Create user
      await CreateUser(data.email, data.password);
      const res = await axios.post("http://localhost:4000/users", userData);
      if (res.data.insertedId) {
        toast.success("Registration successful");
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong!"
      );
    }
  };

  return (
    <div>
      <div className=' bg-white py-10'>
        <h1 className=' backdrop-blur-sm text-4xl text-center pb-5 text-gray-900 '>
          Registration Form
        </h1>
        <p className='pb-2 text-center text-gray-900 '>
          Fill up all the information to register
        </p>
        <div className=' shadow-lg  w-full  flex'>
          <div className='w-full lg:w-1/2 mx-auto  p-5 rounded-lg lg:rounded-l-none'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-3 w-full shadow-lg  p-5'>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 '>Name</legend>
                  <input
                    type='text'
                    name='name'
                    autoComplete='displayName'
                    placeholder='Enter Your Name'
                    className='px-4 py-1 w-full focus:outline-0  bg-white text-gray-900  '
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className='text-red-600'>Name is required</p>
                  )}
                </fieldset>
              </div>

              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 '>Email</legend>
                  <input
                    type='email'
                    name='email'
                    autoComplete='email'
                    placeholder='Enter Your Email'
                    className='px-4 py-1 w-full focus:outline-0  bg-white text-gray-900 '
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className='text-red-600'>Email is required</p>
                  )}
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 '>
                    Image URL
                  </legend>
                  <input
                    type='text'
                    name='photoURL'
                    id=''
                    placeholder='Enter Your Image URL'
                    className='px-4 py-1 w-full focus:outline-0  bg-white text-gray-900 '
                    {...register("photoURL", { required: true })}
                  />
                  {errors.photoURL && (
                    <p className='text-red-600'>Image is required</p>
                  )}
                </fieldset>
              </div>
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 '>Role</legend>
                  <select
                    className='select select-bordered select-lg w-full'
                    {...register("role", { required: true })}>
                    <option value='buyer'>Buyer</option>
                    <option value='seller'>Seller</option>
                  </select>
                  {errors.role && (
                    <p className='text-red-600'>Role is required</p>
                  )}
                </fieldset>
              </div>
              {/* Password  */}
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className='font-medium text-gray-900'>
                    Password
                  </legend>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Enter Password'
                    className='px-4 py-1 w-full focus:outline-0 bg-white text-gray-900'
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

              {/* confirm pass  */}
              <div>
                <fieldset className='border border-solid border-gray-300 p-3 w-full rounded'>
                  <legend className=' font-medium text-gray-900 '>
                    Confirm Password
                  </legend>
                  <input
                    type='password'
                    name='password'
                    id=''
                    placeholder='Enter Password Again'
                    className='px-4 py-1 w-full focus:outline-0  bg-white text-gray-900 '
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => {
                        if (watch("password") != value) {
                          return "Your passwords do not match";
                        }
                      },
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className='text-red-500'>Both passwords must match</p>
                  )}
                </fieldset>
              </div>

              <button
                type='submit'
                className='mt-6  border border-gray-800 dark:border-gray-200   w-full   bg-white px-3 py-4  before:bottom-0  text-gray-700 dark:text-gray-200  rounded-md'>
                <span className='z-50 relative'>Register</span>
              </button>
            </form>
            <GoogleLogin></GoogleLogin>
            <div className='text-center my-3 text-gray-900 '>
              Already Registered with Email ?
              <Link
                className='text-blue-500 hover:underline underline-offset-4 ml-2  '
                to='/login'>
                Login Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register