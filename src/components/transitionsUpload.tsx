'use client'
import { saveTransitions } from "@/app/actions/action";
import { upload } from "@vercel/blob/client";
import { useState } from "react";
import Navbar from "./navbar";
import { Button, Input, Typography } from "@material-tailwind/react";

export default function TransitionsUploadPage() {
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
      const transitionsResponse = await saveTransitions(uploadResults[0].url, uploadResults[1].url, name);
      if (!transitionsResponse.success) {
        console.log('error', transitionsResponse.error);
      } else {
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
      <Navbar />

      <div className="w-full h-full flex flex-col justify-center items-center  mt-20">
         {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
      <Typography variant='h4' className='text-center'>
          Upload Transformations
      </Typography>

        <form onSubmit={handleSubmit} className='max-w-7xl gap-10 p-3 flex flex-col justify-center items-center max-w-2xl lg:max-w-5xl'>
          {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
          <Input type="text" name='name' placeholder='Please enter the name here' />
          {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
          <Input
            type="file"
            name='before'
            className='max-w-6xl'
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setBeforeFile(file);
            }}
          />
          {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
          <Input
            type="file"
            name='after'
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setAfterFile(file);
            }}
          />
          {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
          <Button type="submit" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Submit'}
          </Button>
        </form>
      </div>
    </>
  );
}