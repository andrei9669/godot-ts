import { Plugin } from "esbuild";
import { ProgramOptionsType } from "../../data";
import {
  ConfigType,
  DryConfigType,
  dryRunOption,
  OutConfigType,
} from "../../utils/shared";

export type WatchConfigType = {
  src?: string;
  plugins?: Plugin[];
} & DryConfigType &
  OutConfigType &
  ConfigType;

export const watchOptions: ProgramOptionsType[] = [
  {
    name: "src",
    defaultValue: ".",
    description: "Relative path where *.ts files located",
  },
  {
    name: "out",
    defaultValue: "./.godot/GodotJS",
    description: "Relative path where *.ts files are written",
  },
  {
    name: "plugins",
    defaultValue: [],
    description: "Plugins for esbuild",
    array: true,
  },
  dryRunOption,
];
