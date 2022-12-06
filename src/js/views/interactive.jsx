import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Carousel } from "../component/carousel";
import { EditableCards } from "../component/editableCards";
import { TopBar } from "../component/topbar";


import "../../styles/demo.css";
import { MiddleInfo } from "../component/middleinfo";
import { MixCards } from "../component/mixcards";
import '../../styles/index.css'

export const Interactive = () => {

  return (
    <div className="interactive-container">
      <Carousel 
        img1 = "https://lumiere-a.akamaihd.net/v1/images/sw-lego-new-swcom-slide-desktop-_2_5f19744d.jpeg?region=0,0,2048,870&width=1920"
        img2 = "https://lumiere-a.akamaihd.net/v1/images/sw-tales-from-galaxy-s-edge-enhanced-new-swcom-slide-de_9779cc92.jpeg?region=0,0,2048,870&width=1920"
      />
      <Link className="d-flex justify-content-center" style={{margin: "60px 0"}} to="*">
        <img style={{width: "1100px", height: "500px"}} src="https://lumiere-a.akamaihd.net/v1/images/new-swcom-slide-desktop_games_021d34b6.jpeg?region=0,0,2048,870&width=1536" alt="" />
      </Link>
      <MiddleInfo 
      title = "GAMES + APPS"
      text = "Get the lastet official news, trailers and insights on a galaxy of Star Wars games and apps"
      button = "EXPLORE"
      />
      <TopBar 
      text = "THE LASTET | STAR WARS GAMES + APPS"
      />
      <MixCards 
        img = "https://lumiere-a.akamaihd.net/v1/images/6389015d64cfe900019e57fe-image_f05f3552.jpeg?region=0%2C0%2C1536%2C864&width=768"
        text = "CAL KESTIS RETURNS IN START WARS JEDI: BATTLE SCARS -"
        rightimg1 = "https://lumiere-a.akamaihd.net/v1/images/5f89c7a76abe2a0001e13df7-image_c15dc0ab.jpeg?region=0%2C0%2C1536%2C864&width=320"
        righttext1 = "QUIZ: WHICH STAR WATS VIDEO GAME SHOULD YOU PLAY WIGHT NOW?"
        rightimg2 = "https://lumiere-a.akamaihd.net/v1/images/6293d363297bbb0001820be3-image_89af1546.jpeg?region=0%2C0%2C1536%2C864&width=320"
        righttext2 = "SWCA 2022: 7 THINGS WE LEARNED GROM THE STAR WARS: HUNTER PANEL"
        rightimg3 = "https://lumiere-a.akamaihd.net/v1/images/62915a96297bbb0001b03703-image_581c409a.jpeg?region=0%2C0%2C1536%2C864&width=320"
        righttext3 = "SWCA 2022: STAR WARS: KNIGHTS OF THE OLD REPUBLIC II: THE SITH LOTDS COMING TO NINTENDO SWITCH"
      />
      <Link className="d-flex justify-content-center" style={{margin: "60px 0"}} to="*">
        <img style={{width: "1100px", height: "500px"}} src="https://lumiere-a.akamaihd.net/v1/images/vr-hero-desktop_25626109.jpeg?region=0,0,2048,870&width=1536" alt="" />
      </Link>
      <TopBar 
      text = "THE LASTET | STAR WARS VIRTUAL REALITY"
      />
      <MixCards 
        img = "https://lumiere-a.akamaihd.net/v1/images/6389015d64cfe900019e57fe-image_f05f3552.jpeg?region=0%2C0%2C1536%2C864&width=768"
        text = "CAL KESTIS RETURNS IN START WARS JEDI: BATTLE SCARS -"
        rightimg1 = "https://lumiere-a.akamaihd.net/v1/images/5f89c7a76abe2a0001e13df7-image_c15dc0ab.jpeg?region=0%2C0%2C1536%2C864&width=320"
        righttext1 = "QUIZ: WHICH STAR WATS VIDEO GAME SHOULD YOU PLAY WIGHT NOW?"
        rightimg2 = "https://lumiere-a.akamaihd.net/v1/images/6293d363297bbb0001820be3-image_89af1546.jpeg?region=0%2C0%2C1536%2C864&width=320"
        righttext2 = "SWCA 2022: 7 THINGS WE LEARNED GROM THE STAR WARS: HUNTER PANEL"
        rightimg3 = "https://lumiere-a.akamaihd.net/v1/images/62915a96297bbb0001b03703-image_581c409a.jpeg?region=0%2C0%2C1536%2C864&width=320"
        righttext3 = "SWCA 2022: STAR WARS: KNIGHTS OF THE OLD REPUBLIC II: THE SITH LOTDS COMING TO NINTENDO SWITCH"
      />
    </div>
  );
};
