import { propTypes } from "react-bootstrap/esm/Image";

function StoreItem(props) {
    return (
        <div className="component-storeitem">
            <div className="image-left">
                <img src="https://www.placehold.it/128"/>
            </div>

            <div className="info-right">
                <p>
                    <strong>{props.title}</strong>
                </p>
                
                <p className="description">
                    {props.description}
                </p>

                <p>
                    <strong className="pricing">${props.price}</strong>
                </p>
                

            </div>
            
        </div>
    )
}

export default StoreItem;