// @flow strict
import React from "react";
import { Link, withPrefix } from "gatsby";
import styles from "./Author.module.scss";
import { getContactHref } from "../../../utils";
import { useSiteMetadata } from "../../../hooks";

const Author = () => {
  const { author } = useSiteMetadata();
  return (
    <div className={styles["author"]}>
      <div className={styles["author__header"]}>
        <Link to="/" className={styles["author__header-photo"]}>
          <img
            src={withPrefix(author.photo)}
            width={60}
            height={60}
            alt={author.name}
          />
        </Link>
        <div className={styles["author__header-right"]}>
          <h4 className={styles["author__header-right-name"]}>
            <Link
              className={styles["author__header-right-name-link"]}
              to="/"
              rel="author"
            >
              {author.name}
            </Link>
          </h4>
          <p
            className={styles["author__header-right-bio"]}
            dangerouslySetInnerHTML={{ __html: author.bio }}
          />
          <a
            style={{ fontWeight: 500 }}
            href={getContactHref("twitter", author.contacts.twitter)}
            target="_blank"
          >
            Follow me on Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
