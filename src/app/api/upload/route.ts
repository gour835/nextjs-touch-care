import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

interface UploadTokenPayload {
  userId: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  
  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        const session = await auth();
        
        if (!session || !session.user) {
          throw new Error('Not authenticated');
        }


        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
          addRandomSuffix: true,
          
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        
        console.log(`User  uploaded file to ${blob.url}`);
        
        // TODO: Update the database with blob.url and userId
        
      },
    });
    
    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}