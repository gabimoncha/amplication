import {
  AppInfo,
  Entity,
  ModuleAction,
  ModuleContainer,
  PluginInstallation,
  Role,
  ServiceTopics,
  Topic,
} from "./code-gen-types";
import { EnumResourceType } from "./models";

export class DSGResourceData {
  resourceType!: keyof typeof EnumResourceType;
  resourceInfo?: AppInfo;
  buildId: string;
  entities?: Entity[];
  roles?: Role[];

  pluginInstallations!: PluginInstallation[];
  moduleContainers?: ModuleContainer[];
  moduleActions?: ModuleAction[];

  //#region Blocks
  serviceTopics?: ServiceTopics[];
  topics?: Topic[];
  //#endregion

  otherResources?: DSGResourceData[];
}
