import './FleetCard.css'

export const FleetCard = ({ img, name }: { img: string; name: string }) => {
    return(
        <div>
            <div className="Container">
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>
    )
}