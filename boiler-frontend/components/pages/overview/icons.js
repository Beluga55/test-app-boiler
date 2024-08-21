import { h } from 'vue'
import { ChevronLeft, ChevronsUpDown, Pen, Share2, LogIn as Logout } from 'lucide-vue-next'

const OverviewIcon = {
  render () {
    return h('svg', {
      width: "14",
      height: "15",
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      h('path', {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        d: "M4.87255 1.15234H4.8388H4.83876C4.37869 1.15233 3.98189 1.15231 3.65692 1.18321C3.3129 1.21592 2.97309 1.28845 2.65645 1.48249C2.355 1.66722 2.10155 1.92067 1.91681 2.22213C1.72278 2.53877 1.65025 2.87857 1.61754 3.22259C1.58664 3.54756 1.58665 3.94437 1.58667 4.40444V4.40447V4.43822V10.56V10.5938V10.5938C1.58665 11.0539 1.58664 11.4507 1.61754 11.7757C1.65025 12.1197 1.72278 12.4595 1.91681 12.7761C2.10155 13.0776 2.355 13.3311 2.65645 13.5158C2.97309 13.7098 3.3129 13.7824 3.65692 13.8151C3.9819 13.846 4.37872 13.8459 4.83881 13.8459H4.87255H9.12771H9.16145C9.62154 13.8459 10.0184 13.846 10.3433 13.8151C10.6874 13.7824 11.0272 13.7098 11.3438 13.5158C11.6453 13.3311 11.8987 13.0776 12.0834 12.7761C12.2775 12.4595 12.35 12.1197 12.3827 11.7757C12.4136 11.4507 12.4136 11.0539 12.4136 10.5938V10.5601V4.43823V4.40448C12.4136 3.94439 12.4136 3.54757 12.3827 3.22259C12.35 2.87857 12.2775 2.53877 12.0834 2.22213C11.8987 1.92067 11.6453 1.66722 11.3438 1.48249C11.0272 1.28845 10.6874 1.21592 10.3433 1.18321C10.0184 1.15231 9.62157 1.15233 9.1615 1.15234H9.16146H9.12771H4.87255ZM3.43685 2.75598C3.47937 2.72992 3.5636 2.6924 3.79829 2.67009C4.04409 2.64672 4.36918 2.64593 4.87255 2.64593H9.12771C9.63108 2.64593 9.95617 2.64672 10.202 2.67009C10.4367 2.6924 10.5209 2.72992 10.5634 2.75598C10.6639 2.81755 10.7484 2.90204 10.81 3.00252C10.836 3.04504 10.8735 3.12927 10.8958 3.36396C10.9192 3.60976 10.92 3.93485 10.92 4.43823V10.5601C10.92 11.0634 10.9192 11.3885 10.8958 11.6343C10.8735 11.869 10.836 11.9532 10.81 11.9958C10.7484 12.0962 10.6639 12.1807 10.5634 12.2423C10.5209 12.2684 10.4367 12.3059 10.202 12.3282C9.95617 12.3516 9.63108 12.3523 9.12771 12.3523H4.87255C4.36918 12.3523 4.04409 12.3516 3.79829 12.3282C3.5636 12.3059 3.47937 12.2684 3.43685 12.2423C3.33636 12.1807 3.25188 12.0962 3.1903 11.9958C3.16424 11.9532 3.12673 11.869 3.10441 11.6343C3.08104 11.3885 3.08025 11.0634 3.08025 10.56V4.43822C3.08025 3.93485 3.08104 3.60976 3.10441 3.36396C3.12673 3.12927 3.16424 3.04504 3.1903 3.00252C3.25188 2.90204 3.33636 2.81755 3.43685 2.75598ZM4.66682 9.55233C4.25438 9.55233 3.92003 9.88668 3.92003 10.2991C3.92003 10.7116 4.25438 11.0459 4.66682 11.0459H7.46682C7.87926 11.0459 8.21361 10.7116 8.21361 10.2991C8.21361 9.88668 7.87926 9.55233 7.46682 9.55233H4.66682ZM3.92003 7.49914C3.92003 7.0867 4.25438 6.75235 4.66682 6.75235H9.33349C9.74593 6.75235 10.0803 7.0867 10.0803 7.49914C10.0803 7.91158 9.74593 8.24593 9.33349 8.24593H4.66682C4.25438 8.24593 3.92003 7.91158 3.92003 7.49914ZM4.66682 3.95233C4.25438 3.95233 3.92003 4.28668 3.92003 4.69913C3.92003 5.11157 4.25438 5.44592 4.66682 5.44592H9.33349C9.74593 5.44592 10.0803 5.11157 10.0803 4.69913C10.0803 4.28668 9.74593 3.95233 9.33349 3.95233H4.66682Z",
        fill: "currentColor"
      })
    ])
  }
}

