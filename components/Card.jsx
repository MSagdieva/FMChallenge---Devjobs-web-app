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

export default function Card1(info) {
        const [expanded, setExpanded] = React.useState(false);
        const logoAddress = info.info.logo.slice(1);
        const handleExpandClick = () => {
          setExpanded(!expanded);
        };
      
    return (<Link href={`/detail/${encodeURIComponent(info.info.id)}`}>
      <Card className={"card"} sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar variant="square" style={{backgroundColor: info.info.logoBackground}} src={logoAddress}>
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
        </IconButton>
      }
      title={info.info.company}
      subheader={info.info.position}
    />
    <CardContent>
      <Typography variant="body2">
        {info.info.postedAt}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        
      </IconButton>
      <IconButton aria-label="share">
        
      </IconButton>

    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph></Typography>
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography>
        <Typography paragraph>
        </Typography>
        <Typography>
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  </Link>);
  }

