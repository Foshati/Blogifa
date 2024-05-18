"use client";
import { Fingerprint, Mail } from "lucide-react";
import { User } from "lucide-react";
import { RectangleEllipsis } from "lucide-react";
import { BookOpen } from "lucide-react";

import { useState } from "react";

export default function AuthNavbar() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <main>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div
        className="btn btn-ghost btn-circle "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <Fingerprint />
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="h-auto modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
          </form>

          <div role="tablist" className="flex justify-center tabs tabs-lifted">
            <label className={`tab ${activeTab === 1 ? "tab-active" : ""}`}>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                aria-label="Tab 1"
                checked={activeTab === 1}
                onChange={() => setActiveTab(1)}
                className="sr-only"
              />
              <span>Sign in</span>
            </label>
            <label className={`tab ${activeTab === 2 ? "tab-active" : ""}`}>
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                aria-label="Tab 2"
                checked={activeTab === 2}
                onChange={() => setActiveTab(2)}
                className="sr-only"
              />
              <span>Sign up</span>
            </label>
          </div>

          <div>
            <div className="">
              <form
                role="tabpanel"
                className={`tab-content bg-base-100 border-base-300 rounded-box p-6 flex flex-col justify-center items-center h-auto ${activeTab === 1 ? "flex" : "hidden"}`}
              >
                {/* Tab content 1 */}
                <div className="w-full max-w-xs space-y-4">
                  <div className="flex justify-center avatar placeholder mb-7">
                    <div className="w-16 rounded-full bg-neutral text-neutral-content">
                      <span className="text-xl">
                        <BookOpen className="size-8" />
                      </span>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 input input-bordered">
                    <Mail className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Email" />
                  </label>
                  <label className="flex items-center gap-2 input input-bordered">
                    <RectangleEllipsis className="w-4 h-4 opacity-70" />
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                    />
                  </label>
                  <div className="flex justify-center">
                    <button className="btn btn-active btn-wide">Sign in</button>
                  </div>
                </div>
              </form>

              <form
                role="tabpanel"
                className={`tab-content bg-base-100 border-base-300 rounded-box p-6 flex flex-col justify-center items-center h-auto ${activeTab === 2 ? "flex" : "hidden"}`}
              >
                {/* Tab content 2 */}
                <div className="w-full max-w-xs space-y-4">
                  <div className="flex justify-center avatar placeholder mb-7">
                    <div className="w-16 rounded-full bg-neutral text-neutral-content">
                      <span className="text-xl">
                        <BookOpen className="size-8" />
                      </span>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 input input-bordered">
                    <Mail className="w-4 h-4 opacity-70" />
                    <input type="text" className="grow" placeholder="Email" />
                  </label>
                  <label className="flex items-center gap-2 input input-bordered">
                    <User className="w-4 h-4 opacity-70" />
                    <input
                      type="text"
                      className="grow"
                      placeholder="Username"
                    />
                  </label>
                  <label className="flex items-center gap-2 input input-bordered">
                    <RectangleEllipsis className="w-4 h-4 opacity-70" />
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                    />
                  </label>
                  <label className="flex items-center gap-2 input input-bordered">
                    <RectangleEllipsis className="w-4 h-4 opacity-70" />
                    <input
                      type="password"
                      className="grow"
                      placeholder="Repeat password"
                    />
                  </label>
                  <div className="form-control">
                    <label className="cursor-pointer label">
                      <span className="label-text">Remember me</span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-success"
                      />
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <button className="btn btn-active btn-wide">Sign up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </main>
  );
}
