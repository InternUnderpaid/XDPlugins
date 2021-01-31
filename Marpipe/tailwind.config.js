// IF HOVER, FOCUS, ETC. DONT WORK EDIT THE PROPERTY AT THE BOTTOM OF THE FILE UNDER 'VARIANTS'
// EDITING THIS WILL CAUSE WEBPACK TO REBUILD

module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   assetLibBreak: "1400px",
    //   xl: "1280px"
    // },
    colors: {
      transparent: "transparent",

      //..... Black & White .....//

      black: {
        default: "rgba(0,0,0,1)",
        90: "rgba(0,0,0,0.9)",
        80: "rgba(0,0,0,0.8)",
        70: "rgba(0,0,0,0.7)",
        60: "rgba(0,0,0,0.6)",
        50: "rgba(0,0,0,0.5)",
        40: "rgba(0,0,0,0.4)",
        30: "rgba(0,0,0,0.3)",
        20: "rgba(0,0,0,0.2)",
        10: "rgba(0,0,0,0.1)"
      },
      neutral: {
        default: "rgba(44,45,51,1)",
        90: "rgba(44,45,51,0.9)",
        80: "rgba(44,45,51,0.8)",
        70: "rgba(44,45,51,0.7)",
        60: "rgba(44,45,51,0.6)",
        50: "rgba(44,45,51,0.5)",
        40: "rgba(44,45,51,0.4)",
        30: "rgba(44,45,51,0.3)",
        20: "rgba(44,45,51,0.2)",
        10: "rgba(44,45,51,0.1)"
      },
      white: {
        default: "rgba(255,255,255,1)",
        90: "rgba(255,255,255,0.9)",
        80: "rgba(255,255,255,0.8)",
        70: "rgba(255,255,255,0.7)",
        60: "rgba(255,255,255,0.6)",
        50: "rgba(255,255,255,0.5)",
        40: "rgba(255,255,255,0.4)",
        30: "rgba(255,255,255,0.3)",
        20: "rgba(255,255,255,0.2)",
        10: "rgba(255,255,255,0.1)"
      },

      //..... Gray Colors .....//
      'super-gray-1': {
        default: "rgba(29, 30, 36, 1)",
        10: "rgba(29, 30, 36, 0.1)",
        20: "rgba(29, 30, 36, 0.2)",
        30: "rgba(29, 30, 36, 0.3)",
        40: "rgba(29, 30, 36, 0.4)",
        50: "rgba(29, 30, 36, 0.5)",
        60: "rgba(29, 30, 36, 0.6)",
        70: "rgba(29, 30, 36, 0.7)",
        80: "rgba(29, 30, 36, 0.8)",
        90: "rgba(29, 30, 36, 0.9)",
      },
      'super-gray-2': {
        default: "rgba(17, 18, 26, 1)",
        10: "rgba(17, 18, 26, 0.1)",
        20: "rgba(17, 18, 26, 0.2)",
        30: "rgba(17, 18, 26, 0.3)",
        40: "rgba(17, 18, 26, 0.4)",
        50: "rgba(17, 18, 26, 0.5)",
        60: "rgba(17, 18, 26, 0.6)",
        70: "rgba(17, 18, 26, 0.7)",
        80: "rgba(17, 18, 26, 0.8)",
        90: "rgba(17, 18, 26, 0.9)",
      },
      gray: {
        100: "rgba(44, 45, 51, 1)",
        "100-10": "rgba(44, 45, 51, 0.1)",
        "100-20": "rgba(44, 45, 51, 0.2)",
        "100-30": "rgba(44, 45, 51, 0.3)",
        "100-40": "rgba(44, 45, 51, 0.4)",
        "100-50": "rgba(44, 45, 51, 0.5)",
        "100-60": "rgba(44, 45, 51, 0.6)",
        "100-70": "rgba(44, 45, 51, 0.7)",
        "100-80": "rgba(44, 45, 51, 0.8)",
        "100-90": "rgba(44, 45, 51, 0.9)",
        200: "rgba(66, 68, 77, 1)",
        "200-10": "rgba(66, 68, 77, 0.1)",
        "200-20": "rgba(66, 68, 77, 0.2)",
        "200-30": "rgba(66, 68, 77, 0.3)",
        "200-40": "rgba(66, 68, 77, 0.4)",
        "200-50": "rgba(66, 68, 77, 0.5)",
        "200-60": "rgba(66, 68, 77, 0.6)",
        "200-70": "rgba(66, 68, 77, 0.7)",
        "200-80": "rgba(66, 68, 77, 0.8)",
        "200-90": "rgba(66, 68, 77, 0.9)",
        300: "rgba(83, 86, 96, 1)",
        "300-10": "rgba(83, 86, 96, 0.1)",
        "300-20": "rgba(83, 86, 96, 0.2)",
        "300-30": "rgba(83, 86, 96, 0.3)",
        "300-40": "rgba(83, 86, 96, 0.4)",
        "300-50": "rgba(83, 86, 96, 0.5)",
        "300-60": "rgba(83, 86, 96, 0.6)",
        "300-70": "rgba(83, 86, 96, 0.7)",
        "300-80": "rgba(83, 86, 96, 0.8)",
        "300-90": "rgba(83, 86, 96, 0.9)",
        400: "rgba(100, 103, 114, 1)",
        "400-10": "rgba(100, 103, 114, 0.1)",
        "400-20": "rgba(100, 103, 114, 0.2)",
        "400-30": "rgba(100, 103, 114, 0.3)",
        "400-40": "rgba(100, 103, 114, 0.4)",
        "400-50": "rgba(100, 103, 114, 0.5)",
        "400-60": "rgba(100, 103, 114, 0.6)",
        "400-70": "rgba(100, 103, 114, 0.7)",
        "400-80": "rgba(100, 103, 114, 0.8)",
        "400-90": "rgba(100, 103, 114, 0.9)",
        500: "rgba(134, 138, 150, 1)",
        "500-10": "rgba(134, 138, 150, 0.1)",
        "500-20": "rgba(134, 138, 150, 0.2)",
        "500-30": "rgba(134, 138, 150, 0.3)",
        "500-40": "rgba(134, 138, 150, 0.4)",
        "500-50": "rgba(134, 138, 150, 0.5)",
        "500-60": "rgba(134, 138, 150, 0.6)",
        "500-70": "rgba(134, 138, 150, 0.7)",
        "500-80": "rgba(134, 138, 150, 0.8)",
        "500-90": "rgba(134, 138, 150, 0.9)",
        600: "rgba(191, 193, 203, 1)",
        "600-10": "rgba(191, 193, 203, .1)",
        "600-20": "rgba(191, 193, 203, .2)",
        "600-30": "rgba(191, 193, 203, .3)",
        "600-40": "rgba(191, 193, 203, .4)",
        "600-50": "rgba(191, 193, 203, .5)",
        "600-60": "rgba(191, 193, 203, .6)",
        "600-70": "rgba(191, 193, 203, .7)",
        "600-80": "rgba(191, 193, 203, .8)",
        "600-90": "rgba(191, 193, 203, .9)",
        700: "rgba(211, 213, 224, 1)",
        "700-10": "rgba(211, 213, 224, 0.1)",
        "700-20": "rgba(211, 213, 224, 0.2)",
        "700-30": "rgba(211, 213, 224, 0.3)",
        "700-40": "rgba(211, 213, 224, 0.4)",
        "700-50": "rgba(211, 213, 224, 0.5)",
        "700-60": "rgba(211, 213, 224, 0.6)",
        "700-70": "rgba(211, 213, 224, 0.7)",
        "700-80": "rgba(211, 213, 224, 0.8)",
        "700-90": "rgba(211, 213, 224, 0.9)",
        800: "rgba(229, 230, 234, 1)",
        "800-10": "rgba(229, 230, 234, 0.1)",
        "800-20": "rgba(229, 230, 234, 0.2)",
        "800-30": "rgba(229, 230, 234, 0.3)",
        "800-40": "rgba(229, 230, 234, 0.4)",
        "800-50": "rgba(229, 230, 234, 0.5)",
        "800-60": "rgba(229, 230, 234, 0.6)",
        "800-70": "rgba(229, 230, 234, 0.7)",
        "800-80": "rgba(229, 230, 234, 0.8)",
        "800-90": "rgba(229, 230, 234, 0.9)",
      },

      red: {
        400: "rgba(204, 81, 65, 1)",
        "400-10": "rgba(204, 81, 65, 0.1)",
        "400-20": "rgba(204, 81, 65, 0.2)",
        "400-30": "rgba(204, 81, 65, 0.3)",
        "400-40": "rgba(204, 81, 65, 0.4)",
        "400-50": "rgba(204, 81, 65, 0.5)",
        "400-60": "rgba(204, 81, 65, 0.6)",
        "400-70": "rgba(204, 81, 65, 0.7)",
        "400-80": "rgba(204, 81, 65, 0.8)",
        "400-90": "rgba(204, 81, 65, 0.9)",
        500: "rgba(214, 99, 86, 1)",
        "500-10": "rgba(214, 99, 86, 0.1)",
        "500-20": "rgba(214, 99, 86, 0.2)",
        "500-30": "rgba(214, 99, 86, 0.3)",
        "500-40": "rgba(214, 99, 86, 0.4)",
        "500-50": "rgba(214, 99, 86, 0.5)",
        "500-60": "rgba(214, 99, 86, 0.6)",
        "500-70": "rgba(214, 99, 86, 0.7)",
        "500-80": "rgba(214, 99, 86, 0.8)",
        "500-90": "rgba(214, 99, 86, 0.9)",
        600: "rgba(224, 117, 108, 1)",
        "600-10": "rgba(224, 117, 108, 0.1)",
        "600-20": "rgba(224, 117, 108, 0.2)",
        "600-30": "rgba(224, 117, 108, 0.3)",
        "600-40": "rgba(224, 117, 108, 0.4)",
        "600-50": "rgba(224, 117, 108, 0.5)",
        "600-60": "rgba(224, 117, 108, 0.6)",
        "600-70": "rgba(224, 117, 108, 0.7)",
        "600-80": "rgba(224, 117, 108, 0.8)",
        "600-90": "rgba(224, 117, 108, 0.9)",
        700: "rgba(235, 138, 131, 1)",
        "700-10": "rgba(235, 138, 131, 0.1)",
        "700-20": "rgba(235, 138, 131, 0.2)",
        "700-30": "rgba(235, 138, 131, 0.3)",
        "700-40": "rgba(235, 138, 131, 0.4)",
        "700-50": "rgba(235, 138, 131, 0.5)",
        "700-60": "rgba(235, 138, 131, 0.6)",
        "700-70": "rgba(235, 138, 131, 0.7)",
        "700-80": "rgba(235, 138, 131, 0.8)",
        "700-90": "rgba(235, 138, 131, 0.9)"
      },
      blue: {
        default: "rgba(20, 115, 230, 1)",
        400: "rgba(72, 190, 199, 1)",
        "400-10": "rgba(72, 190, 199, 0.1)",
        "400-20": "rgba(72, 190, 199, 0.2)",
        "400-30": "rgba(72, 190, 199, 0.3)",
        "400-40": "rgba(72, 190, 199, 0.4)",
        "400-50": "rgba(72, 190, 199, 0.5)",
        "400-60": "rgba(72, 190, 199, 0.6)",
        "400-70": "rgba(72, 190, 199, 0.7)",
        "400-80": "rgba(72, 190, 199, 0.8)",
        "400-90": "rgba(72, 190, 199, 0.9)",
        500: "rgba(94, 206, 214, 1)",
        "500-10": "rgba(94, 206, 214, 0.1)",
        "500-20": "rgba(94, 206, 214, 0.2)",
        "500-30": "rgba(94, 206, 214, 0.3)",
        "500-40": "rgba(94, 206, 214, 0.4)",
        "500-50": "rgba(94, 206, 214, 0.5)",
        "500-60": "rgba(94, 206, 214, 0.6)",
        "500-70": "rgba(94, 206, 214, 0.7)",
        "500-80": "rgba(94, 206, 214, 0.8)",
        "500-90": "rgba(94, 206, 214, 0.9)",
        600: "rgba(117, 219, 224, 1)",
        "600-10": "rgba(117, 219, 224, 0.1)",
        "600-20": "rgba(117, 219, 224, 0.2)",
        "600-30": "rgba(117, 219, 224, 0.3)",
        "600-40": "rgba(117, 219, 224, 0.4)",
        "600-50": "rgba(117, 219, 224, 0.5)",
        "600-60": "rgba(117, 219, 224, 0.6)",
        "600-70": "rgba(117, 219, 224, 0.7)",
        "600-80": "rgba(117, 219, 224, 0.8)",
        "600-90": "rgba(117, 219, 224, 0.9)",
        700: "rgba(117, 219, 224, 1)",
        "700-10": "rgba(117, 219, 224, 0.1)",
        "700-20": "rgba(117, 219, 224, 0.2)",
        "700-30": "rgba(117, 219, 224, 0.3)",
        "700-40": "rgba(117, 219, 224, 0.4)",
        "700-50": "rgba(117, 219, 224, 0.5)",
        "700-60": "rgba(117, 219, 224, 0.6)",
        "700-70": "rgba(117, 219, 224, 0.7)",
        "700-80": "rgba(117, 219, 224, 0.8)",
        "700-90": "rgba(117, 219, 224, 0.9)"
      },
      orange: {
        400: "rgba(214, 94, 43, 1)",
        "400-10": "rgba(214, 94, 43, 0.1)",
        "400-20": "rgba(214, 94, 43, 0.2)",
        "400-30": "rgba(214, 94, 43, 0.3)",
        "400-40": "rgba(214, 94, 43, 0.4)",
        "400-50": "rgba(214, 94, 43, 0.5)",
        "400-60": "rgba(214, 94, 43, 0.6)",
        "400-70": "rgba(214, 94, 43, 0.7)",
        "400-80": "rgba(214, 94, 43, 0.8)",
        "400-90": "rgba(214, 94, 43, 0.9)",
        500: "rgba(224, 102, 54, 1)",
        "500-10": "rgba(224, 102, 54, 0.1)",
        "500-20": "rgba(224, 102, 54, 0.2)",
        "500-30": "rgba(224, 102, 54, 0.3)",
        "500-40": "rgba(224, 102, 54, 0.4)",
        "500-50": "rgba(224, 102, 54, 0.5)",
        "500-60": "rgba(224, 102, 54, 0.6)",
        "500-70": "rgba(224, 102, 54, 0.7)",
        "500-80": "rgba(224, 102, 54, 0.8)",
        "500-90": "rgba(224, 102, 54, 0.9)",
        600: "rgba(235, 111, 66, 1)",
        "600-10": "rgba(235, 111, 66, 0.1)",
        "600-20": "rgba(235, 111, 66, 0.2)",
        "600-30": "rgba(235, 111, 66, 0.3)",
        "600-40": "rgba(235, 111, 66, 0.4)",
        "600-50": "rgba(235, 111, 66, 0.5)",
        "600-60": "rgba(235, 111, 66, 0.6)",
        "600-70": "rgba(235, 111, 66, 0.7)",
        "600-80": "rgba(235, 111, 66, 0.8)",
        "600-90": "rgba(235, 111, 66, 0.9)",
        700: "rgba(245, 120, 78, 1)",
        "700-10": "rgba(245, 120, 78, 0.1)",
        "700-20": "rgba(245, 120, 78, 0.2)",
        "700-30": "rgba(245, 120, 78, 0.3)",
        "700-40": "rgba(245, 120, 78, 0.4)",
        "700-50": "rgba(245, 120, 78, 0.5)",
        "700-60": "rgba(245, 120, 78, 0.6)",
        "700-70": "rgba(245, 120, 78, 0.7)",
        "700-80": "rgba(245, 120, 78, 0.8)",
        "700-90": "rgba(245, 120, 78, 0.9)"
      },
      yellow: {
        400: "rgba(224, 185, 54, 1)",
        "400-10": "rgba(224, 185, 54, 0.1)",
        "400-10": "rgba(224, 185, 54, 0.1)",
        "400-20": "rgba(224, 185, 54, 0.2)",
        "400-30": "rgba(224, 185, 54, 0.3)",
        "400-40": "rgba(224, 185, 54, 0.4)",
        "400-50": "rgba(224, 185, 54, 0.5)",
        "400-60": "rgba(224, 185, 54, 0.6)",
        "400-70": "rgba(224, 185, 54, 0.7)",
        "400-80": "rgba(224, 185, 54, 0.8)",
        "400-90": "rgba(224, 185, 54, 0.9)",
        500: "	rgba(235, 197, 75, 1)",
        "500-10": "	rgba(235, 197, 75, 0.1)",
        "500-20": "	rgba(235, 197, 75, 0.2)",
        "500-30": "	rgba(235, 197, 75, 0.3)",
        "500-40": "	rgba(235, 197, 75, 0.4)",
        "500-50": "	rgba(235, 197, 75, 0.5)",
        "500-60": "	rgba(235, 197, 75, 0.6)",
        "500-70": "	rgba(235, 197, 75, 0.7)",
        "500-80": "	rgba(235, 197, 75, 0.8)",
        "500-90": "	rgba(235, 197, 75, 0.9)",
        600: "rgba(240, 206, 96, 1)",
        "600-10": "rgba(240, 206, 96, 0.1)",
        "600-20": "rgba(240, 206, 96, 0.2)",
        "600-30": "rgba(240, 206, 96, 0.3)",
        "600-40": "rgba(240, 206, 96, 0.4)",
        "600-50": "rgba(240, 206, 96, 0.5)",
        "600-60": "rgba(240, 206, 96, 0.6)",
        "600-70": "rgba(240, 206, 96, 0.7)",
        "600-80": "rgba(240, 206, 96, 0.8)",
        "600-90": "rgba(240, 206, 96, 0.9)",
        700: "rgba(245, 215, 118, 1)",
        "700-10": "rgba(245, 215, 118, 0.1)",
        "700-20": "rgba(245, 215, 118, 0.2)",
        "700-30": "rgba(245, 215, 118, 0.3)",
        "700-40": "rgba(245, 215, 118, 0.4)",
        "700-50": "rgba(245, 215, 118, 0.5)",
        "700-60": "rgba(245, 215, 118, 0.6)",
        "700-70": "rgba(245, 215, 118, 0.7)",
        "700-80": "rgba(245, 215, 118, 0.8)",
        "700-90": "rgba(245, 215, 118, 0.9)"
      },
      green: {
        400: "rgba(65, 204, 102, 1)",
        "400-10": "rgba(65, 204, 102, 0.1)",
        "400-10": "rgba(65, 204, 102, 0.1)",
        "400-20": "rgba(65, 204, 102, 0.2)",
        "400-30": "rgba(65, 204, 102, 0.3)",
        "400-40": "rgba(65, 204, 102, 0.4)",
        "400-50": "rgba(65, 204, 102, 0.5)",
        "400-60": "rgba(65, 204, 102, 0.6)",
        "400-70": "rgba(65, 204, 102, 0.7)",
        "400-80": "rgba(65, 204, 102, 0.8)",
        "400-90": "rgba(65, 204, 102, 0.9)",
        500: "rgba(86, 214, 118, 1)",
        "500-10": "rgba(86, 214, 118, 0.1)",
        "500-20": "rgba(86, 214, 118, 0.2)",
        "500-30": "rgba(86, 214, 118, 0.3)",
        "500-40": "rgba(86, 214, 118, 0.4)",
        "500-50": "rgba(86, 214, 118, 0.5)",
        "500-60": "rgba(86, 214, 118, 0.6)",
        "500-70": "rgba(86, 214, 118, 0.7)",
        "500-80": "rgba(86, 214, 118, 0.8)",
        "500-90": "rgba(86, 214, 118, 0.9)",
        600: "rgba(108, 224, 137, 1)",
        "600-10": "rgba(108, 224, 137, 0.1)",
        "600-20": "rgba(108, 224, 137, 0.2)",
        "600-30": "rgba(108, 224, 137, 0.3)",
        "600-40": "rgba(108, 224, 137, 0.4)",
        "600-50": "rgba(108, 224, 137, 0.5)",
        "600-60": "rgba(108, 224, 137, 0.6)",
        "600-70": "rgba(108, 224, 137, 0.7)",
        "600-80": "rgba(108, 224, 137, 0.8)",
        "600-90": "rgba(108, 224, 137, 0.9)",
        700: "rgba(131, 235, 155, 1)",
        "700-10": "rgba(131, 235, 155, 0.1)",
        "700-20": "rgba(131, 235, 155, 0.2)",
        "700-30": "rgba(131, 235, 155, 0.3)",
        "700-40": "rgba(131, 235, 155, 0.4)",
        "700-50": "rgba(131, 235, 155, 0.5)",
        "700-60": "rgba(131, 235, 155, 0.6)",
        "700-70": "rgba(131, 235, 155, 0.7)",
        "700-80": "rgba(131, 235, 155, 0.8)",
        "700-90": "rgba(131, 235, 155, 0.9)"
      },
      purple: {
        400: "rgba(70, 65, 204, 1)",
        "400-10": "rgba(70, 65, 204, 0.1)",
        "400-10": "rgba(70, 65, 204, 0.1)",
        "400-20": "rgba(70, 65, 204, 0.2)",
        "400-30": "rgba(70, 65, 204, 0.3)",
        "400-40": "rgba(70, 65, 204, 0.4)",
        "400-50": "rgba(70, 65, 204, 0.5)",
        "400-60": "rgba(70, 65, 204, 0.6)",
        "400-70": "rgba(70, 65, 204, 0.7)",
        "400-80": "rgba(70, 65, 204, 0.8)",
        "400-90": "rgba(70, 65, 204, 0.9)",
        500: "rgba(88, 86, 214, 1)",
        "500-10": "rgba(88, 86, 214, 0.1)",
        "500-20": "rgba(88, 86, 214, 0.2)",
        "500-30": "rgba(88, 86, 214, 0.3)",
        "500-40": "rgba(88, 86, 214, 0.4)",
        "500-50": "rgba(88, 86, 214, 0.5)",
        "500-60": "rgba(88, 86, 214, 0.6)",
        "500-70": "rgba(88, 86, 214, 0.7)",
        "500-80": "rgba(88, 86, 214, 0.8)",
        "500-90": "rgba(88, 86, 214, 0.9)",
        600: "rgba(108, 108, 224, 1)",
        "600-10": "rgba(108, 108, 224, 0.1)",
        "600-20": "rgba(108, 108, 224, 0.2)",
        "600-30": "rgba(108, 108, 224, 0.3)",
        "600-40": "rgba(108, 108, 224, 0.4)",
        "600-50": "rgba(108, 108, 224, 0.5)",
        "600-60": "rgba(108, 108, 224, 0.6)",
        "600-70": "rgba(108, 108, 224, 0.7)",
        "600-80": "rgba(108, 108, 224, 0.8)",
        "600-90": "rgba(108, 108, 224, 0.9)",
        700: "rgba(131, 133, 235, 1)",
        "700-10": "rgba(131, 133, 235, 0.1)",
        "700-20": "rgba(131, 133, 235, 0.2)",
        "700-30": "rgba(131, 133, 235, 0.3)",
        "700-40": "rgba(131, 133, 235, 0.4)",
        "700-50": "rgba(131, 133, 235, 0.5)",
        "700-60": "rgba(131, 133, 235, 0.6)",
        "700-70": "rgba(131, 133, 235, 0.7)",
        "700-80": "rgba(131, 133, 235, 0.8)",
        "700-90": "rgba(131, 133, 235, 0.9)"
      }
    },
    spacing: {
      px: "1px",
      "5px": "5px",
      "6px": "6px",
      "12px": "12px",
      "0": "0",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem",
      "12": "3rem",
      "14": "3.5rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "36": "9rem",
      "40": "10rem",
      "48": "12rem",
      "56": "14rem",
      "64": "16rem",
      "72": "18rem",
      // "80": "20rem",
      // "88": "22rem",
      // "100": "25rem",
      // "115": "28.75rem",
      // "120": "30rem",
      // "128": "32rem",
      // "144": "36rem",
      // "192": "48rem",
      // "200": "50rem",
      // "224": "56rem",
      // "256": "64rem"
    },
    backgroundColor: theme => theme("colors"),
    // backgroundPosition: {
    //   bottom: "bottom",
    //   center: "center",
    //   left: "left",
    //   "left-bottom": "left bottom",
    //   "left-top": "left top",
    //   right: "right",
    //   "right-bottom": "right bottom",
    //   "right-top": "right top",
    //   top: "top"
    // },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderColor: theme => ({
      ...theme("colors"),
      default: theme("colors.gray.300", "currentColor")
    }),
    borderRadius: {
      none: "0",
      sm: "2px",
      'sm-t': "2px 2px 0px 0px",
      'sm-r': "0px 2px 2px 0px",
      'sm-b': "0px 0px 2px 2px",
      'sm-l': "2px 0px 0px 2px",
      default: "3px",
      't': "3px 3px 0px 0px",
      'r': "0px 3px 3px 0px",
      'b': "0px 0px 3px 3px",
      'l': "3px 0px 0px 3px",
      lg: "6px",
      'lg-t': "6px 6px 0px 0px",
      'lg-r': "0px 6px 6px 0px",
      'lg-b': "0px 0px 6px 6px",
      'lg-l': "6px 0px 0px 6px",
      full: "20px",
      50: "50%"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "8": "8px"
    },
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0px 2px 2px rgba(0, 0, 0, 0.25)",
      'sm-dark': "0px 2px 2px rgba(0, 0, 0, 0.5)",
      default: "0px 3px 6px rgba(0, 0, 0, 0.25)",
      'dark': "0px 3px 6px rgba(0, 0, 0, 0.5)",
      lg: "0px 6px 12px rgba(0, 0, 0, 0.25)",
      'lg-dark': "0px 6px 12px rgba(0, 0, 0, 0.55)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none"
    },
    container: {},
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed"
    },
    fill: theme => ({
      ...theme("colors"),
      current: "currentColor"
    }),
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": "0",
      default: "1"
    },
    flexShrink: {
      "0": "0",
      default: "1"
    },
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
        '"Rubik"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ],
      rubik: ['"Rubik"']
    },
    fontSize: {
      "3xs": "0.6rem",
      "2xs": "0.7rem",
      xs: "0.8rem",
      sm: "0.9rem",
      base: "1rem",
      lg: "1.1rem",
      xl: "1.2rem",
      "2xl": "1.3rem",
      "3xl": "1.4rem",
      "4xl": "1.5rem",
      "5xl": "1.6rem",
      "6xl": "1.7rem",
      "7xl": "1.8rem",
    },
    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "600"
    },
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vh"
    }),
    inset: {
      "0": "0",
      auto: "auto"
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.25rem",
      "10": "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing"))
    }),
    maxHeight: {
      '0': "0",
      full: "100%",
      screen: "100vh"
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      ...breakpoints(theme("screens"))
    }),
    minHeight: {
      "0": "0",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      "0": "0",
      full: "100%"
    },
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      "0": "0",
      "10": "0.1",
      "20": "0.2",
      "25": "0.25",
      "30": "0.3",
      "40": "0.4",
      "50": "0.5",
      "60": "0.6",
      "70": "0.7",
      "75": "0.75",
      "80": "0.8",
      "90": "0.9",
      "95": "0.95",
      "100": "1"
    },
    // order: {
    //   first: "-9999",
    //   last: "9999",
    //   none: "0",
    //   "1": "1",
    //   "2": "2",
    //   "3": "3",
    //   "4": "4",
    //   "5": "5",
    //   "6": "6",
    //   "7": "7",
    //   "8": "8",
    //   "9": "9",
    //   "10": "10",
    //   "11": "11",
    //   "12": "12"
    // },
    padding: theme => theme("spacing"),
    placeholderColor: theme => theme("colors"),
    stroke: theme => ({
      ...theme("colors"),
      current: "currentColor"
    }),
    strokeWidth: {
      "0": "0",
      "1": "1",
      "2": "2",
      "3": "3",
    },
    textColor: theme => theme("colors"),
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/20": "5%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      fit: "fit-content",
      "webkit-min": "-webkit-min-content",
      "webkit-max": "-webkit-max-content",
      "moz-min": "-moz-min-content",
      "moz-max": "-moz-max-content"
    }),
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "60": "60",
      "70": "70",
      "80": "80",
      "90": "90",
      "100": "100"
    },
    // gap: theme => theme("spacing"),
    // gridTemplateColumns: {
    //   none: "none",
    //   "1": "repeat(1, minmax(0, 1fr))",
    //   "2": "repeat(2, minmax(0, 1fr))",
    //   "3": "repeat(3, minmax(0, 1fr))",
    //   "4": "repeat(4, minmax(0, 1fr))",
    //   "5": "repeat(5, minmax(0, 1fr))",
    //   "6": "repeat(6, minmax(0, 1fr))",
    //   "7": "repeat(7, minmax(0, 1fr))",
    //   "8": "repeat(8, minmax(0, 1fr))",
    //   "9": "repeat(9, minmax(0, 1fr))",
    //   "10": "repeat(10, minmax(0, 1fr))",
    //   "11": "repeat(11, minmax(0, 1fr))",
    //   "12": "repeat(12, minmax(0, 1fr))"
    // },
    // gridColumn: {
    //   auto: "auto",
    //   "span-1": "span 1 / span 1",
    //   "span-2": "span 2 / span 2",
    //   "span-3": "span 3 / span 3",
    //   "span-4": "span 4 / span 4",
    //   "span-5": "span 5 / span 5",
    //   "span-6": "span 6 / span 6",
    //   "span-7": "span 7 / span 7",
    //   "span-8": "span 8 / span 8",
    //   "span-9": "span 9 / span 9",
    //   "span-10": "span 10 / span 10",
    //   "span-11": "span 11 / span 11",
    //   "span-12": "span 12 / span 12"
    // },
    // gridColumnStart: {
    //   auto: "auto",
    //   "1": "1",
    //   "2": "2",
    //   "3": "3",
    //   "4": "4",
    //   "5": "5",
    //   "6": "6",
    //   "7": "7",
    //   "8": "8",
    //   "9": "9",
    //   "10": "10",
    //   "11": "11",
    //   "12": "12",
    //   "13": "13"
    // },
    // gridColumnEnd: {
    //   auto: "auto",
    //   "1": "1",
    //   "2": "2",
    //   "3": "3",
    //   "4": "4",
    //   "5": "5",
    //   "6": "6",
    //   "7": "7",
    //   "8": "8",
    //   "9": "9",
    //   "10": "10",
    //   "11": "11",
    //   "12": "12",
    //   "13": "13"
    // },
    // gridTemplateRows: {
    //   none: "none",
    //   "1": "repeat(1, minmax(0, 1fr))",
    //   "2": "repeat(2, minmax(0, 1fr))",
    //   "3": "repeat(3, minmax(0, 1fr))",
    //   "4": "repeat(4, minmax(0, 1fr))",
    //   "5": "repeat(5, minmax(0, 1fr))",
    //   "6": "repeat(6, minmax(0, 1fr))",
    //   "7": "repeat(7, minmax(0, 1fr))",
    //   "8": "repeat(8, minmax(0, 1fr))",
    //   "9": "repeat(9, minmax(0, 1fr))",
    //   "10": "repeat(10, minmax(0, 1fr))",
    //   "11": "repeat(11, minmax(0, 1fr))",
    //   "12": "repeat(12, minmax(0, 1fr))"
    // },
    // gridRow: {
    //   auto: "auto",
    //   "span-1": "span 1 / span 1",
    //   "span-2": "span 2 / span 2",
    //   "span-3": "span 3 / span 3",
    //   "span-4": "span 4 / span 4",
    //   "span-5": "span 5 / span 5",
    //   "span-6": "span 6 / span 6",
    //   "span-7": "span 7 / span 7",
    //   "span-8": "span 8 / span 8",
    //   "span-9": "span 9 / span 9",
    //   "span-10": "span 10 / span 10",
    //   "span-11": "span 11 / span 11",
    //   "span-12": "span 12 / span 12"
    // },
    // gridRowStart: {
    //   auto: "auto",
    //   "1": "1",
    //   "2": "2",
    //   "3": "3",
    //   "4": "4",
    //   "5": "5",
    //   "6": "6",
    //   "7": "7",
    //   "8": "8",
    //   "9": "9",
    //   "10": "10",
    //   "11": "11",
    //   "12": "12",
    //   "13": "13"
    // },
    // gridRowEnd: {
    //   auto: "auto",
    //   "1": "1",
    //   "2": "2",
    //   "3": "3",
    //   "4": "4",
    //   "5": "5",
    //   "6": "6",
    //   "7": "7",
    //   "8": "8",
    //   "9": "9",
    //   "10": "10",
    //   "11": "11",
    //   "12": "12",
    //   "13": "13"
    // },
    // transformOrigin: {
    //   center: "center",
    //   top: "top",
    //   "top-right": "top right",
    //   right: "right",
    //   "bottom-right": "bottom right",
    //   bottom: "bottom",
    //   "bottom-left": "bottom left",
    //   left: "left",
    //   "top-left": "top left"
    // },
    // scale: {
    //   "0": "0",
    //   "50": ".5",
    //   "75": ".75",
    //   "85": ".85",
    //   "90": ".9",
    //   "95": ".95",
    //   "100": "1",
    //   "105": "1.05",
    //   "110": "1.1",
    //   "125": "1.25",
    //   "150": "1.5",
    //   "175": "1.75",
    //   "200": "2.0",
    //   "250": "2.5",
    //   "300": "3.0"
    // },
    // rotate: {
    //   "-180": "-180deg",
    //   "-90": "-90deg",
    //   "-45": "-45deg",
    //   "0": "0",
    //   "45": "45deg",
    //   "90": "90deg",
    //   "180": "180deg"
    // },
    // translate: (theme, { negative }) => ({
    //   ...theme("spacing"),
    //   ...negative(theme("spacing")),
    //   "-full": "-100%",
    //   "-1/2": "-50%",
    //   "1/2": "50%",
    //   full: "100%"
    // }),
    // skew: {
    //   "-12": "-12deg",
    //   "-6": "-6deg",
    //   "-3": "-3deg",
    //   "0": "0",
    //   "3": "3deg",
    //   "6": "6deg",
    //   "12": "12deg"
    // },
    // transitionProperty: {
    //   none: "none",
    //   all: "all",
    //   default:
    //     "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    //   colors: "background-color, border-color, color, fill, stroke",
    //   opacity: "opacity",
    //   shadow: "box-shadow",
    //   transform: "transform"
    // },
    // transitionTimingFunction: {
    //   linear: "linear",
    //   in: "cubic-bezier(0.4, 0, 1, 1)",
    //   out: "cubic-bezier(0, 0, 0.2, 1)",
    //   "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    // },
    // transitionDuration: {
    //   "75": "75ms",
    //   "100": "100ms",
    //   "150": "150ms",
    //   "200": "200ms",
    //   "250": "250ms",
    //   "300": "300ms",
    //   "500": "500ms",
    //   "700": "700ms",
    //   "1000": "1000ms"
    // }
  },
  // variants: {
  //   accessibility: ["responsive"],
  //   alignContent: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   alignItems: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   alignSelf: ["responsive"],
  //   appearance: ["responsive"],
  //   backgroundAttachment: ["responsive"],
  //   backgroundColor: ["responsive", "group-hover", "focus-within", "hover", "focus", "active"],
  //   backgroundPosition: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   backgroundRepeat: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   backgroundSize: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   borderCollapse: ["responsive"],
  //   borderColor: ["responsive", "group-hover", "focus-within", "hover", "focus", "active",],
  //   borderRadius: ["responsive", "group-hover", "focus-within", "hover", "focus",],
  //   borderStyle: ["responsive", "group-hover", "focus-within", "hover", "focus",],
  //   borderWidth: ["responsive", "group-hover", "focus-within", "hover", "focus", "first", "last"],
  //   boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   boxSizing: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   cursor: ["responsive", "hover"],
  //   display: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   fill: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   flex: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   flexDirection: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   flexGrow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   flexShrink: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   flexWrap: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   float: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   clear: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   fontFamily: ["responsive"],
  //   fontSize: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   fontSmoothing: ["responsive"],
  //   fontStyle: ["responsive", "group-hover", "focus-within", "hover", "focus", "active"],
  //   fontWeight: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   height: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   inset: ["responsive"],
  //   justifyContent: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   letterSpacing: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   lineHeight: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   listStylePosition: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   listStyleType: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   margin: ["responsive", "group-hover", "focus-within", "hover", "focus", "last", "first"],
  //   maxHeight: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   maxWidth: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   minHeight: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   minWidth: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   objectFit: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   objectPosition: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   order: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   outline: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   overflow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   padding: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   placeholderColor: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   pointerEvents: ["responsive"],
  //   position: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   resize: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   stroke: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   strokeWidth: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   tableLayout: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   textAlign: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   textColor: ["responsive", "group-hover", "focus-within", "hover", "focus", "active"],
  //   textDecoration: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   textTransform: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   userSelect: ["responsive"],
  //   verticalAlign: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   visibility: ["responsive"],
  //   whitespace: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   width: ["responsive", "group-hover", "focus-within", "hover", "focus", "active"],
  //   wordBreak: ["responsive", "group-hover", "focus-within", "hover", "focus", "active"],
  //   zIndex: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gap: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridAutoFlow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridTemplateColumns: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridColumn: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridColumnStart: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridColumnEnd: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridTemplateRows: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridRow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridRowStart: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   gridRowEnd: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   transform: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   transformOrigin: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   scale: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   rotate: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   translate: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   skew: ["responsive", "focus-within", "hover", "focus"],
  //   transitionProperty: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   transitionTimingFunction: ["responsive", "group-hover", "focus-within", "hover", "focus"],
  //   transitionDuration: ["responsive", "group-hover", "focus-within", "hover", "focus"]
  // },
  // corePlugins: {},
  // plugins: []
};