import React from 'react';
import './HomePage.css';
import { makeStyles } from '@material-ui/core/styles';
import { homepagedata } from './HomePageData'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingBottom: 100,
    paddingTop: 200,
    paddingLeft: 50
  },
  gridList: {
    width: 600,
    height: 750,
    float: "right"
  },
  text:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    fontWeight: 'bold'
  }
}));
export default function HomePage(props) {
  const classes = useStyles(); 
    return(
      <div className={classes.root}>
        <GridList cellHeight={300}className={classes.gridList} cols={1}>
            <GridListTile key={"text-about-me"} cols={1 || 1}>
            {homepagedata.map((tile) => (
                <div className={classes.text}>{tile.title}</div>
            ))}
            </GridListTile>
        </GridList>
      </div>
    )
}

