import styles from "./List.module.css";

export const SeriesCard = ({ Elem }) => {
    const { id, img_url, watch_url, name, rating, description, genre } = Elem;

    return (
        <div key={id}>
            <div className={styles.card}>
                <div className={styles.img}><img src={img_url} alt="" /></div>
                <div className={styles["card-body"]}>
                    <div className={styles.card_border}>
                        <a href={watch_url} target="_blank" rel="noopener noreferrer">
                        <button style={{ padding: "0.7rem 1.4rem", border: "none", fontSize: "1.1rem", backgroundColor: rating >= 8.5 ? "lightgreen" : "yellow", color: "black" }}>
                            watch now
                        </button>
                        </a>
                        <h2 className="text-2xl font-bold mt-4">{name}</h2>
                        <h3 className="text-xl font-semibold text-blue-500 mt-2">Genre: {genre}</h3>
                        <h3 className="mt-2">Rating: <span className={rating >= 8.5 ? styles.hit : styles.average}>{rating}</span></h3>
                        <p className="mt-2">Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
