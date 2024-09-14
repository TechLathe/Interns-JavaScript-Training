import {createelement} from 'react';
import styles from './usermodule.scss';
export function fav_food(){
    return createelement(
        "section",
        null,
        <div>
            <span>classname={styles["food-title"]}>favfood:</span>
            <br/>
            <ul>
                <li>thai</li>
                <li>indian</li>
                <li>korean</li>
            </ul>
        </div>
    );
}