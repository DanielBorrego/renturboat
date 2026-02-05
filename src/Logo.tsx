    export const Logo = () => {
    return (
        <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
            <style>
            {`
                .primary-color { fill: #000000; } 
                .background-fill { fill: #FFFFFF; } 
                .font-style {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                    font-weight: 600; 
                    letterSpacing: 0.1em; 
                    textTransform: uppercase;
                }
            `}
            </style>
        </defs>
        
        <g id="Logo-Icon" transform="translate(100, 50)">
            <path d="M100 0L186.603 50V150L100 200L13.3975 150V50L100 0Z" className="primary-color"/>
            <path d="M100 30L150 60V80L100 110L50 80V60L100 30Z" className="background-fill"/>
            <rect x="60" y="170" width="80" height="10" className="background-fill"/>
        </g>

        <text 
            x="200" 
            y="320" 
            textAnchor="middle" 
            className="primary-color font-style" 
            fontSize="24"
        >
            Rent ur Boat
        </text>
        </svg>
    );
    };