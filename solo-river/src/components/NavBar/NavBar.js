import river from '../assets/river-plate-logo.png';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <>
            <div class="items">
                <img src={river} alt="logo"></img>
                <p>Home</p>
                <p>Camisetas</p>
                <p>Indumentaria</p>
                <p>Accesorios</p>
                <CartWidget/>
            </div>
        
        </>
    )
}
export default NavBar;

