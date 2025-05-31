using Microsoft.AspNetCore.Mvc;
using MyStoreAPI.Interfaces;
using MyStoreAPI.Models.Products;

namespace MyStoreAPI.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet("get-categories-list")]
        public async Task<ActionResult<List<CategoryModel>>> GetAllCategories()
        {
            var categories = await _productsService.GetCategoriesAsync();
            return Ok(categories);
        }

        [HttpGet("get-products-list")]
        public async Task<ActionResult<List<ProductModel>>> GetAllProducts()
        {
            var products = await _productsService.GetProductsAsync();
            return Ok(products);
        }
    }
}
