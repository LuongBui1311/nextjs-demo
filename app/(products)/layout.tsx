import React from "react";
import CustomHeader from "../components/header";
import CustomFooter from "../components/footer";

const ProductPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen flex flex-col min-h-screen bg-slate-50">
      <CustomHeader />
      <div id="content" className="flex-grow">
        <div className="flex flex-col gap-5 mx-7 md:w-8/12 mt-10 md:mx-auto">
          {children}
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default ProductPageLayout;