const CircleIcon = {
  render () {
    return h('svg', {
      width: "14",
      height: "15",
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      h('g', { 'clip-path': "url(#clip0_1234_4618)" }, [
        h('path', {
          opacity: "0.05",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M11.3511 4.09408C7.80096 5.06229 4.5634 8.29985 3.59519 11.85L3.14497 11.7272C4.15666 8.01764 7.51876 4.65554 11.2283 3.64385L11.3511 4.09408Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.1",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M11.0887 3.69841C7.49879 4.70487 4.20524 7.99842 3.19878 11.5883L2.74943 11.4623C3.79987 7.71561 7.21598 4.2995 10.9627 3.24907L11.0887 3.69841Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.15",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M10.7521 3.32395C7.17819 4.38462 3.88993 7.67111 2.82618 11.2446L2.37891 11.1115C3.48764 7.38687 6.89415 3.98213 10.6193 2.87657L10.7521 3.32395Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.2",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M10.3103 2.98352C6.82376 4.11747 3.62057 7.31998 2.48545 10.8064L2.04171 10.6619C3.22302 7.03363 6.53748 3.71985 10.166 2.53973L10.3103 2.98352Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.25",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M9.81873 2.66887C6.45951 3.87364 3.38231 6.94831 2.17321 10.3069L1.73413 10.1489C2.99038 6.65927 6.17077 3.48142 9.66118 2.2296L9.81873 2.66887Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.3",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M9.24208 2.39574C6.0667 3.66828 3.17304 6.56069 1.8984 9.73574L1.46533 9.56188C2.78742 6.26864 5.7748 3.28251 9.06848 1.96256L9.24208 2.39574Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.35",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M8.59345 2.16906C5.65726 3.48951 2.99696 6.14814 1.67375 9.08381L1.24831 8.89204C2.61833 5.85251 5.36186 3.11067 8.40205 1.74345L8.59345 2.16906Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.4",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M7.84665 2.01362C5.22035 3.34858 2.85407 5.71358 1.51708 8.3394L1.10121 8.12766C2.483 5.41386 4.92083 2.97733 7.6352 1.59761L7.84665 2.01362Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.45",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M6.9646 1.96316C4.74777 3.25067 2.75672 5.2407 1.46766 7.45706L1.06426 7.22244C2.39404 4.93607 4.44333 2.88782 6.73023 1.55962L6.9646 1.96316Z",
          fill: "currentColor"
        }),
        h('path', {
          opacity: "0.5",
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M5.8838 2.09096C4.21834 3.21634 2.71585 4.71898 1.59069 6.38453L1.20399 6.1233C2.36256 4.4083 3.90762 2.86308 5.62253 1.70429L5.8838 2.09096Z",
          fill: "currentColor"
        }),
        h('path', {
          'fill-rule': "evenodd",
          'clip-rule': "evenodd",
          d: "M0.818604 7.49967C0.818604 4.08583 3.58607 1.31836 6.99991 1.31836C10.4137 1.31836 13.1812 4.08583 13.1812 7.49967C13.1812 10.9135 10.4137 13.681 6.99991 13.681C3.58607 13.681 0.818604 10.9135 0.818604 7.49967ZM6.99991 2.20503C4.07577 2.20503 1.70527 4.57552 1.70527 7.49967C1.70527 10.4238 4.07577 12.7943 6.99991 12.7943C9.92404 12.7943 12.2946 10.4238 12.2946 7.49967C12.2946 4.57552 9.92404 2.20503 6.99991 2.20503Z",
          fill: "currentColor"
        })
      ]),
      h('defs', {}, [
        h('clipPath', { id: "clip0_1234_4618" }, [
          h('rect', {
            width: "14",
            height: "14",
            fill: "white",
            transform: "translate(0 0.5)"
          })
        ])
      ])
    ])
  }
}

