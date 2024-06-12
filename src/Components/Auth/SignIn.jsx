/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { instance2, instance } from "../../Api/index";
import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";
import { toast } from "react-toastify";
const SignIn = ({ show, setShow }) => {
  const initialUser = {
    username: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (user.email && user.password && user.username) {
        const { data: userData } = await instance2.post(
          "/auth/local/register",
          JSON.stringify(user)
        );
        localStorage.setItem("userData", JSON.stringify(userData));
      }
    } catch (err) {
      toast.error("Email or password is incorrect");
    }

    setUser(initialUser);

    setShow(!show);
  };

  return (
    <>
      <TEModal show={show} setShow={setShow}>
        <TEModalDialog centered size="md">
          <TEModalContent>
            <TEModalHeader>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShow(!show)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>

            <TEModalBody>
              <form className="max-w-sm mx-auto " onSubmit={handleFormSubmit}>
                <h1 className="text-2xl font-bold my-4">Log In</h1>

                <label
                  htmlFor=""
                  className="block mb-2 text-primary font-montserrat font-semibold"
                >
                  Username
                </label>
                <input
                  type="text"
                  value={user.username}
                  name="username"
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 outline-none border rounded mb-4 text-primary font-montserrat"
                />

                <label
                  htmlFor=""
                  className="block mb-2 text-primary font-montserrat font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 outline-none border rounded mb-4 text-primary font-montserrat"
                />

                <label
                  htmlFor=""
                  className="block mb-2 text-primary font-montserrat font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 outline-none border rounded mb-4 text-primary font-montserrat"
                />

                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-2 px-4 rounded"
                >
                  Sign In
                </button>
              </form>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
};

export default SignIn;
