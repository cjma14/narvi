import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

async function getProducts() {
  const products: CollectionEntry<"products">[] = (
    await getCollection("products")
  ).sort(
    (a: CollectionEntry<"products">, b: CollectionEntry<"products">) =>
      a.data.id - b.data.id,
  );

  return products
}

export async function GET({params, request}) {
    return new Response(
      JSON.stringify(await getProducts()),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
  }
