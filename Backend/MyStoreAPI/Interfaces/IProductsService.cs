using MyStoreAPI.Models.Products;

namespace MyStoreAPI.Interfaces
{
    public interface IProductsService
    {
        public Task<List<CategoryModel>> GetCategoriesAsync();
        public Task<List<ProductModel>> GetProductsAsync();
    }
}
