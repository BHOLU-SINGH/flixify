"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const Header = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = () => {
    (inputValue.length > 0) ? console.log("Search query is : " + inputValue) : console.log("Invalid search query");
  };

  return (
    <>
      <header>
        <div className="header-1">
          <div className="header-1-1">
            <Image
              src="/flixify.png"
              alt="Flixify Logo"
              width={200}
              height={50}
              priority
            />
          </div>
          <div className="header-1-2 center">
            <input type="text" value={inputValue} placeholder="What are you looking for?" onChange={(e) => setInputValue(e.target.value)} />
            <i className="bi bi-search center" onClick={handleChange}></i>
          </div>
        </div>
        <div className="header-2 center">
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">Movies</Link>
              <ul className="dropdown-menu">
                <li><Link href="/movie">Movie</Link></li>
                <li><Link href="/movie/now-playing">Now Playing</Link></li>
                <li><Link href="/movie/popular">Popular</Link></li>
                <li><Link href="/movie/top-rated">Top Rated</Link></li>
                <li><Link href="/movie/upcoming">Upcoming</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/">Genre</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#">Action</Link>
                </li>
                <li>
                  <Link href="#">Adventure</Link>
                </li>
                <li>
                  <Link href="#">Animation</Link>
                </li>
                <li>
                  <Link href="#">Comedy</Link>
                </li>
                <li>
                  <Link href="#">Crime</Link>
                </li>
                <li>
                  <Link href="#">Drama</Link>
                </li>
                <li>
                  <Link href="#">Fantasy</Link>
                </li>
                <li>
                  <Link href="#">Historical</Link>
                </li>
                <li>
                  <Link href="#">Horror</Link>
                </li>
                <li>
                  <Link href="#">Mystery</Link>
                </li>
                <li>
                  <Link href="#">Political</Link>
                </li>
                <li>
                  <Link href="#">Romance</Link>
                </li>
                <li>
                  <Link href="#">Sci-Fi</Link>
                </li>
                <li>
                  <Link href="#">Thriller</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Year</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#">2022</Link>
                </li>
                <li>
                  <Link href="#">2021</Link>
                </li>
                <li>
                  <Link href="#">2020</Link>
                </li>
                <li>
                  <Link href="#">2018</Link>
                </li>
                <li>
                  <Link href="#">2017</Link>
                </li>
                <li>
                  <Link href="#">2016</Link>
                </li>
                <li>
                  <Link href="#">2011-2015</Link>
                </li>
                <li>
                  <Link href="#">2006-2010</Link>
                </li>
                <li>
                  <Link href="#">2001-2005</Link>
                </li>
                <li>
                  <Link href="#">1880-2000 </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Quality</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#">480P Movies</Link>
                </li>
                <li>
                  <Link href="#">720P Movies</Link>
                </li>
                <li>
                  <Link href="#">1080P Movies</Link>
                </li>
                <li>
                  <Link href="#">300MB Movies</Link>
                </li>
                <li>
                  <Link href="#">500MB Movies</Link>
                </li>
                <li>
                  <Link href="#">700MB Movies</Link>
                </li>
                <li>
                  <Link href="#">900MB Movies</Link>
                </li>
                <li>
                  <Link href="#">1GB Movies </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">TV Shows</Link>
              <ul className="dropdown-menu">
                <li><Link href="/tv">TV Shows</Link></li>
                <li><Link href="/tv/airing-today">Airing Today</Link></li>
                <li><Link href="/tv/on-the-air">On The Air</Link></li>
                <li><Link href="/tv/popular">Popular</Link></li>
                <li><Link href="/tv/top-rated">Top Rated</Link></li>
              </ul>
            </li>
            <li>
              <Link href="/">Web Series</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="#">Netflix</Link>
                </li>
                <li>
                  <Link href="#">Amazon Prime Video</Link>
                </li>
                <li>
                  <Link href="#">Korean Drama</Link>
                </li>
                <li>
                  <Link href="#">Hindi Dubbed Series</Link>
                </li>
                <li>
                  <Link href="#">Hotstar</Link>
                </li>
                <li>
                  <Link href="#">Hulu</Link>
                </li>
                <li>
                  <Link href="#">MX Player Originals</Link>
                </li>
                <li>
                  <Link href="#">Voot Select</Link>
                </li>
                <li>
                  <Link href="#">Ongoing Series</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Anime</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="info center fd-column">
          <p><span>Warning</span>: Currently, two tabs are working, the first is &#39;Movie&#39; and the second is &#39;TV Shows&#39;, except these other tabs are in working status.</p>
      </div>
    </>
  );
}


export default Header;