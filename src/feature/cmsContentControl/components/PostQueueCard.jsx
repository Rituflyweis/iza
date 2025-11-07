const STATUS_STYLES = {
  Completed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-600',
};

const posts = [
  { title: 'Radiant Glow Serum', platform: 'Instagram', status: 'Completed' },
  { title: 'Velvet Touch Lipstick', platform: 'TikTok', status: 'Pending' },
  { title: 'Aqua Hydration Mask', platform: 'Instagram', status: 'Cancelled' },
  { title: 'Silk Smooth Foundation', platform: 'TikTok', status: 'Completed' },
  { title: 'Luminous Eyeshadow Palette', platform: 'Instagram', status: 'Completed' },
  { title: 'Silk Smooth Foundation', platform: 'TikTok', status: 'Completed' },
  { title: 'Silk Smooth Foundation', platform: 'TikTok', status: 'Completed' },
];

const PostQueueCard = ({ className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Post queue</h3>
        <span className="text-xs uppercase tracking-wider text-gray-400">Social posts</span>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={`${post.title}-${index}`} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
              {post.title
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 2)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 leading-tight">{post.title}</p>
              <p className="text-xs text-gray-500">{post.platform}</p>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                STATUS_STYLES[post.status] || 'bg-gray-100 text-gray-600'
              }`}
            >
              {post.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostQueueCard;

