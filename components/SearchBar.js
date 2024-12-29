import React from "react";
import Form from "next/form";

export default function SearchBar() {
  return (
    <>
      <div className="w-full flex place-items-center justify-center">
        <div className="flex place-items-center justify-center shadow-xl border-2 w-fit gap-5 p-3 rounded-2xl mb-6">
          <h1 className="font-bold text-sm">Display total price</h1>
          <p className="text-slate-500 ">|</p>
          <Form action="/search" className="flex gap-20">
            <input
              name="query"
              placeholder="Includes all fees, before taxes "
              className="w-64 outline-none"
            />
            <button
              type="submit"
              className="text-sm shadow-xl border-solid border-2 p-1 rounded-full px-3 hover:bg-pink-500 transition-all delay-100 duration-75 ease-in-out"
            >
              submit
            </button>
          </Form>
        </div>
      </div>
    </>
  );
}
