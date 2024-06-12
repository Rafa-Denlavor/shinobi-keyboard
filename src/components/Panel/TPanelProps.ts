import { Dispatch, SetStateAction } from "react";

export type PanelProps = {
  status?: string;
  changeStatus: Dispatch<SetStateAction<string>>;
  changeScore: Dispatch<SetStateAction<number>>;
};
