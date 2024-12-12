import React from "react";

export function WhoWeAre() {
  return (
    <section className="lg:px-6 md:px-6 px-2">
      <div className="flex items-center justify-center  bg-orangepeel-500 py-[120px]  rounded-[32px]">
        <div className="flex flex-col items-center justify-center gap-6  ">
          <div
            className="flex flex-col items-center justify-center 
           3xl:w-[912px] 2xl:w-[776px] xl:w-[704px] lg:w-[712px] md:w-[560px] w-[256px]"
          >
            <h2>Nos especializamos en todo tipo de accidente con carros</h2>
            <h2>
              Tan rápido como nos necesite estaremos para ayudarle con su choque
              de carro
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
