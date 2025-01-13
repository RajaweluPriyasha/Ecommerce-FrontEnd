import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({ cartItems }) {
    // Ensure cartItems is an array and calculate its length
    const cartItemCount = Array.isArray(cartItems) ? cartItems.length : 0;

    return (
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <Link to="/">
                        <img width="140px"height="90px" src="/images/logo2.png" alt="Logo" />
                    </Link>
                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search />
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <Link to={"/cart"}>
                    
                <span className="ml-1" id="cart_count">Cart</span>
                </Link>
            </div>
        </nav>
    );
}
