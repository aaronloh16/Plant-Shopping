import { ProductCard } from '../components/ProductCard';

export function Product({ cart, setCart }) {
	const products = [
		{
			category: 'Air Purifying Plants',
			plants: [
				{
					name: 'Snake Plant',
					image:
						'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
					description: 'Produces oxygen at night, improving air quality.',
					cost: '$15',
				},
				{
					name: 'Spider Plant',
					image:
						'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
					description: 'Filters formaldehyde and xylene from the air.',
					cost: '$12',
				},
				{
					name: 'Peace Lily',
					image:
						'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
					description: 'Removes mold spores and purifies the air.',
					cost: '$18',
				},
				{
					name: 'Boston Fern',
					image:
						'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
					description: 'Adds humidity to the air and removes toxins.',
					cost: '$20',
				},
				{
					name: 'Rubber Plant',
					image:
						'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
					description: 'Easy to care for and effective at removing toxins.',
					cost: '$17',
				},
				{
					name: 'Aloe Vera',
					image:
						'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
					description: 'Purifies the air and has healing properties for skin.',
					cost: '$14',
				},
			],
		},
		{
			category: 'Aromatic Fragrant Plants',
			plants: [
				{
					name: 'Lavender',
					image:
						'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					description: 'Calming scent, used in aromatherapy.',
					cost: '$20',
				},
				{
					name: 'Jasmine',
					image:
						'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
					description: 'Sweet fragrance, promotes relaxation.',
					cost: '$18',
				},
				{
					name: 'Rosemary',
					image:
						'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
					description: 'Invigorating scent, often used in cooking.',
					cost: '$15',
				},
				{
					name: 'Mint',
					image:
						'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
					description: 'Refreshing aroma, used in teas and cooking.',
					cost: '$12',
				},
				{
					name: 'Lemon Balm',
					image:
						'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
					description: 'Citrusy scent, relieves stress and promotes sleep.',
					cost: '$14',
				},
				{
					name: 'Hyacinth',
					image:
						'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
					description:
						'Hyacinth is a beautiful flowering plant known for its fragrant.',
					cost: '$22',
				},
			],
		},
	];

	return (
		<div className="product-container">
			{products.map((category, categoryIndex) => (
				<div key={categoryIndex} className="category-section">
					<h3>{category.category}</h3>
					<div className="card-grid">
						{category.plants.map((plant, plantIndex) => (
							<ProductCard
								key={plantIndex}
								product={{
									title: plant.name,
									desc: plant.description,
									price: plant.cost,
									image: plant.image,
								}}
								cart={cart}
								setCart={setCart}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
