import React from 'react'
interface Props {
    open: boolean,
    onClose: any
}

function Popup(prop: Props) {
    if (!prop.open) return null;
    return (
        <div>
            <div className="overlay">
                <div className="modalContainer">
                    <div className="modalRight">
                        <p onClick={prop.onClose} className="closeBtn">X</p>
                        <div className="content">
                            <h1>Let me in</h1>
                        </div>
                        <div className="container_items">
                            <a href="/output">
                                <button className="btnPrimary">
                                    YES
                                </button>
                            </a>
                            <a href="/">
                            <button className="btnOutline">
                                NO
                            </button>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup