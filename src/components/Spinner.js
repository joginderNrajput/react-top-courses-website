import React from "react";
import "./Spinner.css";

function Spinner(){
    return(
        <div>
            <div className="spinner flex flex-col items-center space-y-2">
                <p className="text-bgDark text-lg font-semibold">Loading...</p>
            </div>
        </div>
    )
}

export default Spinner;