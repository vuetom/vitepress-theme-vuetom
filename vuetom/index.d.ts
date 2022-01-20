import { DefaultTheme, Theme } from 'vitepress'

declare const theme: Theme

declare const VuetomUI: {
  name: string,
  version: string,
}

export type VtSiderbarItem = {
  text: string
  children?: VtSiderbarItem[]
  link?: string
}

export type VtNavItem = {
  link: string
  text: string
  activeMatch?: string
}

declare interface VuetomThemeConfig extends DefaultTheme.Config {

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

export { VuetomUI, VuetomThemeConfig }
export default theme
