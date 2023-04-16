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
    &:{
      border-radius:6px;
    }
      &:hover{
        cursor: pointer;
      }
      `;
    const CustomizedCardContent = styled(CardContent)`
      &{
        text-align: left;
        padding: 0 30px 16px 30px;
      }
      & .MuiTypography-body1{
        padding: 0 0 16px 0;
      }
      `;
    return (<Link href={`/detail/${encodeURIComponent(info.info.id)}`}>
      <CustomizedCard className={"card"} sx={{ maxWidth: 345 }}>
            <Avatar variant="square" style={{backgroundColor: info.info.logoBackground}} src={logoAddress}>
            </Avatar>
        <CustomizedCardContent>
        <Typography variant="body1" className="grey">
            {info.info.postedAt} <span className="dot">{"\u25CF"}</span> {info.info.contract}
          </Typography><Typography className="position" variant="h8">{info.info.position}</Typography>
        <Typography variant="body1" className="grey">{info.info.company}</Typography>
        <Typography variant="body2" className="cardLocation">{info.info.location}</Typography>
        </CustomizedCardContent>
      </CustomizedCard>
  </Link>);
  }

