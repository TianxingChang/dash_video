import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ChatWindow from "./ChatWindow";
import AnswerWindow from "./AnswerWindow";
import PostWindow from "./postWIndow";
import axios from "axios";

export default function Chat({ askButton, time }) {
  const [open, setOpen] = useState(askButton);
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = async (time, question) => {
    // time, question.preventDefault();

    const payload = {
      time: time.toString(),
      question: question.toString(),
    };
    console.log(payload);

    try {
      const response = await axios.post(
        "http://localhost:8000/items/",
        payload
      );

      const newPost = {
        id: response.data.time,
        time: payload.time,
        question: payload.question,
        answer: response.data.question,
        // answer: response.data.answer,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setOpen(askButton);
  }, [askButton]);

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
                <Dialog.Panel className="right-0 w-screen h-full overflow-y-auto pointer-events-auto ">
                  <div className="flex flex-col py-6 mx-4 mb-4 overflow-y-scroll bg-white border-2 shadow-xl max-h-2/3 bottom-10 rounded-xl border-slate-600">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          AI tutor
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
                        Ask at Time{" "}
                        {`${parseInt(time / 60)}:${parseInt(time) % 60}`}
                      </span>

                      {posts.map((post) => (
                        <Fragment key={post.id}>
                          <PostWindow key={time} post={post.question} />
                          <AnswerWindow answer={post.answer} />
                        </Fragment>
                      ))}
                      <ChatWindow
                        handleFormSubmit={handleFormSubmit}
                        time={time}
                      />
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
