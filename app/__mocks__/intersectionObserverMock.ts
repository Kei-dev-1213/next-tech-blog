global.IntersectionObserver = class IntersectionObserver {
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
  root: Element | null = null;
  rootMargin: string = "";
  thresholds: number[] = [];
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
  observe(target: Element): void {}
  unobserve(target: Element): void {}
  disconnect(): void {}
};
