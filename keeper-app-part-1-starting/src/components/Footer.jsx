

import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>&copy; Copyright {year} ComdinG Billa</p>
        </footer>
    );
}

export default Footer;