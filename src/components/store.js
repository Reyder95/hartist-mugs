import './css/store.css';

// Components
import StoreItem from './store-item';

function Store(props) {
    return (
        <div className="component-store">
            <div className="row">
                <div className="col-2">
                    <div className="sidebar-content">
                        asd
                    </div>
                </div>

                <div className="col-10 store-grid">
                    <div className="row">
                        <div className="col">
                            <StoreItem 
                            title="Mug Name"
                            description="Here's a random description for some random mug"
                            price="23.99"
                            />
                        </div>

                        <div className="col">
                            <StoreItem 
                            title="Another Mug!"
                            description="Some other description"
                            price="15.99"
                            />
                        </div>
                        
                        <div className="col">
                            <StoreItem 
                            title="A Third Mug"
                            description="Some other description again"
                            price="18.99"
                            />
                        </div>
                        <div className="w-100 p-3"></div>

                        <div className="col">
                            <StoreItem 
                            title="Mug Name"
                            description="Here's a random description for some random mug"
                            price="23.99"
                            />
                        </div>

                        <div className="col">
                            <StoreItem 
                            title="Another Mug!"
                            description="Some other description"
                            price="15.99"
                            />
                        </div>
                        
                        <div className="col">
                            <StoreItem 
                            title="A Third Mug"
                            description="Some other description again"
                            price="18.99"
                            />
                        </div>

                        <div className="w-100 p-3"></div>

                        <div className="col">
                            <StoreItem 
                            title="Mug Name"
                            description="Here's a random description for some random mug"
                            price="23.99"
                            />
                        </div>

                        <div className="col">
                            <StoreItem 
                            title="Another Mug!"
                            description="Some other description"
                            price="15.99"
                            />
                        </div>
                        
                        <div className="col">
                            <StoreItem 
                            title="A Third Mug"
                            description="Some other description again"
                            price="18.99"
                            />
                        </div>
                        <div className="w-100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;