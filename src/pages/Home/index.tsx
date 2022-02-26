import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    return <div className="home container is-fluid pt-5">
        <img src="https://m-u-g.github.io/assets/images/logo-no-margin-ext.svg" alt='logo' />
        <h1>Hello to Ts Best Practices!</h1>

        <div className="row">
            <div className="column is-offset-one-quarter is-half">
                <figure className="image is-2by1">
                    <img src={`${import.meta.env.BASE_URL}/images/wallpaper.png`} alt='logo' />
                </figure>
            </div>
        </div>

        <h4>
            Go to the <Link to="/orders">sample</Link> page.
        </h4>

        <h4>
            The repository is hosted on<br /><a href="https://github.com/Puppo/MUG-2022-ts-best-practices" target="_blank" rel="noreferrer">https://github.com/Puppo/MUG-2022-ts-best-practices</a>.
        </h4>
        <h4>
            My Typescript Series on dev.to<br /><a href="https://dev.to/this-is-learning/series/11213" target="_blank" rel="noreferrer">https://dev.to/this-is-learning/series/11213</a>.
        </h4>
    </div>
}