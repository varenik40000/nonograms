export async function getProductJSON() {
    const res = await fetch(`../../pages/menu/products.json`);
    return await res.json();
    console.lof(res)
}