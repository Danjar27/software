import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="center">
      <Image src="/images/logo.svg" width={100} height={100} />
      <div>
        <h1 className="font-bold font-sans text-2xl text-accent">
          Club de Software
        </h1>
        <span className="text-xs font-medium text-gray-400">
          Prueba de ingreso
        </span>
      </div>
    </div>
  );
}
