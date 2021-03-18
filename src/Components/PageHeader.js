import React from 'react';

const PageHeader = () => {
    return(
        <div className="item-header-wrapper">
            {/*topic*/}
            <h1>TODO APPLICATION</h1>
            {/*discription*/}
            <p>
                I'm Malith Ranasinghe.This is my react todo application.This application has the facility to add new items,edit item,complet item,delete item and mobile responsive.
                When user click "Click here to complete" button, item display by crossing respective item.Once item is completed it appears in the
                bottom of the item list.
            </p>

        </div>
    )
}

export default PageHeader;