import { Dispatch, SetStateAction } from "react";

export type PanelProps = {
  changeStatus: Dispatch<SetStateAction<string>>;
  changeScore: Dispatch<SetStateAction<number>>;
};
