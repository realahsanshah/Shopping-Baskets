import React from 'react';
import { Card, CardActionArea, CardMedia, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ProductItem } from '../global';
import productState from '../store/state'



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const RenderProduct = (product: ProductItem) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={product.imageUrl} title={product.title} />
            </CardActionArea>
        </Card>
    );
}



const Product = () => {
    const products = useSelector((state: ProductItem[]) => productState);
    return (
        <div>
            {products.map(product=>(RenderProduct(product)))}
        </div>
    );
}

export default Product;