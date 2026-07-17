"use server";

import fs from 'fs/promises';
import path from 'path';

const likesFilePath = path.join(process.cwd(), 'likes.json');

async function getLikesData() {
  try {
    const fileContents = await fs.readFile(likesFilePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    // If file doesn't exist or is empty, return an empty object
    return {};
  }
}

export async function getLikes(title: string) {
  const data = await getLikesData();
  return data[title] || 0;
}

export async function incrementLike(title: string) {
  const data = await getLikesData();
  data[title] = (data[title] || 0) + 1;
  await fs.writeFile(likesFilePath, JSON.stringify(data, null, 2));
  return data[title];
}
