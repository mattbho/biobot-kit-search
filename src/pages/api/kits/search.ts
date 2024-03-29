import kitData from "@/data/KITS_SHIPPING_DATA.json";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Kit } from "@/types/kit";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Kit[]>
) {
  const { q } = req.query;
  const searchTerm = q as string;

  // As the data set scales, we'll want to leverage a database, along with a search engine like Algolia
  const filteredKitData: Kit[] =
    searchTerm ?
      kitData.filter((kit: Kit) => kit.label_id.indexOf(searchTerm) > -1) : [];

  return res.status(200).json(filteredKitData);
}
