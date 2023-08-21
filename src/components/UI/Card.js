import classes from  './Card.module.css';

const Card = (props) => {
    let cardClasses = props.className ? `${classes.card} ${props.className}`: classes.card;
    return <div className={cardClasses}>{props.children}</div>
};

export default Card;