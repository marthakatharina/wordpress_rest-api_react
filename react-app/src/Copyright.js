import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Copyright() {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                {/* Made with <FavoriteIcon /> by{" "} */}
                <Link href="https://wlusekmarta.lima-city.de/">
                    Marta Wlusek
                </Link>
            </Typography>
        </div>
    );
}
