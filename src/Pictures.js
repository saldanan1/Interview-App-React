import React from 'react';
import './Pictures.css';
import { makeStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { homepagedata } from './HomePageData';

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
    height: 1000,
    float: 'right'
  },
  text:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    paddingLeft: 100
  },
  title:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    position: "absolute",
    zIndex: 1
  },
  textname:{

  },
  img:{
    height: 1000,
  }
}));
export default function Pictures(props) {
  const classes = useStyles(); 
    return(
      <div className={classes.root}>
        <GridList cellHeight={500}className={classes.gridList} cols={1}>
          {props.link.map((tile) => (
            <GridListTile key={tile} cols={tile.cols || 1}>
                  <img src={tile} alt={tile}/>
            </GridListTile>
          ))}
          <div className={classes.text}>{props.description}</div>
        </GridList>
        
      </div>
    )
}

