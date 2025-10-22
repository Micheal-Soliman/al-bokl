"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_ITEMS, SITE_CONFIG, CLINICS } from "../utils/constants";
import styles from "./Navbar.module.css";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook, FaWhatsapp, FaSnapchat, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClinicModalOpen, setIsClinicModalOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle dropdown click
  const handleDropdownClick = (index, event) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(index);
      setActiveSubDropdown(null);

      // Calculate position for fixed dropdown with viewport bounds checking
      setTimeout(() => {
        if (event && event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          const dropdown = document.querySelector(`[data-dropdown="${index}"]`);
          if (dropdown) {
            const viewportWidth =
              typeof window !== "undefined" ? window.innerWidth : 1024;
            const dropdownWidth = 250; // Approximate dropdown width

            let leftPosition = rect.left;

            // Check if dropdown would overflow on the right
            if (leftPosition + dropdownWidth > viewportWidth) {
              leftPosition = viewportWidth - dropdownWidth - 20;
            }

            // Check if dropdown would overflow on the left
            if (leftPosition < 20) {
              leftPosition = 20;
            }

            dropdown.style.top = `${rect.bottom + 5}px`;
            dropdown.style.left = `${leftPosition}px`;
          }
        }
      }, 0);
    }
  };

  // Handle sub-dropdown click
  const handleSubDropdownClick = (subIndex) => {
    if (activeSubDropdown === subIndex) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(subIndex);
    }
  };

  // Close dropdowns when clicking outside
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event, index, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (action === "dropdown") {
        handleDropdownClick(index, event);
      } else if (action === "subdropdown") {
        handleSubDropdownClick(index);
      }
    } else if (event.key === "Escape") {
      closeAllDropdowns();
    }
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const openClinicModal = (clinic) => {
    setSelectedClinic(clinic);
    setIsClinicModalOpen(true);
  };

  const closeClinicModal = () => {
    setIsClinicModalOpen(false);
    setSelectedClinic(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = typeof window !== "undefined" ? window.scrollY : 0;
      setIsScrolled(scrollTop > 100);
    };

    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".menuItem")
      ) {
        closeAllDropdowns();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      document.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const mockResults = [
        {
          title: "دوالي الخصيتين",
          description: "علاج دوالي الخصيتين بالجراحة الميكروسكوبية",
          link: "/surgeries/varicocele",
        },
        {
          title: "ضعف الإنتصاب",
          description: "علاج ضعف الإنتصاب والحلول المتاحة",
          link: "/sexual-health/erectile-dysfunction",
        },
        {
          title: "دعامات العضو الذكري",
          description: "الحل النهائي لضعف الإنتصاب",
          link: "/surgeries/penile-implants",
        },
      ].filter(
        (item) =>
          item.title.includes(searchQuery) ||
          item.description.includes(searchQuery)
      );
      setSearchResults(mockResults);
    }
  };

  return (
    <>
      {isScrolled && <div className={styles.spacer}></div>}

      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        {/* Top Bar - Blue Section */}
        <div className={`${styles.topBar} ${isScrolled ? styles.hidden : ""}`}>
          <div className="container">
            <div className={styles.topBarContent}>
              <div className={styles.socialIcons}>
                <a
                  href={SITE_CONFIG.socialMedia.snapchat}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                >
                  <FaSnapchat />
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.x}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.tiktok}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.instagram}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.youtube}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.facebook}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href={SITE_CONFIG.socialMedia.linkedin}
                  className={styles.socialIcon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
              <div className={styles.clinicLocations}>
                {CLINICS.map((clinic, index) => (
                  <button
                    key={index}
                    onClick={() => openClinicModal(clinic)}
                    className={styles.clinicButton}
                  >
                    <IoLocationOutline />
                    {clinic.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - White Section */}
        <div className={styles.mainNav}>
          <div className="container">
            <div className={styles.mainNavContent}>
              {/* Left Side - Logo */}
              <div className={styles.navLeft}>
                <Link href="/" className={styles.logo}>
                  <div className={styles.logoContainer}>
                    <Image
                      src="/logo-final-22222.webp"
                      alt="د. أسامة البكل"
                      width={140}
                      height={60}
                      // className={styles.logoImage}
                    />
                  </div>
                </Link>
              </div>

              {/* Center - Desktop Menu */}
              <div className={styles.desktopMenu}>
                {NAVIGATION_ITEMS.map((item, index) => (
                  <div key={index} className={`${styles.menuItem} menuItem`}>
                    {item.submenu ? (
                      <>
                        <span
                          className={styles.menuLink}
                          role="button"
                          tabIndex={0}
                          aria-expanded={activeDropdown === index}
                          aria-haspopup="true"
                          aria-label={`${item.name} - اضغط للعرض`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDropdownClick(index, e);
                          }}
                          onKeyDown={(e) => handleKeyDown(e, index, "dropdown")}
                        >
                          {item.name}
                          <span className={styles.dropdownArrow}>▼</span>
                        </span>

                        {/* Dropdown Menu for this specific item */}
                        {activeDropdown === index && (
                          <div
                            className={`${styles.dropdown} dropdown`}
                            data-dropdown={index}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <div
                                key={subIndex}
                                className={styles.dropdownItem}
                              >
                                {subItem.submenu ? (
                                  <div className={styles.submenuContainer}>
                                    <div
                                      className={`${styles.dropdownLink} ${styles.hasSubmenu}`}
                                      role="button"
                                      tabIndex={0}
                                      onClick={() =>
                                        handleSubDropdownClick(subIndex)
                                      }
                                      onKeyDown={(e) =>
                                        handleKeyDown(
                                          e,
                                          subIndex,
                                          "subdropdown"
                                        )
                                      }
                                    >
                                      {subItem.name}
                                      <span className={styles.submenuArrow}>
                                        ◄
                                      </span>
                                    </div>
                                    {/* Sub Dropdown */}
                                    {activeSubDropdown === subIndex && (
                                      <div className={styles.subDropdown}>
                                        {subItem.submenu.map(
                                          (subSubItem, subSubIndex) => (
                                            <Link
                                              key={subSubIndex}
                                              href={subSubItem.href}
                                              className={styles.subDropdownLink}
                                              onClick={closeAllDropdowns}
                                            >
                                              {subSubItem.name}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={styles.dropdownLink}
                                    onClick={closeAllDropdowns}
                                  >
                                    {subItem.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={styles.menuLink}
                        onClick={() => closeAllDropdowns()}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - Search & Mobile Menu */}
              <div className={styles.navRight}>
                <button
                  onClick={openSearchModal}
                  className={styles.searchIcon}
                  aria-label="فتح البحث"
                >
                  🔍
                </button>

                {/* Mobile Menu Button */}
                <button
                  className={styles.mobileMenuButton}
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? "✕" : "☰"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Light Gray Section */}
        <div
          className={`${styles.bottomBar} ${isScrolled ? styles.hidden : ""}`}
        >
          <div className="container">
            <div className={styles.bottomBarContent}>
              <div className={styles.hashtags}>
                <div className={styles.hashtagItem}>
                  <span className={styles.hashtagIcon}>👍</span>
                  <div className={styles.hashtagContent}>
                    <span className={styles.hashtagText}># احجز معانا</span>
                    <span className={styles.hashtagSubtext}>متاح دائما</span>
                  </div>
                </div>
                <div className={styles.hashtagItem}>
                  <span className={styles.hashtagIcon}>💪</span>
                  <div className={styles.hashtagContent}>
                    <span className={styles.hashtagText}># ماتفقدش_الامل</span>
                    <span className={styles.hashtagSubtext}>عناية كاملة</span>
                  </div>
                </div>
                <div className={styles.hashtagItem}>
                  <span className={styles.hashtagIcon}>🔬</span>
                  <div className={styles.hashtagContent}>
                    <span className={styles.hashtagText}># استبشر_خيرا</span>
                    <span className={styles.hashtagSubtext}>طاقم عمل مؤهل</span>
                  </div>
                </div>
              </div>
              <a href="tel:+201017912197" className={styles.phoneNumber}>
                <span className={styles.phoneIcon}>📞</span>
                <div className={styles.phoneContent}>
                  <span className={styles.phoneText}>للحجز اتصل بنا</span>
                  <span className={styles.phoneNumberText}>+201017912197</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {NAVIGATION_ITEMS.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.href}
                  className={styles.mobileMenuLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className={styles.mobileSubmenu}>
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={styles.mobileSubmenuLink}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {subItem.name}
                        </Link>
                        {subItem.submenu && (
                          <div className={styles.mobileSubSubmenu}>
                            {subItem.submenu.map((subSubItem, subSubIndex) => (
                              <Link
                                key={subSubIndex}
                                href={subSubItem.href}
                                className={styles.mobileSubSubmenuLink}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                ◦ {subSubItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div
          className={styles.searchModal}
          onClick={closeSearchModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-modal-title"
        >
          <div
            className={styles.searchModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchModalHeader}>
              <h3 id="search-modal-title">البحث في الموقع</h3>
              <button
                onClick={closeSearchModal}
                className={styles.closeButton}
                aria-label="إغلاق البحث"
                onKeyDown={(e) => handleKeyDown(e, -1, false)}
              >
                ✕
              </button>
            </div>
            <div className={styles.searchInputContainer}>
              <input
                type="text"
                placeholder="ابحث عن الخدمات والمقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchModalInput}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                onKeyDown={(e) => handleKeyDown(e, -1, false)}
                aria-label="حقل البحث"
                autoFocus
              />
              <button
                onClick={handleSearch}
                className={styles.searchModalButton}
                aria-label="بحث"
                onKeyDown={(e) => handleKeyDown(e, -1, false)}
              >
                🔍
              </button>
            </div>
            <div className={styles.searchResults}>
              {searchResults.length > 0 ? (
                <>
                  <h4>نتائج البحث ({searchResults.length})</h4>
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={result.link}
                      className={styles.searchResultItem}
                      onClick={closeSearchModal}
                    >
                      <h5>{result.title}</h5>
                      <p>{result.description}</p>
                    </Link>
                  ))}
                </>
              ) : searchQuery ? (
                <div className={styles.noResults}>
                  <p>لا توجد نتائج للبحث عن &ldquo;{searchQuery}&rdquo;</p>
                </div>
              ) : (
                <div className={styles.searchSuggestions}>
                  <h4>اقتراحات البحث</h4>
                  <div className={styles.suggestionTags} role="list">
                    <span
                      onClick={() => setSearchQuery("دوالي")}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSearchQuery("دوالي")
                      }
                      tabIndex={0}
                      role="button"
                      aria-label="البحث عن دوالي الخصيتين"
                    >
                      دوالي الخصيتين
                    </span>
                    <span
                      onClick={() => setSearchQuery("ضعف")}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSearchQuery("ضعف")
                      }
                      tabIndex={0}
                      role="button"
                      aria-label="البحث عن ضعف الإنتصاب"
                    >
                      ضعف الإنتصاب
                    </span>
                    <span
                      onClick={() => setSearchQuery("دعامات")}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSearchQuery("دعامات")
                      }
                      tabIndex={0}
                      role="button"
                      aria-label="البحث عن دعامات العضو الذكري"
                    >
                      دعامات العضو الذكري
                    </span>
                    <span
                      onClick={() => setSearchQuery("سرعة")}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSearchQuery("سرعة")
                      }
                      tabIndex={0}
                      role="button"
                      aria-label="البحث عن سرعة القذف"
                    >
                      سرعة القذف
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Clinic Modal */}
      {isClinicModalOpen && selectedClinic && (
        <div
          className={styles.clinicModal}
          onClick={closeClinicModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="clinic-modal-title"
        >
          <div
            className={styles.clinicModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.clinicModalHeader}>
              <h3 id="clinic-modal-title">{selectedClinic.name}</h3>
              <button
                onClick={closeClinicModal}
                className={styles.closeButton}
                aria-label="إغلاق النافذة"
              >
                ✕
              </button>
            </div>
            <div className={styles.clinicModalBody}>
              <div className={styles.clinicCard}>
                <div className={styles.clinicHeader}>
                  <span className={styles.clinicIcon}>📍</span>
                  <h4 className={styles.clinicName}>{selectedClinic.name}</h4>
                </div>
                <p className={styles.clinicLocation}>{selectedClinic.location}</p>
                <div className={styles.clinicHours}>
                  <span className={styles.hoursIcon}>🕒</span>
                  <div className={styles.hoursText}>
                    {selectedClinic.hours.map((hour, idx) => (
                      <p key={idx}>{hour}</p>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedClinic.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLinkText}
                >
                  <span>عرض على الخريطة</span>
                  <span className={styles.arrowIcon}>←</span>
                </a>

                {/* Contact Buttons */}
                <div className={styles.clinicContactButtons}>
                  <div className={styles.whatsappButtonsRow}>
                    <a
                      href="https://wa.me/201018874287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappButton}
                    >
                      <FaWhatsapp />
                      <span>واتساب 1</span>
                    </a>
                    <a
                      href="https://wa.me/201017912197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.whatsappButton}
                    >
                      <FaWhatsapp />
                      <span>واتساب 2</span>
                    </a>
                  </div>
                  <a
                    href="https://wa.me/201034637761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactButton}
                  >
                    <span className={styles.phoneIcon}>📞</span>
                    <span>للتواصل: 01034637761</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
