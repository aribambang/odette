import Image from 'next/image';

const GalleryTimeline = () => {
  const contents = [
    // {
    //     img: '/images/gallery-1.jpeg',
    //     title: 'Awal Cerita',
    //     date: 'Yogyakarta, 2014-2017',
    //     desc: 'Awalnya kami saling mengenal karena memang kami berada di jurusan dan angkatan yang sama. Kebetulan juga kami tergabung ke dalam satu organisasi yang sama, jadi makin sering berinteraksi deh.',
    // },
  ];

  return (
    <div className="flex flex-col mx-auto py-2 text-left md:grid grid-cols-9">
      {contents.map((content, index) => {
        const { img, title, date, desc } = content;
        const firstBarTranslate = index === 0 ? 'translate-y-full' : '';
        const barHeight =
          index === 0 || index === contents.length - 1 ? 'h-1/2' : 'h-full';
        const isOdd = index % 2 === 0;
        const flexLeft = isOdd ? 'flex flex-row-reverse' : 'flex';
        const colLeft = isOdd
          ? 'col-start-1 col-end-5 ml-auto'
          : 'col-start-6 col-end-10 mr-auto';

        return (
          <div key={index} className={`${flexLeft} md:contents`}>
            {!isOdd && (
              <div className="col-start-5 col-end-6 mr-5 md:mx-auto relative">
                <div
                  className={`${barHeight} ${firstBarTranslate} w-4 flex items-center justify-center`}
                >
                  <div className="h-full w-1 bg-theme-orange pointer-events-none"></div>
                </div>
                <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-theme-orange"></div>
              </div>
            )}
            <div
              className={`bg-white p-4 my-4 border-2 border-theme-orange rounded-xl shadow-md ${colLeft}`}
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg border border-gray-00 overflow-hidden mb-2">
                <Image src={img} alt={title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="font-title font-black text-gray-700 text-xl">
                {title}
              </h3>
              <p className="font-body font-semi-bold text-gray-400 text-xs mb-1">
                {date}
              </p>
              <p className="font-body font-normal text-gray-700 text-sm">
                {desc}
              </p>
            </div>
            {isOdd && (
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-5">
                <div
                  className={`${barHeight} ${firstBarTranslate} w-4 flex items-center justify-center`}
                >
                  <div className="h-full w-1 bg-theme-orange pointer-events-none"></div>
                </div>
                <div className="w-4 h-4 absolute top-1/2 -mt-2 rounded-full bg-theme-orange"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GalleryTimeline;
