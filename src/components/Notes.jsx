import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ChatWindow from "./ChatBot/ChatWindow";

export default function Notes({ noteButton, time }) {
  const [open, setOpen] = useState(noteButton);

  useEffect(() => {
    setOpen(noteButton);
  }, [noteButton]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20 " onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex w-1/3 max-w-full pl-0 pointer-events-none top-28">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="right-0 w-screen h-full pointer-events-auto ">
                  <div className="flex flex-col py-6 mx-4 mb-4 overflow-y-scroll bg-white border-2 shadow-xl bottom-10 rounded-xl border-slate-600">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Notes
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="relative text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 mt-2 sm:px-6">
                      <span className="inline-flex mb-4 items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        Timestamp{" "}
                        {`${parseInt(time / 60)}:${parseInt(time) % 60}`}
                      </span>
                      <ChatWindow />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
