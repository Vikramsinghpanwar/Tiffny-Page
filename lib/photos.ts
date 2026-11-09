// Food photography used on the site. All images come from Wikimedia Commons under
// Creative Commons licences that require attribution; they were cropped and
// re-encoded to WebP (scripted, no other edits). Full credits render on /credits.

export interface Photo {
  /** Base filename in /public/images; variants are `${base}-${width}.webp`. */
  base: string
  widths: number[]
  /** Intrinsic aspect ratio of the cropped image (width / height). */
  ratio: number
  alt: string
  credit: {
    title: string
    author: string
    license: string
    licenseUrl: string
    source: string
  }
}

export const photos = {
  thaliBananaLeaf: {
    base: 'thali-banana-leaf',
    widths: [480, 800, 1200],
    ratio: 1,
    alt: 'A South Indian vegetarian thali on a banana leaf with rice, sambar, rasam, curd and puris in steel bowls',
    credit: {
      title: 'South Indian Veg Thali',
      author: 'Swathivishwakarma',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      source: 'https://commons.wikimedia.org/wiki/File:South_Indian_Veg_Thali.jpg',
    },
  },
  tiffinUnpacked: {
    base: 'tiffin-unpacked',
    widths: [480, 800, 1200],
    ratio: 1.267,
    alt: 'An opened home-style tiffin with dal, rotis, rice and a vegetable sabzi in steel containers',
    credit: {
      title: 'Unpacked Tiffin',
      author: 'Dkgohil',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      source: 'https://commons.wikimedia.org/wiki/File:Unpacked_Tiffin.jpg',
    },
  },
  tiffinCarrier: {
    base: 'tiffin-carrier',
    widths: [480, 800, 1100],
    ratio: 0.667,
    alt: 'A classic stacked stainless-steel tiffin carrier',
    credit: {
      title: 'Tiffin box',
      author: 'Nipunbayas',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      source: 'https://commons.wikimedia.org/wiki/File:Tiffin_box.jpg',
    },
  },
  dalRotiSabzi: {
    base: 'dal-roti-sabzi',
    widths: [640, 1000, 1400],
    ratio: 1.227,
    alt: 'A home-style plate of yellow dal, rotis, bhindi sabzi and mango pickle',
    credit: {
      title: 'A thali with daal roti bhindi ki sabzi and mango pickle',
      author: 'Devika',
      license: 'CC BY-SA 2.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
      source:
        'https://commons.wikimedia.org/wiki/File:A_thali_with_daal_roti_bhindi_ki_sabzi_and_mango_pickle.jpg',
    },
  },
  vegMeal: {
    base: 'veg-meal',
    widths: [640, 1000, 1400],
    ratio: 1.5,
    alt: 'An Indian vegetarian meal of pulao, rotis, dal and curries in white bowls',
    credit: {
      title: 'Indian Veg Meal',
      author: 'Vikramdewangan22889',
      license: 'CC BY-SA 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      source: 'https://commons.wikimedia.org/wiki/File:Indian_Veg_Meal.jpg',
    },
  },
  tiffinCarriersRow: {
    base: 'tiffin-carriers-row',
    widths: [640, 1000, 1400],
    ratio: 1.449,
    alt: 'Rows of stacked steel tiffin carriers packed and ready to go out',
    credit: {
      title: 'Lunchbox - അടുക്കുപാത്രങ്ങൾ',
      author: 'കാക്കര (Kakkara)',
      license: 'CC BY-SA 3.0',
      licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      source:
        'https://commons.wikimedia.org/wiki/File:Lunchbox_-_%E0%B4%85%E0%B4%9F%E0%B5%81%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%81%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%B0%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE.JPG',
    },
  },
  thaliOverhead: {
    base: 'thali-overhead',
    widths: [480, 800, 1200],
    ratio: 1,
    alt: 'An overhead view of an Indian thali with pulao, papad, curries, raita and salad on a steel plate',
    credit: {
      title: 'Darjeeling, India, Indian Thali meal',
      author: 'Vyacheslav Argenberg',
      license: 'CC BY 4.0',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      source: 'https://commons.wikimedia.org/wiki/File:Darjeeling,_India,_Indian_Thali_meal.jpg',
    },
  },
} satisfies Record<string, Photo>
