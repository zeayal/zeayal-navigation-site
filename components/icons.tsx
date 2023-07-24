import { LuMoon, LuSunDim } from "react-icons/lu";
import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillWallet,
    AiOutlineSlack,
} from "react-icons/ai";
import * as AiIconMap from "react-icons/ai";
import React from "react";


export const Icon = (props: { icon: string }) => {
    const { icon } = props;
    const iconMap: { [key: string]: any } = AiIconMap;
    return React.createElement(iconMap[icon])
};


export const IconFont = (props: { icon: string }) => {
    const { icon } = props;
    // const iconMap: {[key: string]: any} = AiIconMap;
    // return React.createElement(iconMap[icon])
    return <i className={`iconfont ${icon}`}></i>;
};

export const Icons = {
    logo: AiOutlineSlack,
    sun: LuSunDim,
    moon: LuMoon,
    github: AiFillGithub,
    twitter: AiFillTwitterCircle,
    wallet: AiFillWallet,
};
