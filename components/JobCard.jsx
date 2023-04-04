import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

export default function JobCard(info) {
    const logoAddress = info.info.logo.slice(1);
    const CustomizedCard = styled(Card)`
      &:hover{
        cursor: pointer;
      }
      `;
    return (<Link href={`/detail/${encodeURIComponent(info.info.id)}`}>
      <CustomizedCard className={"card"} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar variant="square" style={{backgroundColor: info.info.logoBackground}} src={logoAddress}>
            </Avatar>
          }
        />
        <CardContent>
        <Typography variant="body2">
            {info.info.postedAt} {"\u25CF"} {info.info.contract}
          </Typography><Typography variant="h8">{info.info.position}</Typography>
        <Typography variant="body2">{info.info.company}</Typography>
        <Typography variant="body2">{info.info.location}</Typography>
        </CardContent>
      </CustomizedCard>
  </Link>);
  }

