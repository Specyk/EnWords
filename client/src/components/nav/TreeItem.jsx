import React from 'react'
// TODO zaimplementować przycisk, po ktorego kliknieciu rozwija sie drzewo
export default function TreeItem(props) {
    return (
        <div className="TreeItem">
            <div className="btn">
                {props.children}
            </div>
            <div className="hiddenTree">
                {props.items.map((i, key) => <li key={key} onClick={props.editViewHandler}>{i}</li>)}
            </div>
        </div>
    )
}
