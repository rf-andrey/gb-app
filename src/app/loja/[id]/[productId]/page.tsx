import { createOrder } from "@/api/orders";
import { getProductById, updateProduct } from "@/api/products";
import { PrimaryButton } from "@/components/atoms/Button";
import { getConfig, getCurrentSession } from "@/helpers/getSession";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params: { productId } }: Props) {
  const session = await getCurrentSession();
  const config = await getConfig();
  const response = await getProductById(productId, config);

  const product = response?.data;

  const handleClick = async () => {
    "use server";
    if (product) {
      const productPayload = {
        ...product,
        stockAmount: product?.stockAmount - 1,
      };

      await updateProduct(productId, productPayload, config);
      const orderPayload = {
        orderNumber: Number(
          `${productId}${new Date()
            .toLocaleDateString("pt-BR")
            .replaceAll("/", "")}`
        ),
        totalAmount: product.price,
        status: false,
      };
      await createOrder(orderPayload, config);

      redirect("/loja/usuario");
    }
  };

  return (
    <div className="w-full flex flex-col gap-12">
      <div className="flex w-full justify-between gap-8">
        <img src={product?.image} alt={product?.name} className="w-1/2" />
        <div className="flex flex-col gap-2 w-full">
          <h2>{product?.name}</h2>
          <p>R$ {product?.price}</p>
          <p>{product?.description}</p>
          <PrimaryButton disabled={!session} handleClick={handleClick}>
            Comprar
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
