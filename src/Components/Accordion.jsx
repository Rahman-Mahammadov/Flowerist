import { useState } from "react";
import { TECollapse } from "tw-elements-react";

import { faq } from "../constants";

export default function AccordionBasicExample() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <section className="px-[15%] max-container py-20">
      

      {faq.map((question) => {
        return (
          <>
            <div key={question.id} className="border-neutral-200 bg-white">
              <h2 className="mb-0" id="headingTwo">
                <button
                  className={`${
                    activeElement === `element${question.id} `
                      ? ` border-b-2`
                      : `transition-none `
                  } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none font-montserrat text-red-600;`}
                  type="button"
                  onClick={() => handleClick(`element${question.id}`)}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {question.question}
                  <span
                    className={`${
                      activeElement === `element${question.id}`
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#212529] dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse
                show={activeElement === `element${question.id}`}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 py-4">
                  <strong>This is the second accordion body.</strong> {question.text}
                </div>
              </TECollapse>
            </div>
          </>
        );
      })}
    </section>
  );
}
