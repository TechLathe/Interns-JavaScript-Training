import react from 'react';
import'./app.css';
import about from './componens/about/about';
import blog from './componens/blog/blog';
import footer from'./componens/footer/footer';
import home from './componens/home/home';
import navbar from './componens/navbar/navbar';
import offer from './componens/offers/offer';
import popular from './componens/popular/popular';
const app =() => {
    return{
        <>
        <navbar/>
        <home/>
        <popular/>
        <offer/>
        <about/>
        <footer/>
        </>

    }
}
export default app 