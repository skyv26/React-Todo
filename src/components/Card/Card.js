import React, { Fragment } from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    const convertToRGB = (hexCode) => {
        let aRgbHex = hexCode.match(/.{1,2}/g);
        let aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return aRgb;
    };

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const randomColorLight = convertToRGB(randomColor);
    randomColorLight.push(0.2);

    const eventHandler = (e) => {
        if (e.target.tagName !== "BUTTON"){
            return e.target.className.split(' ')[1].split('-')[1] === 'trash' ? props.updateClick(props.cardID) : props.updateClick(props.cardID, "update");
        }
    }

    return (
        <Fragment>
            <div className={`card ${classes.Card}`} style={{ borderColor: `#${randomColor}`, boxShadow: `0px 6px 8px 0 rgba(${randomColorLight[0]},${randomColorLight[1]},${randomColorLight[2]},${randomColorLight[3]})` }} onClick={eventHandler}>
                <div className={`card-body ${classes.CardBody}`}>
                    <h5 className={`card-title ${classes.CardTitle} rounded`} style={{ backgroundColor: `rgba(${randomColorLight[0]},${randomColorLight[1]},${randomColorLight[2]},${randomColorLight[3]})` }}>{props.cardTitle}</h5>
                    <h6 className={`card-subtitle mb-2 text-muted ${classes.CardDate}`} style={{ marginLeft: "0.2rem" }}>{props.cardCreation}</h6>
                    <p className={`card-text ${classes.CardText}`} style={{ margin: "1rem 0.2rem 3rem 0" }}>{props.cardDesc}</p>
                    <div className={classes.TodoUtility}>
                        <button className={classes.UtilityBtn} data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="far fa-edit" style={{ color: `lightgray`, opacity: "0.7" }}></i></button>
                        <button className={classes.UtilityBtn} ><i className="far fa-trash-alt" style={{ color: `salmon`, opacity: "0.7" }}></i></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;