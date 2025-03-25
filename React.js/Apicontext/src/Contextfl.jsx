import { createContext } from "react";

export const Usercontext=createContext();

export const Userprovider=Usercontext.Provider;
export const Userconsumer=Usercontext.Consumer;