const GlobeIcon = {
  render () {
    return h('svg', {
      width: "14",
      height: "15",
      viewBox: "0 0 14 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      h('path', {
        'fill-rule': "evenodd",
        'clip-rule': "evenodd",
        d: "M5.25954 2.50351C4.02879 2.93212 3.00503 3.80257 2.37822 4.9249C2.94566 4.706 3.57741 4.53586 4.24386 4.41309C4.49372 3.72867 4.83185 3.08254 5.25954 2.50351ZM1.72484 7.10051C1.75648 6.6773 1.83791 6.26797 1.9633 5.87835C2.53477 5.57748 3.23395 5.34193 4.00598 5.17454C3.84163 5.80142 3.74602 6.45006 3.71825 7.10051H1.72484ZM4.41891 7.10051C4.45141 6.39394 4.57007 5.69576 4.77346 5.03401C5.36042 4.94513 5.97613 4.89223 6.59996 4.87637V7.10051H4.41891ZM7.39996 7.10051V4.87637C8.04528 4.89277 8.68192 4.94881 9.28704 5.04331C9.49546 5.70246 9.61704 6.39745 9.65046 7.10051H7.39996ZM7.39996 4.17616C7.94054 4.18933 8.48046 4.22925 9.00648 4.29656C8.66768 3.52477 8.19819 2.82344 7.60044 2.24425C7.53398 2.23675 7.46714 2.23047 7.39996 2.22544V4.17616ZM10.3512 7.10051C10.3227 6.4548 10.2254 5.81105 10.0584 5.1887C10.8049 5.3551 11.481 5.58582 12.0365 5.87826C12.1619 6.26791 12.2434 6.67727 12.275 7.10051H10.3512ZM9.81346 4.42378C10.4588 4.54566 11.0705 4.71225 11.6216 4.92483C11 3.8119 9.98811 2.94665 8.77109 2.51433C9.21007 3.09351 9.55713 3.73954 9.81346 4.42378ZM5.04484 4.29009C5.5546 4.22669 6.07697 4.1889 6.59996 4.17617V2.22544C6.53384 2.23038 6.46806 2.23654 6.40264 2.24389C5.82606 2.82139 5.37259 3.52051 5.04484 4.29009ZM3.71825 7.90051H1.72483C1.75074 8.24717 1.81007 8.58452 1.89959 8.90935C2.47093 9.22029 3.17647 9.4638 3.95853 9.63687C3.82311 9.06924 3.74323 8.48561 3.71825 7.90051ZM4.17649 10.3961C3.48789 10.2655 2.83768 10.0839 2.25887 9.84976C2.87024 11.0812 3.94727 12.0406 5.25963 12.4976C4.79215 11.8647 4.43167 11.1517 4.17649 10.3961ZM4.96741 10.5219C5.50164 10.5912 6.05046 10.6323 6.59996 10.6456V12.7757C6.53387 12.7707 6.46812 12.7646 6.40274 12.7572C5.77925 12.1328 5.2997 11.3661 4.96741 10.5219ZM6.59996 9.94544C5.95657 9.92909 5.32182 9.87333 4.71832 9.77934C4.54852 9.17384 4.44836 8.54062 4.41891 7.90051H6.59996V9.94544ZM7.39996 10.6456V12.7757C7.46711 12.7706 7.53392 12.7644 7.60035 12.7568C8.24677 12.1305 8.74319 11.3614 9.08655 10.5148C8.53532 10.5884 7.96801 10.6318 7.39996 10.6456ZM9.34392 9.76949C8.72187 9.86945 8.06553 9.92853 7.39996 9.94544V7.90051H9.65046C9.6202 8.53699 9.5177 9.16685 9.34392 9.76949ZM9.88284 10.3847C9.62109 11.1404 9.25099 11.8535 8.77101 12.4868C10.0694 12.0256 11.1344 11.0716 11.741 9.84983C11.1789 10.0772 10.5494 10.255 9.88284 10.3847ZM12.1003 8.90944C11.545 9.21162 10.863 9.4501 10.1071 9.62214C10.2445 9.05925 10.3256 8.48067 10.3512 7.90051H12.275C12.2491 8.24721 12.1898 8.58459 12.1003 8.90944ZM0.809937 7.50055C0.809937 4.0819 3.58129 1.31055 6.99994 1.31055C10.4186 1.31055 13.1899 4.0819 13.1899 7.50055C13.1899 10.9192 10.4186 13.6905 6.99994 13.6905C3.58129 13.6905 0.809937 10.9192 0.809937 7.50055Z",
        fill: "currentColor"
      })
    ])
  }
}

