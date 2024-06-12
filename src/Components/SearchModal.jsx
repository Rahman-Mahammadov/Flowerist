/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalBody,
} from "tw-elements-react";
const SearchModal = ({ show, setShow }) => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
  return (
    <>
      <div>
        <TEModal show={show} setShow={setShow}>
          <TEModalDialog centered size="md">
            <TEModalContent>
              {/* <TEModalHeader>
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
              </TEModalHeader> */}

              <TEModalBody>
                <form onSubmit={()=>navigate(`/catalog/search/${input}`)}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Search for a flower"
                    className="font-montserrat w-full outline-none border rounded-md p-4 my-8"
                  />
                </form>
              </TEModalBody>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      </div>
    </>
  );
};

export default SearchModal;
