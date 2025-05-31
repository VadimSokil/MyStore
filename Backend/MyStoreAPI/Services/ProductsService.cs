using MyStoreAPI.Interfaces;
using MyStoreAPI.Models.Products;
using MySql.Data.MySqlClient;
using System.Data;

namespace MyStoreAPI.Services
{
    public class ProductsService : IProductsService
    {
        private readonly string _connectionString;
        private readonly Dictionary<string, string> _sqlQueries;

        public ProductsService(string connectionString, Dictionary<string, string> sqlQueries)
        {
            _connectionString = connectionString;
            _sqlQueries = sqlQueries;
        }
        public async Task<List<CategoryModel>> GetCategoriesAsync()
        {
            var categories = new List<CategoryModel>();
            using (var connection = new MySqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                using (var command = new MySqlCommand(_sqlQueries["GetAllCategories"], connection))
                {
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            categories.Add(new CategoryModel
                            {
                                CategoryId = reader.GetInt32("CategoryId"),
                                CategoryName = reader.GetString("CategoryName")
                            });
                        }
                    }
                }
            }
            return categories;
        }

        public async Task<List<ProductModel>> GetProductsAsync()
        {
            var products = new List<ProductModel>();
            using (var connection = new MySqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                using (var command = new MySqlCommand(_sqlQueries["GetAllProducts"], connection))
                {
                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        while (await reader.ReadAsync())
                        {
                            products.Add(new ProductModel
                            {
                                CategoryId = reader.GetInt32("CategoryId"),
                                ProductId = reader.GetInt32("ProductId"),
                                ProductImageUrl = reader.GetString("ProductImageUrl"),
                                ProductName = reader.GetString("ProductName"),
                                ProductPrice = reader.GetInt32("ProductPrice"),
                                ProductAmount = reader.GetInt32("ProductAmount")
                            });
                        }
                    }
                }    
            }
            return products;
        }
    }
}