const SettingsIcon = {
  render () {
    return h('svg', {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      'xmlns:xlink': "http://www.w3.org/1999/xlink"
    }, [
      h('rect', {
        width: "12",
        height: "12",
        fill: "url(#pattern0_1253_4566)"
      }),
      h('defs', {}, [
        h('pattern', {
          id: "pattern0_1253_4566",
          patternContentUnits: "objectBoundingBox",
          width: "1",
          height: "1"
        }, [
          h('use', {
            'xlink:href': "#image0_1253_4566",
            transform: "scale(0.0104167)"
          })
        ]),
        h('image', {
          id: "image0_1253_4566",
          width: "96",
          height: "96",
          'xlink:href': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGu0lEQVR4nO2dW4hVVRiAtzNW6IwWpdINMu1CUhGFRimoMIUGvRToKOFjwSRdqReDsGlKi6BMjYIswrxkit3eAh+MylTCiC4UWXYzzaZs1Bydvljwnzidztl7Xfbea+8964N5Gc7617/W2ntd/svaURQIBAKBQCAQCAQCBQd4AjjC/xkAlvvWr9IA00hmqm89Kwtwp8YA9PjWsxQA7RZlVmkMwKo8dCktwGhgKfC7/HUblN2mMQDbDOQtqNND6TQ6qjLAzcDehg4bBGZrlj+gMQAHNWVNB443lP0BWASMiKoEMBl4L6bTDgATE2SMR5/xCbImJgym0nVyVBWA3Rqd9gnQGSNjlsEAzIqR0wns0ZCxK6oKMsfqsBVoayg7FrgBWG8wAOulzNgGWW3AFk0Z/VFVADYYdF4fMAVYIm/OEPYMiYyHRGavQdkNUVUA5lI+5kRVQe2zge8pDz9W7myg7DSUh2VR1QAupTxcFlURYAfF58OoiqjTJbCR4rOxiifhkcAah075BXgdeFDjt+o3m6WMLUrXkVEJzAu75ZC1Qbaa7S06X/fwU08/sAK4vv5wRgINhy5l73nW4CBYz5ZmgyA7urnSZiV3FzAp4+5uOp1sb7F9W15bxOR3pk/+z8BdrSyTSYVblOkA7gb2G+qypjYdqTZJ21QbG9me67QlZtwkdhjO+YPAY0km4SQhCWXVQCyTunTZqLl5WJB6R8fY8/eRLp8BV2rWH4umjKuAL1Juw75c/AniuEiT1+KsoE3qj8VATqcs7Gmy1LpjNZVut1zQWvFMo/VTQ4dYDGW1ySKdFv2m7fE5ACssdYjFUubKUgyAKNvdxJVnM+20WdYfi6VM9SZscmyT6pP5NvXbKDzdYktX43NgjEPdsTjIVWvCp9jxq65fOzWA8zVdjY1PyeWO9cbiKPsKi7dbuVIvdKk3cnxqlBtRl4dTqDOWFOQ/gj5bTXZwmSDzp3IjJqFCPkY51nWeRj3npHDO+Umjnr7MF1xdxN+axB0O8s8FXtE8waop5CXgbIf6ekrlMxCnd9IiZfX0A/Nke2fKb8CtDm/BoQT5S6KiIBbBOJ60lHsP8DduURGLLet+qhRxQxK3kxQ6co2F3FscO7+GkjEvg1B41ebTI98AXRpGqhEWi+1h0uMP08VZTOlq4xBHV+QLYJyECyZFrK21kP0q6fOyhR5JbVsnfTDOVLbN66h2BqslRPygQcMXWzz9J0ifQdOdkTiGdDkofbNa+mqacUfH5GS5YPSaAg+QHfcZ6nKj9/giSX5zwchfCrxDdrxhqMtFjvUNGHd4EyVcOcOwvu/Ijr2GupzpWqFxhzdRwpVTDOs7SnYcMdTlVNcKjTu8iRJ5D8CfZMfh4TgAplPQ12THl4a6nOVaoXGHZ7AIX2zg7rw95QNYI4eljvacAooHihBWnpjoAMwEPiY/VF0zNfS6ybGex50HIIWD2L0J2Yqb8IfyTV8Qo9/9DgexqUUxRWxqEaH2KHAM/xwVL1hHEz1VkK9/U4SjMW5/zXMkBq7bNIxcPlApVAvrYkHbNRLD/Rnj6gZgDHAyQdEZyiSdkKxdFD4CrtPISx5qTIMtskNmb0q2/bxQnftNKRwyCsnpTZtjEi29UMM92GpRnC/O8yzWmkK5JHWc8iZsro+1kRikFzVjdv4CXqh3wChZGQTiTomKgEFYig574iLMZCCUjf4tOTEPyN9XwJvK96AiKGLKz9a8J0KHXu+5ZBKYZZN+1MghyWAZmdMDs8gxh6zG294WYsvQxEZOAM/72EcrG5Vky6gpy4X8QxMdg3NrvOsaJ5pSWy6RKc2F/IJzJT/MNTz9/cKE9UX/TksfOLbpuMn1a0VI0FgVFQTgueGYIWOVopRBe9LKjsktQ2ZpBnv+UZkq3Tr+0yS03n+Snig+Cvg2gzTVqzNX/r+JGGmdB+qNeR1lTtQ+LmbhzozPLb2lTtTO6aqCnjSTnsX/0COyy39VgSg0CdgpC09Wl3U8Ld64Nsut5bVy4UdWl3X0Sx/ke1mHp+tq1krY4hzl6AcmAKfJ3wT53xz5zVrNW3bLe12NKeHCpgIQrizzSLi0zzPh2kqPhItbPROuLi7X5d29dZd373K8vPukyFgiB6m+4Xp5d7/B4aetSRpsl0Sh6bJOyjS7vn7rcLy+Xp0Wk9iT4wcclBsxiZ1RVRCzRdk+YTIpGkYf8Znl4SM+M4bNR3xafMaqX/7me/yMVXedHtX/jJUr6H3IbaVvPSsL4VOG3gdgmsYbED7mmfEgLGuRODiQWk5WIBAIBAKBQCAQCETZ8Q9mxHUqZFU66AAAAABJRU5ErkJggg=="
        })
      ])
    ])
  }
}

