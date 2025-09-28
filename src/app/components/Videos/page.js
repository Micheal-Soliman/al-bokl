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
      "https://www.youtube.com/embed/hO8gRH8MVyA",
      "https://www.youtube.com/embed/R9gP7GSfFJk",
      "https://www.youtube.com/embed/4wmJSdO6M7k",
      "https://www.youtube.com/embed/92nRRqbJM4o",
      "https://www.youtube.com/embed/E_w2fJ_Dh68",
      "https://www.youtube.com/embed/2E0N5Esd7Ho",
      "https://www.youtube.com/embed/Sy_NauCgzfI",
      "https://www.youtube.com/embed/WXPdPYjjO3Q",
      "https://www.youtube.com/embed/IKpAYjwtemo",
      "https://www.youtube.com/embed/qf4sH_I2wwI",
      "https://www.youtube.com/embed/kuyYLWETZFE",
      "https://www.youtube.com/embed/Wh8Hh3OB0LI",
      "https://www.youtube.com/embed/eMRZPg2MljI",
      "https://www.youtube.com/embed/FRYa63lGPfw",
      "https://www.youtube.com/embed/v37kh4b0dtQ",
    ],
    "تاخر الانجاب": [
      "https://www.youtube.com/embed/PtJCbjXSYFM",
      "https://www.youtube.com/embed/-IixYQwVmGA",
      "https://www.youtube.com/embed/OTBOjJnsaeg",
      "https://www.youtube.com/embed/IKpAYjwtemo",
      "https://www.youtube.com/embed/qf4sH_I2wwI",
      "https://www.youtube.com/embed/kuyYLWETZFE",
      "https://www.youtube.com/embed/2E0N5Esd7Ho",
      "https://www.youtube.com/embed/Sy_NauCgzfI",
      "https://www.youtube.com/embed/WXPdPYjjO3Q",
      "https://www.youtube.com/embed/eQ51u42WLs8",
    ],
    "المشاكل الجنسية": [
      "https://www.youtube.com/embed/4wmJSdO6M7k",
      "https://www.youtube.com/embed/92nRRqbJM4o",
      "https://www.youtube.com/embed/E_w2fJ_Dh68",
      "https://www.youtube.com/embed/OBzJfvC6ANw",
      "https://www.youtube.com/embed/Wh8Hh3OB0LI",
      "https://www.youtube.com/embed/eMRZPg2MljI",
    ],
    "تحليل السائل المنوي": [
      "https://www.youtube.com/embed/U7ixTYALfoA",
      "https://www.youtube.com/embed/hO8gRH8MVyA",
      "https://www.youtube.com/embed/R9gP7GSfFJk",
      "https://www.youtube.com/embed/XjE1ImOavjs",
      "https://www.youtube.com/embed/FRYa63lGPfw",
      "https://www.youtube.com/embed/v37kh4b0dtQ",
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
