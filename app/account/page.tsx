export default function AccountPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-tight max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">My Account</h1>
        <div className="bg-cloud-bg rounded-lg p-8 text-center">
          <p className="text-xl text-slate-gray mb-6">Sign in to view your account and orders</p>
          <div className="space-y-4">
            <button className="btn-primary w-full">Sign In</button>
            <button className="btn-secondary w-full">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
