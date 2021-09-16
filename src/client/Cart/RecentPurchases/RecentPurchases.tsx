import React from "react"
import { useQuery } from 'react-query';
import { RecentPurchasesType} from '../../Type'
import { getPurchases } from '../../Actions/ApiAction'
import { Typography } from '@material-ui/core';



const RecentPurchases= () => {
  const {data, isLoading, error } = useQuery<RecentPurchasesType[]>(
    'purchases',
    getPurchases
  )

  // Todo: restructure 'data'

  error && <div>Cannot load purchases data...</div>

  return (
    <div>
          {isLoading ? (
            <Typography variant="h4">Loading ...</Typography>
            ) : (
            <p>
              {JSON.stringify(data)}
            </p>
          )}
    </div>
  )
}

export default RecentPurchases;