import { computed, ref } from "vue";

const BREAKPOINTS = {
  xs: 0,      // is "xs" if 0px <= width < 576px"
  sm: 576,    // is "sm" if 576px <= width < 768px"
  md: 768,    // is "md" if 768px <= width < 992px"
  lg: 992,    // is "lg" if 992px <= width < 1200px"
  xl: 1200    // is "xl" if 1200 <= width
}

class MediaServiceSingleton {

  screenWidth = ref(screen.width);
  size = computed(() => this._getSize())
  cssClass = computed(() => `size-${this._getSize()}`);

  constructor() {
    window.onresize = () => this.screenWidth.value = screen.width;
  }

  private _getSize(): 'xs' | 'sm' | 'md' | 'lg' | 'xl' {
    if (this.screenWidth.value < BREAKPOINTS.sm) return 'xs';
    if (this.screenWidth.value < BREAKPOINTS.md) return 'sm';
    if (this.screenWidth.value < BREAKPOINTS.lg) return 'md';
    if (this.screenWidth.value < BREAKPOINTS.xl) return 'lg';
    return 'xl';
  }

}

export const mediaService = new MediaServiceSingleton();