import React, { FC } from "react"
import { useQuery } from 'react-query';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { RecentPurchasesType} from '../../Type'
import { getPurchases } from '../../Actions/ApiAction'
import { Drawer, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullList: {
      width: '600px',
      marginTop: '20px',
    },
    large: {
      width: '160px',
      height: '60px',
    },
    title: {
      width: '600px',
    },
  })
);

const RecentPurchases= () => {

  const {data, isLoading, error } = useQuery<any[]>(
    'purchases',
    getPurchases
  )
  console.log(data)
  return (
    <>
       <div>
       {isLoading ? (
            <Typography variant="h4">Loading ...</Typography>
          ) : (
            <div>
              {data?.map((purchase: RecentPurchasesType[]) => (
                <div>{purchase}</div>
              ))}
            </div>
          )}
      </div>
    </>
  )
}

export default RecentPurchases;