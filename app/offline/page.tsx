export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warmBeige-50 via-sage-50 to-warmBeige-100 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="w-24 h-24 mx-auto bg-sage-600 rounded-full flex items-center justify-center shadow-soft-lg">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
          </svg>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-sage-900">You're Offline</h1>
          <p className="text-lg text-sage-600 leading-relaxed">
            It looks like you've lost your internet connection. Some content may not be available right now.
          </p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="bg-sage-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-sage-700 shadow-soft hover:shadow-soft-md transition-all duration-200"
        >
          Try Again
        </button>

        <p className="text-sm text-sage-500">
          Previously viewed pages may still be available
        </p>
      </div>
    </div>
  );
}
