.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    max-width: auto;
    background-color: white;
}

@keyframes backgroundColor {
    0% {background-color: rgb(214, 255, 254);}
    25% {background-color: rgb(86, 148, 224);}
    50% {background-color: rgb(28, 50, 129);}
    100% {background-color: rgb(214, 255, 254);}
}

.product:hover {
    transform: scale(1.05, 1.05);
    transition-duration: 1s;
    animation-timing-function: linear;
    animation-name: backgroundColor;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    position: relative;
}

.product > img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}

.product-info {
    width: 100%;
    height: 100px;
    margin-bottom: 15px;
}

.product-rating {
    display: flex;
}

.product-price {
    margin-top: 5px;
}

.product > button {
    height: 40px;
    width: auto;
    padding-left: 50px;
    padding-right: 50px;
    background-color: rgb(215, 215, 48);
    border: 1px solid;
    margin-top: 10px;
    border-color: rgb(255, 255, 103) rgb(224, 224, 45) rgb(176, 176, 26);
    color: #111;
}

@keyframes buttonBackground {
    0% {background-color: rgb(255, 255, 255);}
    25% {background-color: rgb(255, 255, 127);}
    50% {background-color: rgb(255, 255, 0);}
    100% {background-color: rgb(255, 255, 255);}
}

.add-to-cart-btn:hover {
    animation-name: buttonBackground;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1s;
}

@media screen and (max-width: 767px) {
    .product {
        justify-content: flex-start;
    }

    img {
        margin-bottom: 5px;
    }

    .product-info {
        margin-top: 0;
        height: 80px;
        margin-bottom: 3px;
    }
    
    .product-price {
        margin-top: 5px;
    }

    button {
        height: 24px;
        font-size: 11px;
    }
}
