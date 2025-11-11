import InfiniteMenu from '../Components/InfiniteMenu'

export default function InfiniteMenuPage() {
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: '/gallery',
      title: 'Dome Gallery',
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: '/model',
      title: 'Model Viewer',
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: '/targetcursor',
      title: 'Target Cursor',
    }
  ];

  return (
    <div className="relative h-screen w-screen bg-black  text-white overflow-hidden">
      <div className="absolute inset-0">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}