function Filter() {

    
    return (
        <div className="component-filter">
            <p>
                <strong>Filters</strong>
            </p>

            <form>
                <div className="mb-3 mt-3 form-group">
                    <input type="text" className="form-control" id="searchBar" aria-describedby="searching" placeholder="Search" />
                </div>

                <div className="mb-3 form-group">
                    <label for="tag-select" className="form-label"><strong>Categories</strong></label>

                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" value="cute" id="cute" />
                        <label className="form-check-label" for="cute">
                            Cute
                        </label>
                    </div>

                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" value="fun" id="fun" />
                        <label className="form-check-label" for="fun">
                            Fun
                        </label>
                    </div>

                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" value="birthday" id="birthday" />
                        <label className="form-check-label" for="birthday">
                            Birthday
                        </label>
                    </div>
                    
                </div>

                <div className="mb-3 form-group">
                    <p><strong>Price Range</strong></p>

                    <div className="input-container">
                        <span className="dollar">$</span>
                        <input className="form-control mt-2" id="lowprice" aria-describedby="lowest price" placeholder="Lowest Price"/>
                    </div>
                    
                    <div className="input-container">
                        <span className="dollar">$</span>
                        <input className="form-control mt-3" id="highprice" aria-describedby="highest price" placeholder="Highest Price"/>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Filter;