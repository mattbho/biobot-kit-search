import * as kitData from '@/data/KITS_SHIPPING_DATA.json';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Kit } from '@/types/kit';

/*
  * */
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Kit[]>
) {
  return res.status(200).json(kitData);
}
