import dynamic from "next/dynamic";

export const Key = dynamic(() => import("./Key"));
export const Mail = dynamic(() => import("./Mail"));
export const User = dynamic(() => import("./User"));
export const Logout = dynamic(() => import("./Logout"));
export const Login = dynamic(() => import("./Login"));
export const Dashboard = dynamic(() => import("./Dashboard"));
export const Shopping = dynamic(() => import("./Shopping"));
