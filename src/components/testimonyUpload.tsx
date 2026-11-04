'use client'
import { saveTestimonials, saveTransitions } from "@/app/actions/action";
import { upload } from "@vercel/blob/client";
import { useState } from "react";
import Navbar from "./navbar";
import { Button, Input, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";

export default function TestimonyUploadPage() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUploading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name') as string;
            const instagram = formData.get('instagram') as string;
            const facebook = formData.get('facebook') as string;
            const youtube = formData.get('youtube') as string;


            // Upload both files concurrently if they exist

            if (!imageFile) {
                toast.error('Image File Is Required');
                return;
            }

            if (!name) {
                toast.error('Name Field Is Required');
                return;
            }

            if(!instagram || !facebook || !youtube){
                toast.error('Any One Social Link Is Required');
                return;
            }

            const uploadResults = imageFile && await upload(imageFile?.name, imageFile, {
                access: 'public',
                handleUploadUrl: '/api/upload',
            })
            const testimonialsResponse = await saveTestimonials(uploadResults.url, name, instagram, facebook, youtube);
            if (!testimonialsResponse.success) {
                console.log('error', testimonialsResponse.error);
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
                    Upload Testimony
                </Typography>

                <form onSubmit={handleSubmit} className=' gap-10 p-3 flex flex-col justify-center items-center max-w-2xl lg:max-w-5xl'>
                    <div className="w-full">
                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Typography >
                            Name:
                        </Typography>
                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Input type="text" name='name' placeholder='Please enter the name here' />
                    </div>

                    <div className="w-full">
                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Typography>
                            Instagram Link
                        </Typography>

                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Input type="text" name='instagram' placeholder='Please enter the instagram link here' />

                    </div>
                    <div className="w-full">
                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Typography>
                            Facebook Link
                        </Typography>

                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Input type="text" name='facebook' placeholder='Please enter the facebook link here' />

                    </div>
                    <div className="w-full">
                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Typography>
                            Youtube Link
                        </Typography>

                        {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                        <Input type="text" name='youtube' placeholder='Please enter the youtube link here' />

                    </div>
                    


                    {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                    <Input
                        type="file"
                        name='before'
                        className='max-w-6xl'
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setImageFile(file);
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