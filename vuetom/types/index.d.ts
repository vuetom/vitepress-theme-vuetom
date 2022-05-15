import { DefaultTheme, Theme } from 'vitepress'

declare const theme: Theme

// vuetom ui

export declare const VuetomUI: {
  name: string,
  version: string,
}

// siderbar

export type VtSiderbarItem = {
  text: string
  children?: VtSiderbarItem[]
  link?: string
}

// navbar

export interface VtNavItemWithLink extends DefaultTheme.NavItemBase {
  lang: string
}

export interface VtNavItemWithChildren extends DefaultTheme.NavItemBase {
  items: VtNavItemWithLink[]
}

export type VtNavItem = VtNavItemWithLink | VtNavItemWithChildren

// theme config

export declare interface VuetomThemeConfig extends DefaultTheme.Config {

  sidebar?: VtSiderbarItem[] | any;

  nav?: VtNavItem[] | any;

  /**
   * Home background image
   *
   * @example '/imgs/homg-bg01.jpg'
   */
  bgImg?: string;

  /**
   * Colors around home background
   *
   * @example '0,0,0'
   */
  bgColor?: string;

  /**
   * Home background transparency
   *
   * @example 0.6
   */
  bgOpacity?: 0.1|0.2|0.3|0.4|0.5|0.6|0.7|0.8|0.9|1.0;

  /**
   * Whether background flashing is on
   *
   * @example false
   */
  flashEnable?: boolean;

  /**
   * Background flashing top and right colors
   *
   * @example ['238,17,17', '0,98,255']
   */
  flashColor?: string | Array;

  /**
   * Whether to turn on poor visual effect
   *
   * @example true
   */
  parallaxEnable?: boolean;

  /**
   * Page background image enable
   *
   * @example true
   */
  pageBgEnable?: boolean;

  /**
   * Page background transparency
   *
   * @example 0.8
   */
  pageBgOpacity?: 0.1|0.2|0.3|0.4|0.5|0.6|0.7|0.8|0.9|1.0;

  /**
   * Home features background
   *
   * @example ['#06cdff30', 'rgba(223,7,107,.3)']
   */
   featuresColor?: string | Array;
}

export default theme
