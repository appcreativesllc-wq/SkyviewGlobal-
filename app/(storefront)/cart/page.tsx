export default function CartPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-tight">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg p-12 text-center">
          <p className="text-xl text-slate-gray mb-6">Your cart is currently empty</p>
          <a href="/shop" className="btn-primary inline-block">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}
