import React, { useEffect } from 'react';

function Certifications() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="py-24 px-8 md:px-32 text-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="text-4xl font-bold font-txt mb-2 text-white">Certifications</div>
      <div className="font-txt text-center mb-12 text-slate-200">
        Verified credentials in enterprise technologies
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="7e537896-e278-4906-8e29-b096161af9ad"
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="420a632f-0985-4008-a121-98b5f2b413e6"
          data-share-badge-host="https://www.credly.com"
        ></div>
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="d766683a-10f1-4fa6-967f-c5b44777b700"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </div>
  );
}

export default Certifications;
