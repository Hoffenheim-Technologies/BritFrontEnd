import React from "react";
import { Img } from "react-image";

const Image: React.FC<{ className?: string; src: string }> = ({
    className,
    src,
}) => <Img className={className} src={src} alt="logo" />;

export { Image };
