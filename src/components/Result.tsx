import { FC } from 'react';
import { Kit } from '@/types/kit';

interface ResultProps {
  readonly kit: Kit
}

export const Result: FC<ResultProps> = ({ kit }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto sm:-mx-6">
        <div className="inline-block min-w-full py-2 sm:px-6">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-white">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th className="px-6 py-4">Label Id</th>
                  <th className="px-6 py-4">Tracking Number</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{kit.label_id}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{kit.shipping_tracking_code}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
