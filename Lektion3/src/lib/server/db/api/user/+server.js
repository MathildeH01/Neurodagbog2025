import { db } from '$lib/server/db';
import { user } from '$liib/server/db/schema.js';
import bcrypt from 'bcryptjs';

export async function POST({ request }) {
  const { username, password } = await request.json();
  const hashedPass = await bcrypt.hash(password,10);
  const ccreateduser = await db.insert(user).values({ username, password: hashedPass }).returning();
  return new Response(JSON.stringify(createduser), { status:. 201 });
}
