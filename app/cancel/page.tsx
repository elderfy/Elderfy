import Link from 'next/link';
import Button from '@/components/Button';

export default function CancelPage() {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-16 shadow-2xl border-2 border-orange-300">
        <div className="text-8xl mb-8">😊</div>
        <h1 className="text-5xl md:text-6xl font-bold text-orange-800 mb-6">
          Payment Cancelled
        </h1>
        <p className="text-3xl text-orange-700 mb-12 leading-relaxed">
          No worries! Your payment was not processed. You can try again anytime you're ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/">
            <Button variant="primary" size="large">
              🏠 Return Home
            </Button>
          </Link>
          <Link href="/elders">
            <Button variant="outline" size="large">
              👥 Browse Elders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
