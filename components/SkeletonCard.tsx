export function ElderCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-warmOrange-200 animate-pulse">
      <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300" />
      <div className="p-6 space-y-4">
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4" />
        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6" />
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="h-8 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
          <div className="h-8 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
          <div className="h-8 w-28 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
        </div>
        <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl w-full" />
      </div>
    </div>
  );
}

export function ContentCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-warmPurple-200 animate-pulse">
      <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-300" />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
          <div className="h-6 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
        </div>
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-4/5" />
        </div>
        <div className="flex justify-between items-center pt-4">
          <div className="h-6 w-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
          <div className="h-12 w-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function ProfileHeaderSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-warmOrange-200 animate-pulse">
      <div className="md:flex">
        <div className="md:w-1/3 h-96 md:h-auto min-h-[400px] bg-gradient-to-br from-gray-200 to-gray-300" />
        <div className="md:w-2/3 p-8 md:p-12 space-y-6">
          <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-2/3" />
          <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2" />
          <div className="space-y-3">
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded" />
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6" />
          </div>
          <div className="flex gap-3 flex-wrap">
            <div className="h-10 w-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
            <div className="h-10 w-28 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
            <div className="h-10 w-36 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full" />
          </div>
          <div className="flex gap-4">
            <div className="h-14 flex-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl" />
            <div className="h-14 flex-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
