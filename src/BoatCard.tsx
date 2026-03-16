import './BoatCard.css';

export interface Boat {
    id: number;
    nombre: string;
    modelo: string;
    imagen: string;
    precio: number;
    eslora: number;       // length in meters
    licencia: string;     // e.g. "PNB", "PER", "YATCH SKIPPER", "NONE"
    rating: number;       // 0-5
}

export const BoatCard = ({ boat }: { boat: Boat }) => {
    return (
        <div className="boat-card">
            <div className="boat-card__img">
                <img src={boat.imagen} alt={boat.nombre} />
            </div>
            <div className="boat-card__info">
                <h3 className="boat-card__name">{boat.nombre}</h3>
                <p className="boat-card__model">{boat.modelo}</p>
                <div className="boat-card__details">
                    <span className="boat-card__length">{boat.eslora}m</span>
                    {boat.licencia !== 'NONE' && (
                        <span className="boat-card__licence">{boat.licencia}</span>
                    )}
                    <span className="boat-card__rating">{'★'.repeat(Math.round(boat.rating))}</span>
                </div>
                <p className="boat-card__price">{boat.precio}€ <span>/day</span></p>
            </div>
        </div>
    );
};
