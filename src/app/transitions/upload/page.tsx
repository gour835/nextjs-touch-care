'use client';
import { saveTransitions } from '@/app/actions/action';
import { upload } from '@vercel/blob/client';
import { useState } from 'react';

export default function AvatarUploadPage() {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
      

      // Upload both files concurrently if they exist
      const uploadPromises = [];

      if (beforeFile) {
        uploadPromises.push(
          upload(beforeFile.name, beforeFile, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          })
        );
      }

      if (afterFile) {
        uploadPromises.push(
          upload(afterFile.name, afterFile, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          })
        );
      }

      const uploadResults = await Promise.all(uploadPromises);
      const transitionsResponse = await saveTransitions(name, uploadResults[0].url, uploadResults[1].url);
      if(!transitionsResponse.success){
        console.log('error', transitionsResponse.error);
      }else{
        // uploadResults contains the response blobs for both files
        console.log('Uploaded successfully:', { name, uploadResults });
      }
      
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Please enter the name here' />
        <input
          type="file"
          name='before'
          onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setBeforeFile(file);
        }}
        />
        <input
          type="file"
          name='after'
          onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) setAfterFile(file);
        }}
        />
        <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Submit'}
      </button>
      </form>
      {blobUrl && <img src={blobUrl} />}
    </>
  );
}