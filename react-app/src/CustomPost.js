import React from "react";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// import SchoolIcon from "@material-ui/icons/School";
import { useSnipcartState } from "./snipcart";
import useFetch from "./useFetch";

export default function CustomPost() {
    const posts = useFetch(
        "http://localhost:8888/wordpress_rest-api_react/wp-json/wp/v2/custom-posts"
    );

    const isSignedIn = useSnipcartState(
        (state) => state.customer.status === "SignedIn"
    );
    return (
        <List component="nav" aria-label="main mailbox folders">
            {posts &&
                posts.map((post, index) => (
                    <ListItem key={index}>
                        <ListItemIcon>{/* <SchoolIcon /> */}</ListItemIcon>
                        <ListItemText
                            primary={post.title.rendered}
                            secondary={
                                isSignedIn ? `Buy for ${post.price}$` : null
                            }
                        />
                        {isSignedIn && (
                            <ListItemSecondaryAction
                                className="snipcart-add-item"
                                data-item-id={post.id}
                                data-item-name={post.title.rendered}
                                data-item-price={post.price}
                                data-item-url="http://localhost:8888/wordpress_rest-api_react/wp-json/wp/v2/custom-posts"
                            >
                                <IconButton edge="end" aria-label="delete">
                                    {/* <AddShoppingCartIcon /> */}
                                </IconButton>
                            </ListItemSecondaryAction>
                        )}
                    </ListItem>
                ))}
        </List>
    );
}
