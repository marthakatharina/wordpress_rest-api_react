// import './App.css';
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright.js";
import CustomPost from "./CustomPost.js";
import Posts from "./Posts.js";
import { useSnipcartState } from "./snipcart";

function App() {
    const isSignedIn = useSnipcartState(
        (state) => state.customer.status === "SignedIn"
    );

    function signOut(ev) {
        ev.preventDefault();
        window.Snipcart.api.customer.signout();
    }

    return (
        <Container maxWidth="sm">
            <header>
                <Typography variant="h2">
                    Wordpress interacing with the API and React
                </Typography>
                {isSignedIn ? (
                    <p>
                        <button onClick={signOut}>Sign out</button>
                    </p>
                ) : (
                    <p>
                        <button className="snipcart-customer-signin">
                            Log in to see the price of a custom-post
                        </button>
                    </p>
                )}
            </header>
            <section>
                <Typography variant="h4">
                    Here you will find custom-posts:
                </Typography>
                <CustomPost />
            </section>
            <section>
                <Typography variant="h4">From our blog:</Typography>
                <Posts />
            </section>
            <footer style={{ marginTop: "3em" }}>
                <Copyright />
            </footer>
        </Container>
    );
}

export default App;
