import { createElement } from "react";
import styles from './user.module.scss';

export function UserFavoriteFoods(){
    return createElement('div',null,
    <div>
        <section>
            <span className={styles.foodsTitle}>Favorite Food:</span>
            <br/>
            <ul>
                <li>Sushi</li>
                <li>Pizza</li>
                <li>Burger</li>
            </ul>
        </section>
    </div>);
}