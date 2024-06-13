import { Dispatch, SetStateAction } from "react";

export type PanelProps = {
  timeDifficulty: number;
  status?: string;
  changeStatus: Dispatch<SetStateAction<string>>;
  changeScore: Dispatch<SetStateAction<number>>;
};
