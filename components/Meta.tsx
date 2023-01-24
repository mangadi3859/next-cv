import React from "react";
// import globalMetaCss from "../scss/global.module.scss";
// import cript from "next/link";

export default function Meta() {
    return (
        <React.Fragment>
            <meta name="description" content="CV Komang Adi Wirawan" />
            <meta name="copyright" content="mangadi3859 (2023)" />
            <meta name="author" content="mangadi3859 - I S L A" />
            <meta property="og:image" content="images/logo.png" />
            <meta property="og:title" content="CV - Komang Adi Wirawan" />
            <meta property="og:description" content="CV Komang Adi Wirawan" />
            <link rel="shortcut icon" href="/assets/favico.png" type="image/x-icon" />
        </React.Fragment>
    );
}
