import { ROUTE } from '@/types/common';
import { redirect } from 'next/navigation';

export async function GET() {
  redirect(ROUTE.SOUNDS_FISHY.SUB_PAGE.GAME.PATH);
}
