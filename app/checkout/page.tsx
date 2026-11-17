export default function CheckoutPage() {
  return (
    <div className="min-h-screen py-12 bg-cloud-bg">
      <div className="container-tight max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-xl text-slate-gray mb-6">Your cart is empty</p>
          <a href="/shop" className="btn-primary inline-block">
            Browse Products
          </a>
        </div>
      </div>
    </div>
  );
}
