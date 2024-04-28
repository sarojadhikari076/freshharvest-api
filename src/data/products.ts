import { Product } from '../types/product'

export const products: Product[] = [
  {
    slug: 'apple',
    name: 'Apple',
    shortDescription: 'Fresh and juicy apples harvested from organic orchards.',
    longDescription:
      'Apples are one of the most beloved fruits worldwide, known for their crisp texture and sweet flavor. They are a rich source of dietary fiber, antioxidants, and vitamin C, making them a nutritious addition to any diet. Our apples are carefully handpicked from organic orchards, ensuring the highest quality and freshness. Whether enjoyed as a wholesome snack, sliced into salads, or baked into delicious desserts, our premium apples are sure to satisfy your taste buds and nourish your body.',
    category: 'fruits',
    subCategory: 'apples',
    price: 2.99,
    unit: 'kg',
    thumbnail: '/images/product-1.webp',
    availableQuantity: 500,
    averageRating: 4.5,
    reviewCount: 120
  },
  {
    slug: 'apple',
    name: 'Banana',
    shortDescription: 'Sweet and ripe bananas perfect for snacking or smoothies.',
    longDescription:
      "Bananas are nature's perfect snack, offering a delightful combination of sweetness and nutrition. Packed with essential vitamins and minerals, including potassium, vitamin B6, and vitamin C, bananas provide an instant energy boost and support overall health. Our premium bananas are carefully selected at peak ripeness, ensuring optimal flavor and texture. Whether enjoyed on their own, blended into creamy smoothies, or sliced onto cereal, our delicious bananas are sure to satisfy your cravings and fuel your day.",
    category: 'fruits',
    subCategory: 'bananas',
    price: 1.49,
    unit: 'dozen',
    thumbnail: '/images/product-2.jpeg',
    availableQuantity: 300,
    averageRating: 4.2,
    reviewCount: 90
  },
  {
    slug: 'apple',
    name: 'Carrot',
    shortDescription: 'Crunchy and nutritious carrots ideal for salads or cooking.',
    longDescription:
      'Carrots are versatile root vegetables prized for their vibrant color, crunchy texture, and sweet flavor. Rich in beta-carotene, fiber, vitamin K1, potassium, and antioxidants, carrots offer a myriad of health benefits, including improved vision, immune support, and heart health. Our premium carrots are freshly harvested and meticulously inspected to ensure superior quality and freshness. Whether enjoyed raw as a crunchy snack, grated into salads, or cooked into savory dishes, our premium carrots are sure to elevate your culinary creations and nourish your body.',
    category: 'vegetables',
    subCategory: 'root vegetables',
    price: 1.99,
    unit: 'kg',
    thumbnail: '/images/product-3.jpeg',
    availableQuantity: 400,
    averageRating: 4.3,
    reviewCount: 80
  },
  {
    slug: 'apple',
    name: 'Spinach',
    shortDescription: 'Tender and flavorful spinach packed with vitamins and minerals.',
    longDescription:
      'Spinach is a nutrient-rich leafy green vegetable renowned for its exceptional health benefits and culinary versatility. Packed with vitamins A, C, and K, as well as iron, calcium, and antioxidants, spinach supports healthy vision, bone health, and immune function. Our premium spinach is tender, flavorful, and bursting with freshness, making it the perfect addition to salads, smoothies, soups, and sautés. Whether enjoyed raw in salads or cooked into your favorite dishes, our spinach is sure to delight your taste buds and nourish your body.',
    category: 'vegetables',
    subCategory: 'leafy greens',
    price: 2.49,
    unit: 'bunch',
    thumbnail: '/images/product-4.webp',
    availableQuantity: 250,
    averageRating: 4.7,
    reviewCount: 150
  },
  {
    slug: 'apple',
    name: 'Orange',
    shortDescription: 'Juicy and tangy oranges bursting with Vitamin C goodness.',
    longDescription:
      'Oranges are beloved citrus fruits prized for their juicy flesh, tangy flavor, and rich vitamin C content. Bursting with antioxidants, oranges support immune health, skin vitality, and overall well-being. Our premium oranges are handpicked at peak ripeness, ensuring maximum juiciness and flavor. Whether enjoyed fresh as a refreshing snack, squeezed into fresh juice, or incorporated into both sweet and savory recipes, our oranges are sure to brighten your day and invigorate your senses.',
    category: 'fruits',
    subCategory: 'citrus fruits',
    price: 3.49,
    unit: 'kg',
    thumbnail: '/images/product-5.jpeg',
    availableQuantity: 350,
    averageRating: 4.6,
    reviewCount: 110
  },
  {
    slug: 'apple',
    name: 'Tomato',
    shortDescription: 'Fresh and ripe tomatoes perfect for salads, sauces, or sandwiches.',
    longDescription:
      'Tomatoes are versatile fruits renowned for their juicy flesh, vibrant color, and rich flavor profile. Packed with essential nutrients, including vitamin C, potassium, folate, and antioxidants, tomatoes offer a myriad of health benefits, including heart health, skin vitality, and cancer prevention. Our premium tomatoes are carefully selected for their firm texture, rich flavor, and vibrant color, making them the perfect addition to salads, sauces, sandwiches, and more. Whether enjoyed raw or cooked, our tomatoes are sure to elevate your culinary creations and delight your taste buds.',
    category: 'vegetables',
    subCategory: 'nightshades',
    price: 2.29,
    unit: 'kg',
    thumbnail: '/images/product-6.jpeg',
    availableQuantity: 450,
    averageRating: 4,
    reviewCount: 70
  },
  {
    slug: 'apple',
    name: 'Grapes',
    shortDescription: 'Plump and sweet grapes ideal for snacking or desserts.',
    longDescription:
      'Grapes are small, round berries known for their sweet taste and versatility. They come in various colors, including green, red, and purple, each offering a unique flavor profile. Grapes are rich in antioxidants and vitamins, making them a nutritious addition to your diet. Our premium grapes are carefully selected for their plumpness and sweetness, ensuring a delightful snacking experience. Whether enjoyed fresh as a snack, added to salads, or used in desserts and wine-making, our grapes are sure to satisfy your cravings and tantalize your taste buds.',
    category: 'fruits',
    subCategory: 'berries',
    price: 4.99,
    unit: 'kg',
    thumbnail: '/images/product-7.png',
    availableQuantity: 200,
    averageRating: 4.8,
    reviewCount: 180
  },
  {
    slug: 'apple',
    name: 'Cucumber',
    shortDescription: 'Cool and refreshing cucumbers great for salads or pickling.',
    longDescription:
      'Cucumbers are crisp, cool vegetables known for their refreshing taste and high water content. They are low in calories and packed with nutrients, including vitamins K and C, and potassium. Our premium cucumbers are grown organically and harvested at peak freshness, ensuring optimal taste and texture. Whether enjoyed sliced in salads, pickled as a condiment, or added to refreshing drinks, our cucumbers are sure to quench your thirst and satisfy your palate.',
    category: 'vegetables',
    subCategory: 'gourds',
    price: 1.79,
    unit: 'piece',
    thumbnail: '/images/product-8.webp',
    availableQuantity: 300,
    averageRating: 4.2,
    reviewCount: 70
  },
  {
    slug: 'apple',
    name: 'Strawberry',
    shortDescription: 'Sweet and succulent strawberries perfect for desserts or smoothies.',
    longDescription:
      'Strawberries are heart-shaped berries prized for their sweet, juicy flesh and vibrant red color. They are packed with vitamins, fiber, and antioxidants, making them a delicious and nutritious choice for snacking or incorporating into recipes. Our premium strawberries are handpicked at peak ripeness to ensure maximum flavor and freshness. Whether enjoyed fresh as a snack, blended into smoothies, or used to top desserts, our strawberries are sure to add a burst of flavor to your day.',
    category: 'fruits',
    subCategory: 'berries',
    price: 5.49,
    unit: 'kg',
    thumbnail: '/images/product-9.jpeg',
    availableQuantity: 150,
    averageRating: 4.9,
    reviewCount: 200
  },
  {
    slug: 'apple',
    name: 'Broccoli',
    shortDescription: 'Nutrient-rich broccoli florets great for stir-fries or steaming.',
    longDescription:
      'Broccoli is a nutrient-packed cruciferous vegetable prized for its crisp texture and mild flavor. It is rich in vitamins, minerals, and antioxidants, including vitamin C, vitamin K, and folate. Our premium broccoli is harvested at peak freshness and carefully selected for its vibrant green color and firm florets. Whether enjoyed raw as a crunchy snack, steamed as a side dish, or added to stir-fries and salads, our broccoli is sure to elevate your meals and nourish your body.',
    category: 'vegetables',
    subCategory: 'cruciferous vegetables',
    price: 3.99,
    unit: 'kg',
    thumbnail: '/images/product-10.jpeg',
    availableQuantity: 200,
    averageRating: 4.5,
    reviewCount: 120
  },
  {
    slug: 'apple',
    name: 'Mango',
    shortDescription: 'Exotic and sweet mangoes perfect for desserts or smoothies.',
    longDescription:
      'Mangoes are tropical stone fruits known for their sweet, juicy flesh and aromatic flavor. They are rich in vitamins, minerals, and antioxidants, including vitamin C, vitamin A, and beta-carotene. Our premium mangoes are sourced from the finest orchards and handpicked at peak ripeness to ensure optimal sweetness and flavor. Whether enjoyed fresh as a snack, blended into smoothies, or used in desserts and savory dishes, our mangoes are sure to transport your taste buds to paradise.',
    category: 'fruits',
    subCategory: 'tropical fruits',
    price: 6.99,
    unit: 'kg',
    thumbnail: '/images/product-11.jpeg',
    availableQuantity: 100,
    averageRating: 4.7,
    reviewCount: 150
  },
  {
    slug: 'apple',
    name: 'Potato',
    shortDescription: 'Versatile and filling potatoes suitable for various culinary uses.',
    longDescription:
      'Potatoes are versatile root vegetables prized for their neutral flavor and ability to be used in a wide range of dishes. They are rich in carbohydrates, potassium, and vitamin C, making them a filling and nutritious choice for meals. Our premium potatoes are sourced from trusted growers and inspected for quality and freshness. Whether boiled, baked, mashed, or fried, our potatoes are sure to add comfort and satisfaction to your favorite recipes.',
    category: 'vegetables',
    subCategory: 'root vegetables',
    price: 1.49,
    unit: 'kg',
    thumbnail: '/images/product-12.jpeg',
    availableQuantity: 400,
    averageRating: 4.3,
    reviewCount: 90
  },
  {
    slug: 'apple',
    name: 'Lettuce',
    shortDescription: 'Crisp and fresh lettuce leaves perfect for salads or sandwiches.',
    longDescription:
      'Lettuce is a crisp, leafy green vegetable prized for its mild flavor and crunchy texture. It is low in calories and rich in vitamins and minerals, making it a nutritious choice for salads, sandwiches, and wraps. Our premium lettuce leaves are carefully harvested and packed to preserve their freshness and crispness. Whether used as a base for salads, layered in sandwiches, or wrapped around fillings, our lettuce leaves are sure to enhance your meals and provide a satisfying crunch.',
    category: 'vegetables',
    subCategory: 'leafy greens',
    price: 2.99,
    unit: 'bunch',
    thumbnail: '/images/product-13.jpeg',
    availableQuantity: 250,
    averageRating: 4.6,
    reviewCount: 110
  },
  {
    slug: 'apple',
    name: 'Pineapple',
    shortDescription: 'Tropical and tangy pineapple chunks great for snacking or desserts.',
    longDescription:
      'Pineapple is a tropical fruit prized for its sweet, juicy flesh and tangy flavor. It is rich in vitamins, enzymes, and antioxidants, making it a delicious and nutritious addition to your diet. Our premium pineapple chunks are freshly cut and packed to preserve their freshness and flavor. Whether enjoyed as a refreshing snack, added to fruit salads, or used in desserts and cocktails, our pineapple chunks are sure to transport you to a tropical paradise.',
    category: 'fruits',
    subCategory: 'tropical fruits',
    price: 4.79,
    unit: 'piece',
    thumbnail: '/images/product-14.webp',
    availableQuantity: 150,
    averageRating: 4.4,
    reviewCount: 80
  },
  {
    slug: 'apple',
    name: 'Bell Pepper',
    shortDescription: 'Colorful and crunchy bell peppers perfect for salads or stir-fries.',
    longDescription:
      'Bell peppers, also known as sweet peppers or capsicums, are colorful vegetables prized for their crisp texture and sweet flavor. They come in various colors, including red, yellow, and green, each offering a unique taste and nutritional profile. Bell peppers are rich in vitamins A and C, antioxidants, and fiber, making them a healthy and versatile ingredient in many dishes. Our premium bell peppers are carefully selected for their vibrant color, firmness, and freshness. Whether used raw in salads, roasted in savory dishes, or stir-fried in Asian cuisine, our bell peppers are sure to add color, crunch, and flavor to your meals.',
    category: 'vegetables',
    subCategory: 'nightshades',
    price: 3.49,
    unit: 'kg',
    thumbnail: '/images/product-15.jpeg',
    availableQuantity: 300,
    averageRating: 4.8,
    reviewCount: 150
  },
  {
    slug: 'apple',
    name: 'Watermelon',
    shortDescription: 'Sweet and juicy watermelon slices perfect for refreshing summer treats.',
    longDescription:
      'Watermelon is a refreshing and hydrating fruit known for its juicy flesh and sweet flavor. It is rich in vitamins A and C, as well as antioxidants, making it a nutritious choice for hot summer days. Our premium watermelon slices are freshly cut and packed to preserve their freshness and flavor. Whether enjoyed as a refreshing snack on its own, blended into smoothies, or added to fruit salads, our watermelon slices are sure to quench your thirst and satisfy your sweet cravings.',
    category: 'fruits',
    subCategory: 'melons',
    price: 2.99,
    unit: 'kg',
    thumbnail: '/images/product-16.jpeg',
    availableQuantity: 200,
    averageRating: 4.7,
    reviewCount: 120
  },
  {
    slug: 'apple',
    name: 'Avocado',
    shortDescription: 'Creamy and nutritious avocados perfect for guacamole or toast toppings.',
    longDescription:
      'Avocado is a creamy, nutrient-dense fruit prized for its rich flavor and smooth texture. It is packed with heart-healthy monounsaturated fats, fiber, vitamins, and minerals, making it a nutritious addition to your diet. Our premium avocados are carefully selected and ripened to perfection, ensuring optimal taste and texture. Whether mashed into guacamole, sliced onto toast, or blended into smoothies, our avocados are sure to add deliciousness and nutrition to your meals.',
    category: 'fruits',
    subCategory: 'tropical fruits',
    price: 4.99,
    unit: 'piece',
    thumbnail: '/images/product-17.webp',
    availableQuantity: 250,
    averageRating: 4.9,
    reviewCount: 180
  },
  {
    slug: 'apple',
    name: 'Zucchini',
    shortDescription: 'Versatile zucchini perfect for grilling, sautéing, or baking.',
    longDescription:
      'Zucchini, also known as courgette, is a versatile summer squash prized for its mild flavor and tender texture. It is low in calories and rich in vitamins, minerals, and antioxidants, making it a healthy choice for various culinary applications. Our premium zucchini is freshly harvested and packed to preserve its freshness and flavor. Whether sliced and grilled, sautéed with garlic and herbs, or baked into savory muffins, our zucchini is sure to add nutrition and deliciousness to your meals.',
    category: 'vegetables',
    subCategory: 'gourds',
    price: 2.49,
    unit: 'kg',
    thumbnail: '/images/product-18.webp',
    availableQuantity: 300,
    averageRating: 4.6,
    reviewCount: 150
  },
  {
    slug: 'apple',
    name: 'Blueberry',
    shortDescription: 'Sweet and tangy blueberries perfect for snacking or baking.',
    longDescription:
      'Blueberries are small, round berries prized for their sweet, tangy flavor and vibrant color. They are packed with antioxidants, vitamins, and minerals, making them a superfood for overall health and well-being. Our premium blueberries are freshly picked and packed to preserve their freshness and nutritional value. Whether enjoyed as a convenient snack on their own, sprinkled onto yogurt or oatmeal, or baked into muffins and pies, our blueberries are sure to add a burst of flavor and nutrition to your day.',
    category: 'fruits',
    subCategory: 'berries',
    price: 6.99,
    unit: 'kg',
    thumbnail: '/images/product-19.webp',
    availableQuantity: 200,
    averageRating: 4.8,
    reviewCount: 200
  },
  {
    slug: 'apple',
    name: 'Cauliflower',
    shortDescription:
      'Nutrient-rich cauliflower perfect for roasting, mashing, or making into rice.',
    longDescription:
      'Cauliflower is a nutrient-rich cruciferous vegetable prized for its mild flavor and versatility. It is low in calories and carbohydrates, but high in fiber, vitamins, and antioxidants, making it a nutritious addition to your diet. Our premium cauliflower is freshly harvested and packed to preserve its freshness and nutritional value. Whether roasted until caramelized, mashed with butter and herbs, or grated into rice-like grains, our cauliflower is sure to add deliciousness and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'cruciferous vegetables',
    price: 3.99,
    unit: 'kg',
    thumbnail: '/images/product-20.jpeg',
    availableQuantity: 250,
    averageRating: 4.7,
    reviewCount: 180
  },

  {
    slug: 'apple',
    name: 'Kiwi',
    shortDescription: 'Tangy and refreshing kiwi fruits perfect for snacking or smoothies.',
    longDescription:
      'Kiwi fruits, also known as Chinese gooseberries, are small, oval-shaped fruits with brown fuzzy skin and vibrant green flesh. They are rich in vitamin C, vitamin K, and dietary fiber, making them a nutritious addition to your diet. Our premium kiwi fruits are carefully selected for their sweetness and juiciness, ensuring a delightful snacking experience. Whether enjoyed fresh as a snack, blended into smoothies, or added to fruit salads, our kiwis are sure to tantalize your taste buds and boost your health.',
    category: 'fruits',
    subCategory: 'tropical fruits',
    price: 3.99,
    unit: 'kg',
    thumbnail: '/images/product-21.jpeg',
    availableQuantity: 300,
    averageRating: 4.6,
    reviewCount: 150
  },
  {
    slug: 'apple',
    name: 'Cantaloupe',
    shortDescription: 'Sweet and succulent cantaloupe slices perfect for refreshing summer snacks.',
    longDescription:
      'Cantaloupe, also known as muskmelon or rockmelon, is a sweet and juicy fruit prized for its orange flesh and fragrant aroma. It is rich in vitamins A and C, as well as antioxidants, making it a nutritious choice for summer refreshment. Our premium cantaloupe slices are freshly cut and packed to preserve their freshness and flavor. Whether enjoyed as a refreshing snack on its own, blended into smoothies, or added to fruit salads and desserts, our cantaloupe slices are sure to delight your taste buds and hydrate your body.',
    category: 'fruits',
    subCategory: 'melons',
    price: 2.99,
    unit: 'kg',
    thumbnail: '/images/product-22.jpeg',
    availableQuantity: 200,
    averageRating: 4.5,
    reviewCount: 120
  },
  {
    slug: 'apple',
    name: 'Peach',
    shortDescription: 'Juicy and flavorful peaches perfect for desserts or snacking.',
    longDescription:
      'Peaches are soft, juicy fruits with a sweet and slightly tart flavor. They are rich in vitamins A and C, as well as antioxidants, making them a nutritious and delicious choice for snacks and desserts. Our premium peaches are handpicked at peak ripeness to ensure optimal flavor and sweetness. Whether enjoyed fresh as a snack, sliced onto yogurt or cereal, or used in pies, cobblers, and jams, our peaches are sure to satisfy your sweet cravings and brighten your day.',
    category: 'fruits',
    subCategory: 'stone fruits',
    price: 4.49,
    unit: 'kg',
    thumbnail: '/images/product-23.webp',
    availableQuantity: 250,
    averageRating: 4.7,
    reviewCount: 160
  },
  {
    slug: 'apple',
    name: 'Asparagus',
    shortDescription: 'Tender and flavorful asparagus spears great for grilling or roasting.',
    longDescription:
      'Asparagus is a nutrient-rich vegetable prized for its tender stalks and unique flavor. It is rich in vitamins A, C, E, and K, as well as folate, fiber, and antioxidants, making it a healthy choice for your diet. Our premium asparagus spears are freshly harvested and packed to preserve their freshness and flavor. Whether grilled to perfection, roasted with garlic and olive oil, or added to pasta dishes and salads, our asparagus is sure to add a touch of elegance and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'stalk vegetables',
    price: 5.99,
    unit: 'kg',
    thumbnail: '/images/product-24.webp',
    availableQuantity: 150,
    averageRating: 4.8,
    reviewCount: 130
  },
  {
    slug: 'apple',
    name: 'Pear',
    shortDescription: 'Sweet and juicy pears perfect for snacking or baking.',
    longDescription:
      'Pears are sweet and juicy fruits with a mild flavor and tender texture. They are rich in dietary fiber, vitamins, and antioxidants, making them a nutritious choice for snacks and desserts. Our premium pears are carefully selected for their sweetness and ripeness, ensuring optimal flavor and juiciness. Whether enjoyed fresh as a snack, sliced onto cheese platters, or baked into pies and tarts, our pears are sure to please your palate and nourish your body.',
    category: 'fruits',
    subCategory: 'stone fruits',
    price: 3.79,
    unit: 'kg',
    thumbnail: '/images/product-25.avif',
    availableQuantity: 180,
    averageRating: 4.6,
    reviewCount: 140
  },
  {
    slug: 'apple',
    name: 'Green Beans',
    shortDescription: 'Crisp and tender green beans perfect for steaming or stir-frying.',
    longDescription:
      'Green beans, also known as string beans or snap beans, are crisp and tender vegetables prized for their mild flavor and versatile uses. They are rich in vitamins A, C, and K, as well as fiber and antioxidants, making them a nutritious addition to your diet. Our premium green beans are freshly harvested and packed to preserve their freshness and crunchiness. Whether steamed until tender, stir-fried with garlic and soy sauce, or added to soups and salads, our green beans are sure to add color and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'legumes',
    price: 3.29,
    unit: 'kg',
    thumbnail: '/images/product-26.webp',
    availableQuantity: 200,
    averageRating: 4.5,
    reviewCount: 110
  },
  {
    slug: 'apple',
    name: 'Cherry',
    shortDescription: 'Sweet and juicy cherries perfect for snacking or baking.',
    longDescription:
      'Cherries are small, round fruits with a sweet and tart flavor profile. They are rich in vitamins, minerals, and antioxidants, making them a nutritious and delicious choice for snacks and desserts. Our premium cherries are handpicked at peak ripeness to ensure optimal flavor and juiciness. Whether enjoyed fresh as a snack, added to fruit salads, or baked into pies and cobblers, our cherries are sure to satisfy your sweet cravings and brighten your day.',
    category: 'fruits',
    subCategory: 'stone fruits',
    price: 6.99,
    unit: 'kg',
    thumbnail: '/images/product-27.jpeg',
    availableQuantity: 170,
    averageRating: 4.7,
    reviewCount: 150
  },
  {
    slug: 'apple',
    name: 'Celery',
    shortDescription: 'Crisp and crunchy celery stalks perfect for salads or snacking.',
    longDescription:
      'Celery is a crisp and crunchy vegetable prized for its mild flavor and versatility. It is low in calories and rich in vitamins, minerals, and antioxidants, making it a healthy choice for your diet. Our premium celery stalks are freshly harvested and packed to preserve their freshness and crunchiness. Whether added to salads, soups, or stir-fries, or enjoyed as a refreshing snack with peanut butter or hummus, our celery is sure to add flavor and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'stalk vegetables',
    price: 1.99,
    unit: 'bunch',
    thumbnail: '/images/product-28.jpeg',
    availableQuantity: 250,
    averageRating: 4.4,
    reviewCount: 100
  },
  {
    slug: 'apple',
    name: 'Raspberry',
    shortDescription: 'Sweet and tangy raspberries perfect for desserts or snacking.',
    longDescription:
      'Raspberries are small, juicy berries with a sweet and slightly tart flavor. They are rich in vitamins, minerals, and antioxidants, making them a nutritious and delicious choice for snacks and desserts. Our premium raspberries are carefully picked and packed to preserve their freshness and flavor. Whether enjoyed fresh as a snack, blended into smoothies, or added to yogurt, oatmeal, or baked goods, our raspberries are sure to add a burst of flavor and nutrition to your day.',
    category: 'fruits',
    subCategory: 'berries',
    price: 7.49,
    unit: 'kg',
    thumbnail: '/images/product-29.jpeg',
    availableQuantity: 160,
    averageRating: 4.8,
    reviewCount: 170
  },
  {
    slug: 'apple',
    name: 'Eggplant',
    shortDescription: 'Versatile eggplant perfect for grilling, roasting, or stir-frying.',
    longDescription:
      'Eggplant, also known as aubergine or brinjal, is a versatile fruit prized for its mild flavor and meaty texture. It is low in calories and rich in vitamins, minerals, and antioxidants, making it a healthy choice for various culinary applications. Our premium eggplants are freshly harvested and packed to preserve their freshness and flavor. Whether grilled until tender, roasted with herbs and spices, or stir-fried in Asian dishes, our eggplant is sure to add flavor and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'nightshades',
    price: 2.79,
    unit: 'kg',
    thumbnail: '/images/product-30.jpeg',
    availableQuantity: 220,
    averageRating: 4.6,
    reviewCount: 120
  },
  {
    slug: 'apple',
    name: 'Blackberry',
    shortDescription: 'Sweet and juicy blackberries perfect for snacking or baking.',
    longDescription:
      'Blackberries are small, dark berries with a sweet and slightly tart flavor. They are rich in vitamins, minerals, and antioxidants, making them a nutritious and delicious choice for snacks and desserts. Our premium blackberries are carefully picked and packed to preserve their freshness and flavor. Whether enjoyed fresh as a snack, added to fruit salads, or baked into pies, cobblers, or muffins, our blackberries are sure to satisfy your sweet cravings and brighten your day.',
    category: 'fruits',
    subCategory: 'berries',
    price: 8.99,
    unit: 'kg',
    thumbnail: '/images/product-31.jpeg',
    availableQuantity: 140,
    averageRating: 4.9,
    reviewCount: 180
  },
  {
    slug: 'apple',
    name: 'Apricot',
    shortDescription: 'Sweet and aromatic apricots perfect for snacking or baking.',
    longDescription:
      'Apricots are small, golden-orange fruits with a sweet and tangy flavor. They are rich in vitamins A and C, as well as antioxidants, making them a nutritious and delicious choice for snacks and desserts. Our premium apricots are carefully picked at peak ripeness to ensure optimal flavor and juiciness. Whether enjoyed fresh as a snack, sliced onto yogurt or cereal, or baked into pies, tarts, or jams, our apricots are sure to delight your taste buds and brighten your day.',
    category: 'fruits',
    subCategory: 'stone fruits',
    price: 5.99,
    unit: 'kg',
    thumbnail: '/images/product-32.jpeg',
    availableQuantity: 180,
    averageRating: 4.7,
    reviewCount: 160
  },
  {
    slug: 'apple',
    name: 'Green Peas',
    shortDescription: 'Sweet and tender green peas perfect for salads or side dishes.',
    longDescription:
      'Green peas, also known as garden peas, are sweet and tender legumes prized for their vibrant color and nutritional value. They are rich in vitamins, minerals, and antioxidants, making them a healthy and versatile ingredient in many dishes. Our premium green peas are freshly harvested and packed to preserve their freshness and sweetness. Whether added to salads, soups, stir-fries, or served as a side dish, our green peas are sure to add color, flavor, and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'legumes',
    price: 4.49,
    unit: 'kg',
    thumbnail: '/images/product-33.jpeg',
    availableQuantity: 220,
    averageRating: 4.6,
    reviewCount: 130
  },
  {
    slug: 'apple',
    name: 'Cabbage',
    shortDescription: 'Crisp and nutritious cabbage perfect for salads or coleslaw.',
    longDescription:
      'Cabbage is a versatile and nutritious vegetable prized for its crunchy texture and mild flavor. It is low in calories and rich in vitamins, minerals, and antioxidants, making it a healthy choice for your diet. Our premium cabbage heads are freshly harvested and packed to preserve their freshness and crispness. Whether shredded in salads, fermented into sauerkraut, or cooked in soups and stir-fries, our cabbage is sure to add crunch, flavor, and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'cruciferous vegetables',
    price: 2.29,
    unit: 'kg',
    thumbnail: '/images/product-34.webp',
    availableQuantity: 240,
    averageRating: 4.5,
    reviewCount: 110
  },
  {
    slug: 'apple',
    name: 'Radish',
    shortDescription: 'Crunchy and peppery radishes perfect for salads or garnishes.',
    longDescription:
      'Radishes are crisp, peppery root vegetables prized for their vibrant color and unique flavor. They are low in calories and rich in vitamins, minerals, and antioxidants, making them a healthy and flavorful addition to your diet. Our premium radishes are freshly harvested and packed to preserve their freshness and crunchiness. Whether sliced in salads, pickled as a condiment, or used as a garnish for tacos and sandwiches, our radishes are sure to add zest and color to your meals.',
    category: 'vegetables',
    subCategory: 'root vegetables',
    price: 1.79,
    unit: 'bunch',
    thumbnail: '/images/product-35.jpeg',
    availableQuantity: 260,
    averageRating: 4.4,
    reviewCount: 100
  },
  {
    slug: 'apple',
    name: 'Mushroom',
    shortDescription: 'Meaty and flavorful mushrooms perfect for sautéing or grilling.',
    longDescription:
      'Mushrooms are versatile fungi prized for their meaty texture and earthy flavor. They are low in calories and rich in vitamins, minerals, and antioxidants, making them a nutritious choice for your diet. Our premium mushrooms are carefully cultivated and harvested to ensure optimal freshness and flavor. Whether sautéed with garlic and herbs, grilled as a meat alternative, or added to soups and stews, our mushrooms are sure to add depth and richness to your meals.',
    category: 'vegetables',
    subCategory: 'fungi',
    price: 6.49,
    unit: 'kg',
    thumbnail: '/images/product-36.jpeg',
    availableQuantity: 180,
    averageRating: 4.7,
    reviewCount: 120
  },
  {
    slug: 'apple',
    name: 'Spinach',
    shortDescription: 'Nutrient-rich spinach leaves perfect for salads or sautéing.',
    longDescription:
      'Spinach is a nutrient-rich leafy green vegetable prized for its mild flavor and versatility. It is low in calories and rich in vitamins, minerals, and antioxidants, making it a healthy choice for your diet. Our premium spinach leaves are freshly harvested and packed to preserve their freshness and nutritional value. Whether used raw in salads, wilted into pasta dishes, or blended into smoothies, our spinach is sure to add flavor, color, and nutrition to your meals.',
    category: 'vegetables',
    subCategory: 'leafy greens',
    price: 3.99,
    unit: 'bunch',
    thumbnail: '/images/product-37.jpeg',
    availableQuantity: 220,
    averageRating: 4.6,
    reviewCount: 130
  }
]
