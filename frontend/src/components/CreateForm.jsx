import React from "react";

function CreateForm(props) {
    return (
        <div>
            <form onSubmit={props.createHandler}>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <input name="title" placeholder="Enter title here" value={props.currentItemTitle} onChange={props.updateItemTitle} type="text" />
                    </div>
                    <div className="col-2">
                        <input name="content" placeholder="Enter content here" value={props.currentItemContent} onChange={props.updateItemContent} type="text" />
                    </div>
                    <div className="col-7">
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateForm;