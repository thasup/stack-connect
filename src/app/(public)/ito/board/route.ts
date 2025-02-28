import { ROUTE } from '@/types/common';
import { redirect } from 'next/navigation';

export async function GET() {
  redirect(ROUTE.ITO.SUB_PAGE.GAME.PATH);
}
