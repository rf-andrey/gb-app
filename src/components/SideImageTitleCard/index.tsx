import React, { ReactNode } from "react";

interface Props {
  image: ReactNode;
  text: string;
}

export const SideImageTitleCard = ({ image, text }: Props) => (
  <div className="card card-side shadow-xl w-80 p-4">
    <figure className="w-1/3">{image}</figure>
    <div className="card-body">
      <h2 className="card-title my-auto">{text}</h2>
    </div>
  </div>
);
