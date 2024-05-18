import { useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Config";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
//   let user ={isLoggedIn: true}
  const [loading, setloading] = useState(false);
  const navigateTo = useNavigate();
  const provider = new GoogleAuthProvider();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    if(isLoggedIn===true){
      // navigateTo("/");
    }
    console.log(isLoggedIn)
  }, [isLoggedIn])
  

  const RegisterUser = (e) => {
    e.preventDefault();
//     setloading(true);
    if (register.password !== register.cpassword) {
      toast.error("Password do not Match.");
    //   setloading(false);
    } else {
      createUserWithEmailAndPassword(auth, register.email, register.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          toast.success("Registered Successfully");
//           setloading(false);
          navigateTo("/auth/login");
        })
        .catch((error) => {
          toast.error("Email already Registered");
          navigateTo("/auth/login");
        //   setloading(false);
        });
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(token);
        console.log(user);
        // toast.success("Registered Successfully");
        navigateTo("/auth/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        console.log(email);
        console.log(credential);
        toast.error(error.message);
      });
  };

  return (
    <>
      <ToastContainer />
      {/* {loading && <Loader />} */}
      <section className='bg-blue-200 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[87vh] lg:py-0'>
          <div className='w-full bg-blue-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Create and account
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={RegisterUser}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                    value={register.email}
                    onChange={(e) =>
                      setRegister({ ...register, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    value={register.password}
                    onChange={(e) =>
                      setRegister({ ...register, password: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor='confirm-password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Confirm password
                  </label>
                  <input
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    value={register.cpassword}
                    onChange={(e) =>
                      setRegister({ ...register, cpassword: e.target.value })
                    }
                  />
                </div>
                <button
                  type='submit'
                  aria-label="sign up"

                  className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Create an account
                </button>
                <div className='inline-flex items-center justify-center w-full'>
                  <hr className='w-64 h-px bg-gray-200 border-0 dark:bg-gray-700' />
                  <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 left-1/2 dark:text-white '>
                    or
                  </span>
                </div>
                <button
                  type='button'
                  aria-label="sign in google"

                  className='flex justify-center items-center w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={handleGoogle}
                >
                  <svg
                    className='w-4 h-4 me-2'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 18 19'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Sign in with Google
                </button>
                <p className='text-sm font-light text-black dark:text-gray-400'>
                  Already have an account?{" "}
                  <Link
                    to='/auth/login'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;