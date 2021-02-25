import { propTypes } from "react-bootstrap/esm/Image";

function StoreItem(props) {
    return (
        <div className="component-storeitem">
            <div className="image-left">
                <img src="https://www.placehold.it/128" width="150"/>
            </div>

            <div className="info-right">
                <p>
                    <strong>{props.title}</strong>
                </p>

                <p>
                    <strong className="pricing">${props.price}</strong>
                </p>
                
                <button className="btn btn-primary"><strong>Purchase</strong></button>

            </div>
            
        </div>
    )
}

export default StoreItem;