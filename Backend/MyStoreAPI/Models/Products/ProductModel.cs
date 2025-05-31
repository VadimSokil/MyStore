namespace MyStoreAPI.Models.Products
{
    public class ProductModel
    {
        public int CategoryId { get; set; }
        public int ProductId { get; set; }
        public string ProductImageUrl { get; set; }
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public int ProductAmount { get; set; }
    }
}
