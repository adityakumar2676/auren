import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Banner from "../components/Banner";
import ShopByCategory from "../components/ShopByCategory";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <Products />
            <Banner />
            <ShopByCategory />
            <Newsletter />
            <Footer />
        </div>
    );
}

export default Home;
