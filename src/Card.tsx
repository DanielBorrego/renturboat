import './Card.css'

export const Reason = ({ img, name }: { img: string; name: string }) => {
    return (
        <div className="reason">
            <div>
                <img src={img}  />
            </div>
            <p>{name}</p>
        </div>
    );
};