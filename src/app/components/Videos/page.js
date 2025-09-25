"use client";
import { useState } from "react";
import styles from "./Videos.module.css";

export default function Videos() {
  // Tabs data with arrays of YouTube links
  const tabs = {
    "فيديوهات د. أسامة البكل": [
      "https://www.youtube.com/embed/XjE1ImOavjs",
      "https://www.youtube.com/embed/OBzJfvC6ANw",
      "https://www.youtube.com/embed/eQ51u42WLs8",
      "https://www.youtube.com/embed/PtJCbjXSYFM",
      "https://www.youtube.com/embed/-IixYQwVmGA",
      "https://www.youtube.com/embed/OTBOjJnsaeg",
      "https://www.youtube.com/embed/U7ixTYALfoA",
    ],
    "تاخر الانجاب": [
      "https://www.youtube.com/embed/jh0vB33C2dQ",
      "https://www.youtube.com/embed/zNnx2xj0zEA",
    ],
    "المشاكل الجنسية": [
      "https://www.youtube.com/embed/jh0vB33C2dQ",
      "https://www.youtube.com/embed/zNnx2xj0zEA",
    ],
    "تحليل السائل المنوي": [
      "https://www.youtube.com/embed/cI4hS8aNQhU",
      "https://www.youtube.com/embed/1B1bD9Fq8c0",
    ],
  };

  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className={styles.wrapper}>
      {/* Tabs */}
      <div className={styles.tabs}>
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Videos */}
      <div className={styles.videos}>
        {tabs[activeTab].map((url, idx) => (
          <div key={idx} className={styles.videoWrapper}>
            <iframe
              src={url}
              title={`video-${idx}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
