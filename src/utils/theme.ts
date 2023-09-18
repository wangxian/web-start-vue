import type { SettingData, Theme } from '@/types'

export const themeList: SettingData<Theme> = [
  {
    name: '初春',
    enName: 'EarlySpring',
    value: {
      primaryC: '#0d9488',
      primaryLightC: '#37a399',
      primaryDarkC: '#096b62',
      siteHoverC: '#37a39922', // primaryLightC + 22
      settingBorderC: '#096b62aa', // primaryDarkC + aa
      settingGroupBgC: '#87a8a422', // bgC + 22
      bgC: '#87a8a4',
      mainBgC: '#f3f4f6',
    },
  },
  {
    name: '瀚海',
    enName: 'VastOcean',
    value: {
      primaryC: '#146C94',
      primaryLightC: '#1a8dc2',
      primaryDarkC: '#115d80',
      siteHoverC: '#1a8dc222',
      settingBorderC: '#115d80aa',
      settingGroupBgC: '#0A4D6822',
      bgC: '#0A4D68',
      mainBgC: '#f3f4f6',
    },
  },
  {
    name: '大漠',
    enName: 'EndlessDesert',
    value: {
      primaryC: '#bc6c25',
      primaryLightC: '#d47a2a',
      primaryDarkC: '#96561e',
      siteHoverC: '#d47a2a22',
      settingBorderC: '#96561eaa',
      settingGroupBgC: '#BF927022',
      bgC: '#BF9270',
      mainBgC: '#f3f4f6',
    },
  },
  {
    name: '月白',
    enName: 'MoonWhite',
    value: {
      primaryC: '#555555',
      primaryLightC: '#777777 ',
      primaryDarkC: '#333333',
      siteHoverC: '#77777722',
      settingBorderC: '#333333aa',
      settingGroupBgC: '#77777730',
      bgC: '#E7E6E1',
      mainBgC: '#f3f4f6',
    },
  },
]
