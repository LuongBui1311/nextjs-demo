import React from 'react'

const GeneralInfo = ({product, price}: any) => {
  return (
    <div id="general-info" className="flex flex-col gap-4">
            <div id="category" className="flex gap-2 flex-wrap">
              {product.categories.map((cate: any) => (
                <span key={cate.name} className="px-4 py-2 bg-violet-700 text-white text-xs font-semibold rounded-full">
                  {cate.name}
                </span>
              ))}
            </div>
            <h1 id="name" className="text-xl font-semibold">
              {product.name}
            </h1>
            <div className="flex gap-4 items-end">
              <h2 id="price" className="text-2xl font-semibold text-violet-700">
                ${parseFloat(price).toFixed(2)}
              </h2>
              {product.discountPercentage !== 0 && (
                <div className="flex gap-2 items-end">
                  <p className="line-through text-lg">{`$${product.basePrice}`}</p>
                  <p className="bg-violet-700 text-white px-2 py-1 font-semibold text-sm rounded-lg">{`- ${product.discountPercentage}%`}</p>
                </div>
              )}
            </div>
            <p>
              <span className="font-semibold">Description: </span>
              {product.description}
            </p>
          </div>
  )
}

export default GeneralInfo
