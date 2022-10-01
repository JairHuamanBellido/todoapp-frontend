import { colors } from './colors/colors';
import {
  HeadingTypography,
  ParagraphTypography,
} from './typography/typography';

export const DefaultTheme = {
  colors: {
    highlightPrimary: {
      default: colors.Orange[500],
      hover: colors.Orange[400],
      pressed: colors.Orange[600],
      lightSurfacePrimary: colors.Orange[300],
      ligthSurfaceSecondary: colors.Orange[200],
      lightSurfaceTertriary: colors.Orange[100],
      lightSurfaceWinter: colors.Orange[50],
      blackSurfacePrimary: colors.Orange[900],
      blackSurfaceSecondary: colors.Orange[800],
      blackSurfaceTertriary: colors.Orange[700],
    },

    highlightSecondary: {
      default: colors.MidnightGreen[500],
      hover: colors.MidnightGreen[400],
      pressed: colors.MidnightGreen[600],
      lightSurfacePrimary: colors.MidnightGreen[300],
      ligthSurfaceSecondary: colors.MidnightGreen[200],
      lightSurfaceTertriary: colors.MidnightGreen[100],
      lightSurfaceWinter: colors.MidnightGreen[50],
      blackSurfacePrimary: colors.MidnightGreen[900],
      blackSurfaceSecondary: colors.MidnightGreen[800],
      blackSurfaceTertriary: colors.MidnightGreen[700],
    },

    highlightTertriary: {
      default: colors.Pink[500],
      hover: colors.Pink[400],
      pressed: colors.Pink[600],
      lightSurfacePrimary: colors.Pink[300],
      ligthSurfaceSecondary: colors.Pink[200],
      lightSurfaceTertriary: colors.Pink[100],
      lightSurfaceWinter: colors.Pink[50],
      blackSurfacePrimary: colors.Pink[900],
      blackSurfaceSecondary: colors.Pink[800],
      blackSurfaceTertriary: colors.Pink[700],
    },

    coreSkyBlue: {
      default: colors.SkyBlue[500],
      hover: colors.SkyBlue[400],
      pressed: colors.SkyBlue[600],
      lightSurfacePrimary: colors.SkyBlue[300],
      ligthSurfaceSecondary: colors.SkyBlue[200],
      lightSurfaceTertriary: colors.SkyBlue[100],
      lightSurfaceWinter: colors.SkyBlue[50],
      blackSurfacePrimary: colors.SkyBlue[900],
      blackSurfaceSecondary: colors.SkyBlue[800],
      blackSurfaceTertriary: colors.SkyBlue[700],
    },
    coreIceberg: {
      default: colors.Iceberg[500],
      hover: colors.Iceberg[400],
      pressed: colors.Iceberg[600],
      lightSurfacePrimary: colors.Iceberg[300],
      ligthSurfaceSecondary: colors.Iceberg[200],
      lightSurfaceTertriary: colors.Iceberg[100],
      lightSurfaceWinter: colors.Iceberg[50],
      blackSurfacePrimary: colors.Iceberg[900],
      blackSurfaceSecondary: colors.Iceberg[800],
      blackSurfaceTertriary: colors.Iceberg[700],
    },
  },
  fontSize: {
    heading: {
      ...HeadingTypography,
    },
    paragraph: {
      ...ParagraphTypography,
    },
  },
};
