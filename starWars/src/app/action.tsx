'use server';
import { cookies } from 'next/headers';
async function createCookie(search: string) {
  cookies().set('search', search);
}

async function getCookie() {
  const search = await cookies().get('search');
  return search;
}

export { createCookie, getCookie };
