import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// import Favorite from "@mui/icons-material/Favorite";

export default function Copyright() {
    return (
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                Made with
                {/* <Favorite /> */}
                by{" "}
                <Link href="https://wlusekmarta.lima-city.de/">
                    Marta Wlusek
                </Link>
            </Typography>
        </div>
    );
}
