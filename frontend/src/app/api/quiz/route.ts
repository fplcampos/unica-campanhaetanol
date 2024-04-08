import quizGenerateResult from '@/utils/quizGenerateResult';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const res = await request.json();
    
    const response:any = await quizGenerateResult(res);

    return NextResponse.json(response);
  
}