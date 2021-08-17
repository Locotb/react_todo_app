import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div class="wrapper">
            <h2>Home page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptas? Quis excepturi dolore alias voluptate ducimus delectus doloremque libero dolorem magni beatae, nisi optio aperiam ratione perferendis ipsum! Pariatur, ut.</p>
            <Link to="/todos">Todos</Link>
        </div>
    )
};
