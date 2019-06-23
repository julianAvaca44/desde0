import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


class CardCmp extends Component {    
    render(){
        return (
            <Card className={this.props.classes.card}>
                <CardActionArea className={this.props.classes.cardActionArea}>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={this.props.image}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    {this.props.labelButton}
                    </Button>
                </CardActions>
            </Card>
        )
    }
    
}

CardCmp.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    labelButton: PropTypes.string.isRequired
}

export default CardCmp;