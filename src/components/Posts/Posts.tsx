import { useEffect, useState } from "react";
import styles from "./Post.module.css";

export interface IPost {
  id: string;
  userId: string;
  body: string;
  title: string;
  author: string;
}

const POST_PER_PAGE = 5;

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
    ]).then((response) => {
      const [posts, authors] = response;

      const newPosts = posts.map((post: IPost) => {
        const authorId = post.userId;

        const author = authors.find((author: IPost) => author.id === authorId);

        return { ...post, author: author.name };
      });

      setPosts(newPosts);
    });
  }, []);

  const postsSliced = posts.slice(0, POST_PER_PAGE * page);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={`${styles.posts}`}>
        {postsSliced.map((item: IPost) => (
          <div className={`${styles.card}`}>
            <div className={`${styles.title}`} key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
            <div className={`${styles.author}`}>
              Author:{" "}
              <span style={{ color: "rgb(51,121,250)" }}>{item.author}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={showMore} className={styles.btn}>
        show more
      </button>
    </>
  );
};
