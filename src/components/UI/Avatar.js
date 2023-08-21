import classes from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={classes.avatar}>
            <img src={props.imageUrl} alt={props.imageDesc}/>
        </div>
    );
};

export default Avatar;