import { createElement } from "react";

export function UserFavoriteFoods(){
    return createElement('div',null,
    <div>
        <section>
            <span>Favorite Food:</span>
            <br/>
            <ul>
                <li>Sushi</li>
                <li>Pizza</li>
                <li>Burger</li>
            </ul>
        </section>
    </div>);
}