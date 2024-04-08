import GasTankCalculate from '@/utils/gasTankCalculate';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const res = await request.json();
 
    const response:any = await GasTankCalculate(res);

    return NextResponse.json(response[0]);
  
}