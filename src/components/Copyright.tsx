import { FC, memo } from "react";

import { constants } from "../constants";
import { getYear } from "../utils/getYear";

export const Copyright: FC = memo(() => (
  <footer className=" mt-auto bottom-0 pb-1 w-full">
    <h2 className="text-center opacity-80">
      {constants.COPYRIGHT} {getYear()}
    </h2>
  </footer>
));