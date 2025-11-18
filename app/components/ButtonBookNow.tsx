"use client";

import { useFormStatus } from "react-dom";
function ButtonBookNow() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-[#BA7894] rounded-4xl text-2xl text-white text-center px-11 py-3 cursor-pointer"
      disabled={pending}
    >
      {pending ? "Sending..." : "Book Now"}
    </button>
  );
}

export default ButtonBookNow;
