import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

export const useAppOptions = () => {
    const { width: screenWidth } = useWindowSize();
    const mobileWidthStart = import.meta.env.VITE_APP_MOBILE_WIDTH_START;
    const isDesktopMode = computed(() => screenWidth.value >= mobileWidthStart);

    return {
        screenWidth,
        isDesktopMode,
        mobileWidthStart,
    };
};