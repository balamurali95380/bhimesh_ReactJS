import { createContext } from "react";

const Usercontext=createContext<string[]>([])

export const UsercontextProvider=Usercontext.Provider
export const UsercontextConsumer=Usercontext.Consumer