import { NextResponse } from 'next/server';
import { getLikes, incrementLike } from '../../actions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title');
  
  if (!title) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }

  try {
    const likes = await getLikes(title);
    return NextResponse.json({ likes });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch likes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const likes = await incrementLike(title);
    return NextResponse.json({ likes });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update likes' }, { status: 500 });
  }
}