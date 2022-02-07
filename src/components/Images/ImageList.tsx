import { useEffect, useState } from "react";
import styles from "./Image.module.css";

export interface Iimage {
  id: string;
  thumbnailUrl: string;
  title: string;
  url: string;
  sizeLarge: boolean;
}

export const ImageList = () => {
  const [images, setImages] = useState<Iimage[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((result) => {
        setImages(result);
      });
  }, []);

  const IMG_PER_PAGE = 30;

  const [page, setPage] = useState(1);

  const [sizeLarge, setSizeLarge] = useState(false);

  const toggleSize = (id: string) => {
    const newCard = images.map((item) => {
      if (item.id === id) {
        setSizeLarge(!item.sizeLarge);
      }

      return item;
    });

    setImages(newCard);
  };

  const imgSliced = images.slice(0, IMG_PER_PAGE * page);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={`${styles.container}`}>
        {imgSliced.map(
          (item: {
            thumbnailUrl: string;
            title: string;
            url: string;
            id: string;
          }) => (
            <div
              id={item.id}
              onClick={() => toggleSize(item.id)}
              className={sizeLarge ? `${styles.card_large}` : `${styles.card}`}
            >
              {sizeLarge ? (
                <img src={item.url} />
              ) : (
                <img src={item.thumbnailUrl} />
              )}
              <h4>{item.title}</h4>
            </div>
          )
        )}
      </div>
      <button onClick={showMore} className={styles.btn}>
        show more
      </button>
    </>
  );
};
