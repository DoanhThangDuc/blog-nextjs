import { ReactNode } from "react";

export type PostModal = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
export type ErrorMessage = null | string | ReactNode;
export type IServerRenderProps = {
  isServerRender: true;
};

export type IClientRenderProps = {
  isServerRender: false;
};
export type Source = {
  id: string;
  name: string;
};

export enum Status {
  PENDING = "pending",
  IDLE = "idle",
  ERROR = "error",
}

export interface BpReactProps {
  children?: any;
}