const SearchIcon = {
  render () {
    return h('svg', {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, [
      h('path', {
        d: "M4.5232 7.4729L1.5 10.5M3.5 5C3.5 6.933 5.067 8.5 7 8.5C8.93299 8.5 10.5 6.933 10.5 5C10.5 3.06701 8.93299 1.5 7 1.5C5.067 1.5 3.5 3.06701 3.5 5Z",
        stroke: "#ABABAB",
        'stroke-linecap': "round",
        'stroke-linejoin': "round"
      })
    ])
  }
}

const HashIcon = {
  render () {
    return h('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100"
    }, [
      h('rect', {
        width: "100",
        height: "100",
        fill: "none"
      }),
      h('g', {
        stroke: "black",
        'stroke-width': "4",
        'stroke-linecap': "round"
      }, [
        h('line', {
          x1: "25",
          y1: "2",
          x2: "25",
          y2: "98"
        }),
        h('line', {
          x1: "50",
          y1: "2",
          x2: "50",
          y2: "98"
        }),
        h('line', {
          x1: "75",
          y1: "2",
          x2: "75",
          y2: "98"
        }),
        h('line', {
          x1: "2",
          y1: "25",
          x2: "98",
          y2: "25"
        }),
        h('line', {
          x1: "2",
          y1: "50",
          x2: "98",
          y2: "50"
        }),
        h('line', {
          x1: "2",
          y1: "75",
          x2: "98",
          y2: "75"
        })
      ])
    ])
  }
}


export {
  ChevronLeft,
  ChevronsUpDown,
  Pen,
  Share2,
  OverviewIcon,
  GlobeIcon,
  CircleIcon,
  SettingsIcon,
  Logout,
  SearchIcon,
  HashIcon
}