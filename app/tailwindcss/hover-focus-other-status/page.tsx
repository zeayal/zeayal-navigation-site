import Image from "next/image";
import React from "react";

function HoverFocusOther() {
  return (
    <div className="space-y-10 p-5 pb-[100px]">
      <div>
        <h1>Hover, focus, and active</h1>
        <button className="bg-violet-500 hover:bg-violet-600 focus:ring focus:ring-violet-200">
          HoverFocusOther
        </button>
      </div>

      <ul className="divide-y divide-red-200 p-6">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <li
              className="flex py-4 first:pt-0 last:pb-0 odd:bg-red-200 even:bg-blue-400"
              key={index}
            >
              <Image
                src="/avatar.avif"
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-3">
                <div>Kristen Ramos</div>
                <p className="text-sm text-slate-500">
                  kristen.ramos@example.com
                </p>
              </div>
            </li>
          ))}
      </ul>

      <div className="relative">
        <input
          className="block w-full appearance-none rounded-lg border border-gray-400 px-4 py-2 leading-normal focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="请输入内容"
        />
        <div className="absolute right-0 top-0 mr-4 mt-3 text-red-500">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 mb-2 mr-4 hidden text-red-500">
          请输入有效内容
        </div>
      </div>

      <section className="group m-5 flex cursor-pointer flex-col border border-slate-500 p-5 ">
        <div className="flex items-center group-hover:bg-blue-400 group-hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
          </svg>

          <div className="ml-2">New Project</div>
        </div>
        <div className="mt-2">
          When you need to style an element based on the state of some parent
          element, mark the parent with the group class, and use group-*
          modifiers like group-hover to style the target element:
        </div>
      </section>

      <section>
        <form>
          <label>
            <input
              type="email"
              className="peer border border-slate-300 p-1 invalid:border-red-600 invalid:text-red-600 invalid:ring-red-600 focus:outline-none focus:ring-1"
              placeholder="请输入邮箱"
            />
            <p className="invisible text-red-600 peer-invalid:visible">
              Please provide a valid email address.
            </p>
          </label>
        </form>

        <form className="flex items-center space-x-6">
          <div className="shrink-0">
            <img
              className="h-16 w-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt="Current profile photo"
            />
          </div>
          <label className="block">
            <span className="sr-only">Choose profile photo</span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500
      file:mr-4 file:rounded-full file:border-0
      file:bg-violet-50 file:px-4
      file:py-2 file:text-sm
      file:font-semibold file:text-violet-700
      hover:file:bg-violet-100
    "
            />
          </label>
        </form>
      </section>
    </div>
  );
}

export default HoverFocusOther;
