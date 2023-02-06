const productData = [];
const collectionData = [];
const tagData = [];

for (let i = 0; i < 10; i++) {
  productData.push({
    id: i,
    name: "Product" + i,
    price: 100 * i,
    imageUrl: "https://picsum.photos/200"
  });
}

export {
  productData, collectionData, tagData
};