import dynamic from "next/dynamic";

export const Key = dynamic(() => import("./Key"));
export const Mail = dynamic(() => import("./Mail"));
