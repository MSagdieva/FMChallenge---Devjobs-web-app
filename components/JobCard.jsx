import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function JobCard(info) {
        const logoAddress = info.info.logo.slice(1);
      
    return (<Link href={`/detail/${encodeURIComponent(info.info.id)}`}>
      <Card className={"card"} sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar variant="square" style={{backgroundColor: info.info.logoBackground}} src={logoAddress}>
        </Avatar>
      }
      title={info.info.company}
      subheader={info.info.position}
    />
    <CardContent>
      <Typography variant="body2">
        {info.info.postedAt}
      </Typography>
    </CardContent>
  </Card>
  </Link>);
  }

