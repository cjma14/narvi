import { useState, useEffect } from 'react';

/**
 * Product Interface
 */
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'available' | 'out-of-stock' | 'discontinued';
  createdAt: string;
}

/**
 * ProductsList Component
 * Displays and manages the product catalog
 */
export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data fetch
    setTimeout(() => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Hot Oil Truck',
          category: 'Equipment',
          price: 150000,
          stock: 3,
          status: 'available',
          createdAt: '2024-01-10',
        },
        {
          id: 2,
          name: 'Coiled Tubing Trailer',
          category: 'Equipment',
          price: 200000,
          stock: 0,
          status: 'out-of-stock',
          createdAt: '2024-02-15',
        },
        {
          id: 3,
          name: 'Pressure Control Valve',
          category: 'Parts',
          price: 5000,
          stock: 15,
          status: 'available',
          createdAt: '2024-03-20',
        },
        {
          id: 4,
          name: 'Triplex Pump',
          category: 'Equipment',
          price: 75000,
          stock: 5,
          status: 'available',
          createdAt: '2024-03-25',
        },
      ];
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(e.target.value);
  };

  const handleDelete = (productId: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
      console.log('Product deleted:', productId);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Management</h1>
        <p className="text-gray-600">Manage your product catalog</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="w-full md:w-48">
          <select
            value={filterCategory}
            onChange={handleCategoryFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Equipment">Equipment</option>
            <option value="Parts">Parts</option>
            <option value="Services">Services</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-8">
            No products found
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : product.status === 'out-of-stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium text-gray-900">{product.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(product.price)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Stock:</span>
                    <span className="font-medium text-gray-900">{product.stock} units</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Created:</span>
                    <span className="font-medium text-gray-900">{product.createdAt}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => console.log('Edit product:', product.id)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
