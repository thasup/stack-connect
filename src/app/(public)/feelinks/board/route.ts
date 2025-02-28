import { ROUTE } from '@/types/common';
import { redirect } from 'next/navigation';

export async function GET() {
  redirect(ROUTE.FEELINKS.SUB_PAGE.GAME.PATH);
}
