import './BoatContainer.css';
import { useState, useEffect } from 'react';
import { BoatCard } from './BoatCard';
import type { Boat } from './BoatCard';

/* ─────────────────────────────────────────────
    Props — lo único que cambia entre las 4 páginas:
    · headerImage : imagen de fondo del hero
    · title       : título que se muestra sobre la imagen
    · category    : string que se envía al backend PHP
    para filtrar los barcos de esa categoría
   ───────────────────────────────────────────── */
interface BoatContainerProps {
    headerImage: string;
    title: string;
    category: string;          // e.g. "no_licence", "licence", "sailing", "yatch"
}

export const BoatContainer = ({ headerImage, title, category }: BoatContainerProps) => {
    /* ── state ── */
    const [boats, setBoats]             = useState<Boat[]>([]);
    const [filtered, setFiltered]       = useState<Boat[]>([]);
    const [loading, setLoading]         = useState(true);
    const [open, setOpen]               = useState(false);
    const [openModel, setOpenModel]     = useState(false);
    const [openLicence, setOpenLicence] = useState(false);
    const [activeSort, setActiveSort]   = useState('');

    /* ── fetch boats from PHP backend ── */
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost/proyecto/getBoats.php?category=${category}`)
            .then(res => res.json())
            .then((data: Boat[]) => {
                setBoats(data);
                setFiltered(data);
            })
            .catch(() => {
                setBoats([]);
                setFiltered([]);
            })
            .finally(() => setLoading(false));
    }, [category]);

    /* ── filter / sort helpers ── */
    const sortBy = (key: string) => {
        setActiveSort(key);
        const sorted = [...filtered];
        switch (key) {
            case 'cheap':
                sorted.sort((a, b) => a.precio - b.precio);
                break;
            case 'rating':
                sorted.sort((a, b) => b.rating - a.rating);
                break;
            case 'length':
                sorted.sort((a, b) => b.eslora - a.eslora);
                break;
            default:
                break;
        }
        setFiltered(sorted);
    };

    const filterByLicence = (lic: string) => {
        setActiveSort(lic);
        setFiltered(boats.filter(b => b.licencia === lic));
    };

    const resetFilters = () => {
        setActiveSort('');
        setFiltered(boats);
        setOpen(false);
        setOpenModel(false);
        setOpenLicence(false);
    };

    /* ── render ── */
    return (
        <div>
            {/* ═══ HERO HEADER ═══ */}
            <div className="boat-header">
                <img
                    className="boat-header__bg"
                    src={headerImage}
                    alt={title}
                />
                <div className="boat-header__content">
                    <h1>{title}</h1>
                    <div className="boat-header__links">
                        <h3>TALK WITH THE TEAM</h3>
                        <h3>HOW IT WORKS?</h3>
                    </div>
                </div>
            </div>

            {/* ═══ FILTERS BAR ═══ */}
            <div className="boat-filters">
                <button
                    className={open ? 'active' : ''}
                    onClick={() => setOpen(!open)}
                >
                    ☰ FILTERS
                </button>

                {open && (
                    <>
                        <button
                            className={activeSort === 'cheap' ? 'active' : ''}
                            onClick={() => sortBy('cheap')}
                        >
                            Price ▾
                        </button>
                        <button
                            className={activeSort === 'rating' ? 'active' : ''}
                            onClick={() => sortBy('rating')}
                        >
                            Rating
                        </button>
                        <button
                            className={activeSort === 'length' ? 'active' : ''}
                            onClick={() => sortBy('length')}
                        >
                            Length
                        </button>

                        {/* Model sub-filter (placeholder — add your models) */}
                        <button onClick={() => setOpenModel(!openModel)}>
                            Model ▾
                        </button>
                        {openModel && (
                            <div className="boat-filters__sub">
                                {/* TODO: populate with real models from backend */}
                                <button onClick={() => {}}>Bayliner</button>
                                <button onClick={() => {}}>Jeanneau</button>
                                <button onClick={() => {}}>Bénéteau</button>
                            </div>
                        )}

                        {/* Licence sub-filter */}
                        <button onClick={() => setOpenLicence(!openLicence)}>
                            Licence ▾
                        </button>
                        {openLicence && (
                            <div className="boat-filters__sub">
                                <button onClick={() => filterByLicence('PNB')}>PNB</button>
                                <button onClick={() => filterByLicence('PER')}>PER</button>
                                <button onClick={() => filterByLicence('YATCH SKIPPER')}>YATCH SKIPPER</button>
                            </div>
                        )}

                        <button onClick={resetFilters}>✕ Clear</button>
                    </>
                )}
            </div>

            {/* ═══ BOAT CARDS GRID ═══ */}
            <div className="boat-grid">
                {loading && <p className="boat-grid__status">Loading boats…</p>}

                {!loading && filtered.length === 0 && (
                    <p className="boat-grid__status">No boats found for this category.</p>
                )}

                {!loading && filtered.map(boat => (
                    <BoatCard key={boat.id} boat={boat} />
                ))}
            </div>
        </div>
    );
};