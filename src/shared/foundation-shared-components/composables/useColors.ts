import { useTheme } from "vuetify";

import Color from "color";

import type { ColorBase, ColorVariations } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

const colorsCache: Map<string, ColorVariations> = new Map();

export const useColors = () => {
    const theme = useTheme().current.value;
    const baseMinSaturation = 0;
    const baseFixedBrightness = 90;

    const isGrayScale = (color: Color): boolean => {
        const maxDiff = Math.max(
            Math.abs(color.red() - color.green()),
            Math.abs(color.green() - color.blue()),
            Math.abs(color.blue() - color.red())
        );
        return maxDiff < 10;
    };

    const isPastel = (color: Color): boolean => {
        return color.saturationv() <= 15 && color.value() >= 85;
    };

    const getLight = (base: Color): Color => {
        if (isGrayScale(base)) {
            return base
                .value(Math.max(base.value(), 95));
        }
        return base.saturationv(10).value(100);
    };

    const getSoft = (base: Color): Color => {
        return base.value(Math.min(base.value() + 10, 100));
    };

    const getDark = (base: Color): Color => {
        return base.value(Math.max(base.value() - 15, 0));
    };

    const getContrast = (color: Color): Color => {
        if (isGrayScale(color)) {
            const coeff = 4
            return color
                .value(color.value() < 70 ? 100 : Math.max(color.value() / coeff, 0));
        }

        if (isPastel(color)) {
            return color.darken(0.6);
        }

        if (color.darken(0.15).isLight()) {
            return color.darken(0.8);
        }

        return color.lightness(color.lightness() < 30 ? 100 : Math.min(color.lightness() + 60, 100));
    }

    const parseColor = (color: ColorBase): Color => {
        const themed = (Object as any).values(ColorEnum).includes(color);

        try {
            return themed ? new Color(theme.colors[color as ColorEnum]) : new Color(color);
        }
        catch {
            return new Color("#000000");
        }
    }

    const getColors = (color: ColorBase): ColorVariations => {
        const base = parseColor(color);

        const light = getLight(base);
        const soft = getSoft(base);
        const dark = getDark(base);

        return {
            light: light.hex(),
            lightContrast: getContrast(light).hex(),
            soft: soft.hex(),
            softContrast: getContrast(soft).hex(),
            base: base.hex(),
            baseContrast: getContrast(base).hex(),
            dark: dark.hex(),
            darkContrast: getContrast(dark).hex()
        };
    };

    const getGradients = (colors: ColorBase | ColorBase[], rotation: number = 90): ColorVariations => {
        const variations = Array.isArray(colors) ? colors.map(getColorsCached) : [getColorsCached(colors)];

        if (variations.length === 1) {
            return variations[0];
        }
        return {
            light: `linear-gradient(${rotation}deg, ${variations.map(v => v.light).join(", ")})`,
            soft: `linear-gradient(${rotation}deg, ${variations.map(v => v.soft).join(", ")})`,
            base: `linear-gradient(${rotation}deg, ${variations.map(v => v.base).join(", ")})`,
            dark: `linear-gradient(${rotation}deg, ${variations.map(v => v.dark).join(", ")})`,
        };
    }

    const getBasePaletteColors = (): string[][] => {
        const columnCount = 8
        const colors: string[][] = [];
        for (let saturation = baseMinSaturation; saturation <= 100; saturation += (100 - baseMinSaturation) / (columnCount - 1)) {
            const colorsRow = [];
            for (let hue = 0; hue < 360; hue += 5) {
                const color = new Color({ h: hue, s: saturation, v: baseFixedBrightness });
                colorsRow.push(color.hex());
            }
            colors.push(colorsRow)
        }
        let i = 0;
        for (let brightness = 0; brightness <= 100; brightness += (100 / (columnCount - 1))) {
            const color = new Color({ h: 0, s: 1, v: 100 - brightness });
            colors[i].unshift(color.hex());
            i++;
        }
        return colors;
    }

    const getColorsCached = (color: ColorBase): ColorVariations => {
        if (!colorsCache.has(color)) {
            const variations = getColors(color);
            colorsCache.set(color, variations);
        }
        return colorsCache.get(color) as ColorVariations;
    };

    return {
        getColors : getColorsCached,
        getGradients,
        getBasePaletteColors
    };
}
