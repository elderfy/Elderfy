import Link from 'next/link';
import Button from '@/components/Button';

export default function SuccessPage() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-16 shadow-2xl border-2 border-emerald-400">
        <div className="text-8xl mb-8 animate-bounce">🎉</div>
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 mb-6">
          Thank You!
        </h1>
        <p className="text-3xl text-emerald-700 mb-4 leading-relaxed">
          Your payment was successful!
        </p>
        <p className="text-2xl text-emerald-600 mb-12">
          Your support means the world to our elders and helps them continue sharing their wisdom with the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/">
            <Button variant="primary" size="large">
              🏠 Return Home
            </Button>
          </Link>
          <Link href="/elders">
            <Button variant="outline" size="large">
              👥 Discover More Elders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
