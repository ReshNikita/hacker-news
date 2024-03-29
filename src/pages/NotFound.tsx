import { FC } from "react";

import { Button } from "../components/Button";

import { constants } from "../constants";
import { useNavigateHook } from "../hooks/useNavigateHook";

export const NotFound: FC = () => {
  const { getNavigation } = useNavigateHook();

  return (
    <main className="mt-28 z-50 text-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">
          {constants[404]}
        </h1>
        <p className="mb-4 text-lg text-gray-500">{constants.OOPS}</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <p className="mt-4 text-gray-500">{constants.GET_BACK}</p>
        <div className="flex justify-center mt-6">
          <Button
            text={constants.BACK_BUTTON}
            className="flex items-center p-4 h-6 border-2 border-solid rounded-2xl text-center leading-8 transition ease-in-out delay-100  bg-orange-700 hover:bg-orange-400"
            onClick={() => getNavigation(constants.BASE_URL)}
          />
        </div>
      </div>
    </main>
  );
};
