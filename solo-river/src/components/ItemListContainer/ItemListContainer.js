import RiverCampeon from '../assets/river-plate-campeon-libertadores-2018.jpg'

const ItemListContainer = (props) => {
    return (
        <>
            <h1 className="title">
                Bienvenido a la tienda mas grande del Club Atletico River Plate
            </h1>
            <h3 className="greeting">{props.greeting}</h3>

            <div className="main-content">
                <div className='informacion'>
                    <h2 className="subtitulo">¿Quiénes somos?</h2>
                    
                    <p className="parrafo">Somos una empresa colaboradora del club mas grande del país. Contamos con prendas originales de River Plate, y accesorios domésticos y decorativos del club. No poseemos una tienda fisica, sino mas bien virtual, para poder concentrarnos en ventas nacionales e internacionales, tu consulta no molesta! Podrás tu consulta en el formulario de abajo</p>
                </div>
                
                <img src={RiverCampeon} alt="logo"></img>
            </div>

            <footer className="footer">
                <p>Argentina</p>
            </footer>
        </>
    )
}

export default ItemListContainer;