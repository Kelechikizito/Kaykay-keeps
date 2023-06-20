import React from "react";

let year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright © {year} Kelechi K. Ugwu.</p>
    </footer>
}

export default Footer;