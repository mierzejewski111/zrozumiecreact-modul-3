import { Item } from "../Item/Item";
import styles from "./List.module.css";
const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];
export function List() {
    return (
        <>
            <button
                className={styles.btn}
                onClick={() => {
                    alert(`Ilość emoji: ${emojis.length}`);
                }}
            >
                Pokaż ilość emoji
            </button>
            <ul className={styles.list}>
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji} />
                ))}
            </ul>
        </>
    );
}
