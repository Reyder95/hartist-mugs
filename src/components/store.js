import React, { useState } from 'react';

import './css/store.css';

// Components
import StoreItem from './store-item';
import Filter from './filter';

function displaySomething() {
    return (
        <div className="w-100 p-3"></div>
    )
}

function Store(props) {
    const [test, setTest] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <div className="component-store">
            <div className="row">
                <div className="col-2">
                    <div className="sidebar-content">
                        <Filter />
                    </div>
                </div>

                <div className="col-10 store-grid">
                    <div className="row">
                        
                        {
                            test.map((element, index) => {
                                
                                return (
                                    <div className="col-4 pt-3">
                                        <StoreItem 
                                        title={`Mug Title ${index}`}
                                        description="Here's a random description for some random mug"
                                        price="23.99"
                                        />
                                    </div>
                                )
                                    
                                    
                            })
                        }

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;