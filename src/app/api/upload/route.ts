import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

interface UploadTokenPayload {
  userEmail: string;
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

        const payload: UploadTokenPayload = {
          userEmail: session.user?.email ?? '',
        };

        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
          addRandomSuffix: true,
          access: 'private',
          tokenPayload: JSON.stringify(payload),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const { userEmail } = JSON.parse(tokenPayload!) as UploadTokenPayload;
        
        console.log(`User ${userEmail} uploaded file to ${blob.url}`);
        
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