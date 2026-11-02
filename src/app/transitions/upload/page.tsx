'use client';
import { upload } from '@vercel/blob/client';
import { useState } from 'react';

export default function AvatarUploadPage() {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  return (
    <>
      <input
        type="file"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          });
          setBlobUrl(newBlob.url);
        }}
      />
      {blobUrl && <img src={blobUrl} />}
    </>
  );
}